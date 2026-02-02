import React, { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { processImage } from '@/utils/imageProcessor';
import { Upload, X, GripVertical, Image as ImageIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export type ImageItem =
  | { kind: 'existing'; url: string }
  | { kind: 'new'; file: File; preview: string };

interface ImageUploaderProps {
  items: ImageItem[];
  onChange: (items: ImageItem[]) => void;
  maxImages?: number;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  items,
  onChange,
  maxImages = 20
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFiles = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    if (items.length + files.length > maxImages) {
      toast({
        title: 'Límite de imágenes',
        description: `Solo puedes subir hasta ${maxImages} imágenes`,
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    const newItems: ImageItem[] = [];
    const promises: Promise<void>[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const promise = processImage(file).then((processed) => {
          return new Promise<void>((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              const base64 = e.target?.result as string;
              newItems.push({ kind: 'new', file: processed.file, preview: base64 });
              resolve();
            };
            reader.onerror = () => resolve();
            reader.readAsDataURL(processed.file);
          });
        });
        promises.push(promise);
      }

      await Promise.all(promises);
      onChange([...items, ...newItems]);
      setUploading(false);
      toast({
        title: 'Imágenes cargadas',
        description: `${files.length} imagen(es) agregada(s) exitosamente`,
      });
    } catch (error) {
      setUploading(false);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Error al procesar imágenes',
        variant: 'destructive',
      });
    }
  }, [items, maxImages, onChange, toast]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  }, [handleFiles]);

  const removeImage = useCallback((index: number) => {
    const next = items.filter((_, i) => i !== index);
    onChange(next);
    toast({
      title: 'Imagen eliminada',
      description: 'La imagen ha sido removida',
    });
  }, [items, onChange, toast]);

  const moveImage = useCallback((fromIndex: number, toIndex: number) => {
    const next = [...items];
    const [removed] = next.splice(fromIndex, 1);
    next.splice(toIndex, 0, removed);
    onChange(next);
  }, [items, onChange]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-2 block">
          Imágenes de la Propiedad ({items.length}/{maxImages})
        </label>
        
        <Card
          className={cn(
            "border-2 border-dashed transition-colors",
            isDragging ? "border-primary bg-primary/5" : "border-gray-300",
            uploading && "opacity-50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardContent className="p-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-gray-100 p-4">
                <Upload className="h-8 w-8 text-gray-400" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700">
                  Arrastra imágenes aquí o haz clic para seleccionar
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, PNG o WEBP (máx. 5MB cada una)
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading || items.length >= maxImages}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                Seleccionar Imágenes
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                multiple
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {items.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const src = item.kind === 'existing' ? item.url : item.preview;
            return (
            <div
              key={index}
              className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={src}
                alt={`Preview ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  onClick={() => removeImage(index)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => moveImage(index, index - 1)}
                  className="absolute top-2 left-2 bg-black/50 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <GripVertical className="h-4 w-4" />
                </button>
              )}
              {index === 0 && (
                <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                  Principal
                </div>
              )}
            </div>
          );
          })}
        </div>
      )}
    </div>
  );
};

