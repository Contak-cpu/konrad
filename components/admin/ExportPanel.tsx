import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getProperties } from '@/utils/propertyManager';
import { generatePropertyFile, generateIndexFile, downloadFile } from '@/utils/fileGenerator';
import { Property } from '@/types';
import { Download, FileCode, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ExportPanel: React.FC = () => {
  const [exporting, setExporting] = useState(false);
  const [properties, setProperties] = useState<Property[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const props = await getProperties();
        if (mounted) setProperties(props);
      } catch {
        if (mounted) setProperties([]);
      }
    };
    void load();
    return () => {
      mounted = false;
    };
  }, []);

  const handleExportAll = async () => {
    setExporting(true);
    try {
      const properties = await getProperties();
      
      // Generar archivo index.ts
      const indexContent = generateIndexFile(properties);
      downloadFile(indexContent, 'index.ts');

      // Generar archivo individual para cada propiedad
      properties.forEach((property) => {
        const images = property.images || (property.imageUrl ? [property.imageUrl] : []);
        const fileContent = generatePropertyFile(property, images);
        const fileName = `${property.address.toLowerCase().replace(/[^a-z0-9]+/g, '_').substring(0, 50)}.ts`;
        downloadFile(fileContent, fileName);
      });

      toast({
        title: 'Exportación completada',
        description: `${properties.length} archivo(s) generado(s) exitosamente`,
      });
    } catch (error) {
      toast({
        title: 'Error en la exportación',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
    } finally {
      setExporting(false);
    }
  };

  const handleExportSingle = (property: Property) => {
    try {
      const images = property.images || (property.imageUrl ? [property.imageUrl] : []);
      const fileContent = generatePropertyFile(property, images);
      const fileName = `${property.address.toLowerCase().replace(/[^a-z0-9]+/g, '_').substring(0, 50)}.ts`;
      downloadFile(fileContent, fileName);
      
      toast({
        title: 'Archivo generado',
        description: `Archivo ${fileName} descargado exitosamente`,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Exportar Propiedades</h1>
        <p className="text-gray-600 mt-1">Genera archivos TypeScript para tus propiedades</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Los archivos generados deben ser copiados manualmente a la carpeta <code className="bg-gray-100 px-1 rounded">data/properties/</code> y luego hacer commit y rebuild en Vercel.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Exportar Todas las Propiedades</CardTitle>
          <CardDescription>
            Genera todos los archivos TypeScript necesarios para todas las propiedades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={handleExportAll} 
            disabled={exporting}
            size="lg"
            className="w-full"
          >
            <Download className="mr-2 h-4 w-4" />
            {exporting ? 'Exportando...' : `Exportar ${properties.length} Propiedades`}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exportar Propiedades Individuales</CardTitle>
          <CardDescription>
            Genera el archivo TypeScript para una propiedad específica
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {properties.map((property) => (
              <div
                key={property.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium">{property.title}</p>
                  <p className="text-sm text-gray-500">{property.address}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleExportSingle(property)}
                >
                  <FileCode className="mr-2 h-4 w-4" />
                  Exportar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

