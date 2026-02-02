import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { 
  getProperties, 
  deleteProperty, 
  markAsSold, 
  markAsRented,
  updateProperty 
} from '@/utils/propertyManager';
import { Property } from '@/types';
import { Edit, Trash2, CheckCircle, Eye, EyeOff, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const PropertiesList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [propertyToDelete, setPropertyToDelete] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    void loadProperties();
  }, []);

  const loadProperties = async () => {
    setLoading(true);
    try {
      const props = await getProperties();
      setProperties(props);
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'No se pudieron cargar las propiedades',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id: string) => {
    setPropertyToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (propertyToDelete !== null) {
      const success = await deleteProperty(propertyToDelete);
      if (success) {
        await loadProperties();
        toast({
          title: 'Propiedad eliminada',
          description: 'La propiedad ha sido eliminada exitosamente',
        });
      }
      setDeleteDialogOpen(false);
      setPropertyToDelete(null);
    }
  };

  const handleMarkAsSold = async (id: string) => {
    const success = await markAsSold(id);
    if (success) {
      await loadProperties();
      toast({
        title: 'Propiedad marcada',
        description: 'La propiedad ha sido marcada como vendida',
      });
    }
  };

  const handleMarkAsRented = async (id: string) => {
    const success = await markAsRented(id);
    if (success) {
      await loadProperties();
      toast({
        title: 'Propiedad marcada',
        description: 'La propiedad ha sido marcada como alquilada',
      });
    }
  };

  const handleToggleVisibility = async (property: Property) => {
    try {
      await updateProperty(property.id, { hidden: !property.hidden });
      await loadProperties();
      toast({
        title: 'Visibilidad actualizada',
        description: property.hidden ? 'La propiedad ahora es visible' : 'La propiedad ahora está oculta',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'No se pudo actualizar la visibilidad',
        variant: 'destructive',
      });
    }
  };

  const filteredProperties = properties.filter(prop => {
    const search = searchTerm.toLowerCase();
    return (
      prop.title.toLowerCase().includes(search) ||
      prop.address.toLowerCase().includes(search) ||
      prop.type.toLowerCase().includes(search)
    );
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Propiedades</h1>
          <p className="text-gray-600 mt-1">Gestiona todas tus propiedades</p>
        </div>
        <Button onClick={() => navigate('/admin/properties/new')}>
          Nueva Propiedad
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar propiedades..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Dirección</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Operación</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                  Cargando propiedades...
                </TableCell>
              </TableRow>
            ) : filteredProperties.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                  No se encontraron propiedades
                </TableCell>
              </TableRow>
            ) : (
              filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium">{property.id}</TableCell>
                  <TableCell className="max-w-xs truncate">{property.title}</TableCell>
                  <TableCell>{property.address}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{property.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={property.operation === 'Venta' ? 'default' : 'secondary'}>
                      {property.operation}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatPrice(property.price)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {property.hidden ? (
                        <Badge variant="destructive">Oculta</Badge>
                      ) : (
                        <Badge variant="default">Visible</Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate(`/admin/properties/${property.id}`)}
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleToggleVisibility(property)}
                        title={property.hidden ? 'Mostrar' : 'Ocultar'}
                      >
                        {property.hidden ? (
                          <Eye className="h-4 w-4" />
                        ) : (
                          <EyeOff className="h-4 w-4" />
                        )}
                      </Button>
                      {property.operation === 'Venta' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMarkAsSold(property.id)}
                          title="Marcar como vendida"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                      )}
                      {property.operation === 'Alquiler' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleMarkAsRented(property.id)}
                          title="Marcar como alquilada"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(property.id)}
                        title="Eliminar"
                      >
                        <Trash2 className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. La propiedad será eliminada permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-600 hover:bg-red-700">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

