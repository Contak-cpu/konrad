import React from 'react';
import type { Property } from '../types';

const FormPropUrquiza: React.FC = () => {
  const property: Property = {
    id: 6,
    title: "Casa familiar en Urquiza",
    address: "Urquiza 515",
    type: "Casa",
    rooms: 3,
    price: 700000,
    additionalCosts: "45.000-50.000",
    description: "Espaciosa casa con 3 dormitorios, patio con parrilla y garage. Ideal para vida familiar.",
    available: "Inmediato",
    features: ["3 Dormitorios", "Patio con parrilla", "Garage para 2 autos", "Zona residencial"],
    imageUrl: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540791418_1344964010818104_5654399181896132944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0YHEWQUnK3c_j8bDt2J-RTgKI7CpDDZJOAojsKkMNkn2udneLwh59T7uM1ErLygZtdDJXkYrS26AoVCkgUgXR&_nc_ohc=XwLnX49YtcAQ7kNvwFu86yg&_nc_oc=AdlaJ6YqIvyYmCUAdRw_m_v4Oumgp4--jVWqoqYcHYzgiHbiuf0azyAGpL60IboHzV8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QNuwE7uz3r28ezEw98fQNQ&oh=00_Afae9k3jlfmP6vvJcUfO4xvqSEwunZYR0nOE_fiDg9ktmQ&oe=68C28B9D",
    images: [
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540791418_1344964010818104_5654399181896132944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0YHEWQUnK3c_j8bDt2J-RTgKI7CpDDZJOAojsKkMNkn2udneLwh59T7uM1ErLygZtdDJXkYrS26AoVCkgUgXR&_nc_ohc=XwLnX49YtcAQ7kNvwFu86yg&_nc_oc=AdlaJ6YqIvyYmCUAdRw_m_v4Oumgp4--jVWqoqYcHYzgiHbiuf0azyAGpL60IboHzV8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QNuwE7uz3r28ezEw98fQNQ&oh=00_Afae9k3jlfmP6vvJcUfO4xvqSEwunZYR0nOE_fiDg9ktmQ&oe=68C28B9D",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542033234_1344960010818504_8833407585601056846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNIvtnF1NB8YOHiWaAlgvKNTH7-Ibz4Ig1Mfv4hvPgiFkq7HmJWKYgHW5-8KbTM6Z-xg79EgRGsnYYe6_0tqSF&_nc_ohc=DZzLXG8DuJsQ7kNvwHQQlpi&_nc_oc=AdlqX2KFUEH6lozMVTI0A8hvO-InPUhJ4LDdn-jp00IrO-01easMXIFOj8GDd04Y4So&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=1A1jLUWDVmJ_Bj6WioLT_g&oh=00_AfY1FlwnIqPEYNRd9iMHB70D84z3DwrMCZ5ueBlkQVwfwA&oe=68C28607",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542758962_1344960007485171_3546193982049918342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEir8nr4X-IWsPhCjk3gz_4uNzGSGkbW7W43MZIaRtbtRSMd5Jp1bT_2n2lQppD9a1R1IdQ1fjhVt62m58gS0Rj&_nc_ohc=xbDKf0GlJHIQ7kNvwF9EbNI&_nc_oc=AdkZ1iocYCz-_UY5u56Ar6yFIeoK4iFstieglYUrpdWv8oXaPoPXCUxqIycJJ_M8oc8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=cZ1JDGBPX4Ue9gM6nXRsug&oh=00_AfaiMnETILscuEPLKT2RLg_PgzIKdTDNWTL34p6wFJFrUA&oe=68C27922",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536279917_1344960017485170_6150790126962718360_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGKdNTUVSlIist9U84v4CFUzOKsGVbf6FvM4qwZVt_oW1d2pjFP6qnrbbb8PwVqxCaJUOAhKyzpvDHrf2KUFMcf&_nc_ohc=PZ0NeFANMZcQ7kNvwF5tlBR&_nc_oc=AdlsQ05Zmt9AhNenSrQfUs_7Zr8BgxnK2yulso6BUFnlmjQi591kSSTIoQeaeH8r9XY&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=FWjNZAqQenNExSDC4iZ6GA&oh=00_AfYu7Jyx96RscLVQrlfeq7W2OIJnddjRF9FoEl-WMyqa5Q&oe=68C284CF",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536273966_1344960030818502_6686354774815336572_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEgdTcciOcYJITCGKO4FffhW6P9-swK5mJbo_36zArmYvdoc7BxpY1WPhOXu74XL3rTNBs-XYm42PpHfBzUnQ6z&_nc_ohc=rsJtV6RzJHoQ7kNvwHJrie3&_nc_oc=AdmRic7Eu8hcYP8jPAog-RUhrGd-4Upr6pIgP2L116gCk3uyoJENEBjAMVcVjWzXDeA&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=b7RqbScbBLEjTTxUMotBdA&oh=00_Afa5pLBe403oZtYnEY5P8uVWNpxVf3Lf_k1C_Szdki73Vw&oe=68C289E0",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536275113_1344959960818509_2725715572640271472_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZ4DKUgcV0rQalyaUAT4wZvHJ5HVO2msq8cnkdU7aayrK-a_rCKBm74TJwnoX127FqWUnmSZtWsjACv8IwIWRi&_nc_ohc=PhNwOCSQVFwQ7kNvwFBXhIx&_nc_oc=AdlKmQSekZkxiPdRjbFQAKRGBfG7-W8Ms6vmp9mnb3337XYcwibkEpZHH2nK63TAhCI&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=kOnnvNQpES_zsUFe3o3vYg&oh=00_AfYlMXmWsHvOCmXMruio3yUhjMTFjo3fTuaCWnKp1fPtow&oe=68C28F36",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542401173_1344959970818508_7499106472812024878_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHpRIOrFnUw3kks9H0FqBJq7uAu6KrIJ-ru4C7oqsgnyuCpUzsk9biyVETfp2QkQTLt0P47NKUkhO-Yj7ZpYpl&_nc_ohc=Si6yBmPiqtgQ7kNvwHF0dK8&_nc_oc=Adlq8sJeicg82jDoLew8HVgjGsyJ7HPfIal_eOaeLL-iGV58y6Fd22DCSD0TvViT5jc&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=STlClhi4MnG-qAf2gNdNhw&oh=00_AfYVC5kMIwkDMLSCP4xYmC_VYmTX-7AihL7JyYENShQRlw&oe=68C28223",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542693392_1344959997485172_7895993102785036459_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzExVHh8GD-V6BTh6Aq7Vcx50YWtUasG3HnRha1RqwbTm9S-04vY5RtB3BDDtICf_BusRi5Y8B3qii-28v_ZlX&_nc_ohc=fEQNrdXCwnUQ7kNvwE5-ONU&_nc_oc=AdllWQ-Zwr-2sKTFHS_ilhKSlLQyXWHlRX8dWBhoWjmmAGLV6eXDiyRJzXgDFepGpPA&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=gE34PbbvHT_p8rqCItSeAg&oh=00_Afb6HQ0QEyyrFVQFBQjaoRIqF5VyJbssPX9hg9PS77NMIA&oe=68C26E34"
    ],
    operation: "Alquiler"
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">{property.title}</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <input
            type="text"
            defaultValue={property.address}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select
              defaultValue={property.type}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Monoambiente">Monoambiente</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dormitorios
            </label>
            <input
              type="number"
              defaultValue={property.rooms}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio
            </label>
            <input
              type="number"
              defaultValue={property.price}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gastos Adicionales
            </label>
            <input
              type="text"
              defaultValue={property.additionalCosts}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            defaultValue={property.description}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Disponibilidad
          </label>
          <input
            type="text"
            defaultValue={property.available}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Características (separadas por comas)
          </label>
          <input
            type="text"
            defaultValue={property.features.join(', ')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            URL de Imagen Principal
          </label>
          <input
            type="url"
            defaultValue={property.imageUrl}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Operación
          </label>
          <select
            defaultValue={property.operation}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Alquiler">Alquiler</option>
            <option value="Venta">Venta</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
            Cancelar
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormPropUrquiza;

