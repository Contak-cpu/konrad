import { Property } from '@/types';

export const generateFileName = (address: string): string => {
  // Convertir dirección a nombre de archivo válido
  return address
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .substring(0, 50);
};

export const generatePropertyFile = (property: Property, images: string[]): string => {
  const propertyName = generateFileName(property.address);
  
  // Generar el código TypeScript de la propiedad
  // Si las imágenes son base64 (muy largas), las mantenemos como están
  // Si son URLs, las mantenemos como strings
  const imagesArray = images.length > 0 
    ? `[\n    ${images.map(img => {
        // Si es base64 (empieza con data:), mantenerlo completo
        // Si es URL, mantenerlo como string
        return `"${img.replace(/"/g, '\\"').replace(/\n/g, '')}"`;
      }).join(',\n    ')}\n  ]`
    : '[]';

  const additionalCosts = property.additionalCosts 
    ? typeof property.additionalCosts === 'string'
      ? `"${property.additionalCosts}"`
      : property.additionalCosts
    : 'undefined';

  const hidden = property.hidden ? 'true' : 'false';

  return `import { Property } from '../../types';

export const ${propertyName}: Property = {
  id: "${property.id}",
  title: "${property.title.replace(/"/g, '\\"')}",
  address: "${property.address.replace(/"/g, '\\"')}",
  type: "${property.type}",
  rooms: ${property.rooms},
  price: ${property.price},
  additionalCosts: ${additionalCosts},
  description: "${property.description.replace(/"/g, '\\"').replace(/\n/g, '\\n')}",
  available: "${property.available}",
  features: [
    ${property.features.map(f => `"${f.replace(/"/g, '\\"')}"`).join(',\n    ')}
  ],
  imageUrl: "${property.imageUrl}",
  images: ${imagesArray},
  operation: "${property.operation}",
  hidden: ${hidden}
};
`;
};

export const generateIndexFile = (properties: Property[]): string => {
  const imports = properties.map(prop => {
    const fileName = generateFileName(prop.address);
    return `import { ${fileName} } from './${fileName}';`;
  }).join('\n');

  const exports = properties.map(prop => {
    const fileName = generateFileName(prop.address);
    return `  ${fileName},`;
  }).join('\n');

  return `${imports}

export const properties: Property[] = [
${exports}
];
`;
};

export const downloadFile = (content: string, filename: string): void => {
  const blob = new Blob([content], { type: 'text/typescript' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

