import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageUploader, type ImageItem } from './ImageUploader';
import { Property } from '@/types';
import { 
  getPropertyById, 
  addProperty, 
  updateProperty 
} from '@/utils/propertyManager';
import { useToast } from '@/hooks/use-toast';
import { Save, ArrowLeft } from 'lucide-react';
import { uploadImage, deleteImageByUrl } from '@/lib/supabase/storage';

const propertySchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  address: z.string().min(1, 'La dirección es requerida'),
  type: z.enum(['Monoambiente', 'Departamento', 'Casa', 'Local comercial', 'Lote', 'Galpón']),
  operation: z.enum(['Alquiler', 'Venta']),
  rooms: z.number().min(0, 'El número de ambientes debe ser mayor o igual a 0'),
  price: z.number().min(0, 'El precio debe ser mayor o igual a 0'),
  additionalCosts: z.string().optional(),
  description: z.string().min(1, 'La descripción es requerida'),
  available: z.enum(['Inmediato', 'Septiembre', 'En construcción', 'A terminar']),
  features: z.array(z.string()).min(1, 'Debe tener al menos una característica'),
  hidden: z.boolean().optional(),
});

type PropertyFormValues = z.infer<typeof propertySchema>;

export const PropertyForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);
  const [initialExistingUrls, setInitialExistingUrls] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const isEditing = !!id;

  const form = useForm<PropertyFormValues>({
    resolver: zodResolver(propertySchema),
    defaultValues: {
      title: '',
      address: '',
      type: 'Departamento',
      operation: 'Venta',
      rooms: 1,
      price: 0,
      additionalCosts: '',
      description: '',
      available: 'Inmediato',
      features: [],
      hidden: false,
    },
  });

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!isEditing || !id) return;
      const property = await getPropertyById(id);
      if (!mounted) return;
      if (!property) return;

      form.reset({
        title: property.title,
        address: property.address,
        type: property.type,
        operation: property.operation,
        rooms: property.rooms,
        price: property.price,
        additionalCosts: property.additionalCosts?.toString() || '',
        description: property.description,
        available: property.available,
        features: property.features,
        hidden: property.hidden || false,
      });

      const urls =
        property.images && property.images.length > 0
          ? property.images
          : property.imageUrl
            ? [property.imageUrl]
            : [];

      setInitialExistingUrls(urls);
      setImageItems(urls.map((url) => ({ kind: 'existing', url })));
    };

    load();
    return () => {
      mounted = false;
    };
  }, [id, isEditing, form]);

  const addFeature = () => {
    if (featureInput.trim()) {
      const currentFeatures = form.getValues('features');
      form.setValue('features', [...currentFeatures, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    const currentFeatures = form.getValues('features');
    form.setValue('features', currentFeatures.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: PropertyFormValues) => {
    setSubmitting(true);
    try {
      let propertyId = id ?? '';

      if (!isEditing) {
        // 1) Crear propiedad (sin imágenes aún) para obtener ID
        const created = await addProperty({
          id: '',
          title: data.title,
          address: data.address,
          type: data.type,
          operation: data.operation,
          rooms: data.rooms,
          price: data.price,
          additionalCosts: data.additionalCosts || undefined,
          description: data.description,
          available: data.available,
          features: data.features,
          imageUrl: '',
          images: undefined,
          hidden: data.hidden || false,
        });
        propertyId = created.id;
      }

      if (!propertyId) {
        throw new Error('No se pudo determinar el ID de la propiedad');
      }

      // 2) Subir nuevas imágenes y construir el orden final (URLs)
      const finalUrls: string[] = [];
      for (const item of imageItems) {
        if (item.kind === 'existing') {
          finalUrls.push(item.url);
        } else {
          const uploaded = await uploadImage(item.file, propertyId);
          finalUrls.push(uploaded.url);
        }
      }

      // 3) Best-effort: eliminar imágenes removidas (solo si eran existentes)
      if (isEditing && initialExistingUrls.length) {
        const removed = initialExistingUrls.filter((u) => !finalUrls.includes(u));
        for (const url of removed) {
          try {
            await deleteImageByUrl(url);
          } catch {
            // Ignorar (la prioridad es no romper el guardado)
          }
        }
      }

      // 4) Persistir cambios (campos + imágenes)
      const updates: Partial<Property> = {
        title: data.title,
        address: data.address,
        type: data.type,
        operation: data.operation,
        rooms: data.rooms,
        price: data.price,
        additionalCosts: data.additionalCosts || undefined,
        description: data.description,
        available: data.available,
        features: data.features,
        hidden: data.hidden || false,
        imageUrl: finalUrls[0] || '',
        images: finalUrls,
      };

      await updateProperty(propertyId, updates);

      toast({
        title: isEditing ? 'Propiedad actualizada' : 'Propiedad creada',
        description: isEditing
          ? 'La propiedad ha sido actualizada exitosamente'
          : 'La propiedad ha sido creada exitosamente',
      });
      navigate('/admin/properties');
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Editar Propiedad' : 'Nueva Propiedad'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEditing ? 'Modifica los datos de la propiedad' : 'Completa el formulario para crear una nueva propiedad'}
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate('/admin/properties')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Información Básica */}
            <Card>
              <CardHeader>
                <CardTitle>Información Básica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Título</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Departamento en el centro" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: Av. Principal 123" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Monoambiente">Monoambiente</SelectItem>
                            <SelectItem value="Departamento">Departamento</SelectItem>
                            <SelectItem value="Casa">Casa</SelectItem>
                            <SelectItem value="Local comercial">Local comercial</SelectItem>
                            <SelectItem value="Lote">Lote</SelectItem>
                            <SelectItem value="Galpón">Galpón</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="operation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Operación</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Venta">Venta</SelectItem>
                            <SelectItem value="Alquiler">Alquiler</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="rooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ambientes</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="available"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Disponibilidad</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Inmediato">Inmediato</SelectItem>
                            <SelectItem value="Septiembre">Septiembre</SelectItem>
                            <SelectItem value="En construcción">En construcción</SelectItem>
                            <SelectItem value="A terminar">A terminar</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Precio y Estado */}
            <Card>
              <CardHeader>
                <CardTitle>Precio y Estado</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Precio (ARS)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalCosts"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Costos Adicionales (Opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Ej: $25.000 (municipales)" {...field} />
                      </FormControl>
                      <FormDescription>
                        Puedes ingresar un número o texto descriptivo
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hidden"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Ocultar propiedad</FormLabel>
                        <FormDescription>
                          Las propiedades ocultas no se mostrarán en el sitio público
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          {/* Descripción */}
          <Card>
            <CardHeader>
              <CardTitle>Descripción</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Describe la propiedad en detalle..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Características */}
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Agregar característica (ej: Cocina completa)"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addFeature();
                    }
                  }}
                />
                <Button type="button" onClick={addFeature}>
                  Agregar
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.watch('features').map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-md"
                  >
                    <span className="text-sm">{feature}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-4 w-4"
                      onClick={() => removeFeature(index)}
                    >
                      ×
                    </Button>
                  </div>
                ))}
              </div>
              <FormMessage />
            </CardContent>
          </Card>

          {/* Imágenes */}
          <Card>
            <CardHeader>
              <CardTitle>Imágenes</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUploader
                items={imageItems}
                onChange={setImageItems}
              />
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/properties')}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={submitting}>
              <Save className="mr-2 h-4 w-4" />
              {submitting ? 'Guardando...' : isEditing ? 'Guardar Cambios' : 'Crear Propiedad'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

