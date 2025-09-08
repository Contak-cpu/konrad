import React from 'react';
import type { Property } from '../types';

const FormPropGiachino: React.FC = () => {
  const property: Property = {
    id: 12,
    title: "Casa familiar en Giachino",
    address: "Giachino 2172",
    type: "Casa",
    rooms: 2,
    price: 550000,
    additionalCosts: 26000,
    description: "Espaciosa y cómoda casa ideal para disfrutar en familia. 2 habitaciones, comedor, cocina, 1 baño y patio. Contrato a 2 años con aumentos cada 4 meses según ICL.",
    available: "Inmediato",
    features: ["2 Habitaciones", "Comedor", "Cocina", "1 Baño", "Patio", "Contrato 2 años", "Aumentos ICL"],
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/540499866_1339019574745881_8215133824004839314_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAp3QGavmroMRU-vazJs2h21Kq7oesU2bbUqruh6xTZtEeirNd8XVnrloXYRVFMQB8segnvwVapbgEzBaKJ3py&_nc_ohc=dQA3OSrd4JYQ7kNvwFMmARx&_nc_oc=AdmxCpjg_ur1VSvd8hNvwDLhwH6euUoh3t-em6dgF50r7vYSniTmml3F13bDHlK9JOM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=QlIehmYjHbBzv7mrl8maig&oh=00_AfZg0a_00chMk0v-Ugrv7x5HF6U6aXt55pMGkxpt3epyrA&oe=68C267F8",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/540499866_1339019574745881_8215133824004839314_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAp3QGavmroMRU-vazJs2h21Kq7oesU2bbUqruh6xTZtEeirNd8XVnrloXYRVFMQB8segnvwVapbgEzBaKJ3py&_nc_ohc=dQA3OSrd4JYQ7kNvwFMmARx&_nc_oc=AdmxCpjg_ur1VSvd8hNvwDLhwH6euUoh3t-em6dgF50r7vYSniTmml3F13bDHlK9JOM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=QlIehmYjHbBzv7mrl8maig&oh=00_AfZg0a_00chMk0v-Ugrv7x5HF6U6aXt55pMGkxpt3epyrA&oe=68C267F8",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536273025_1339019634745875_2273471591456100468_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQeZulAi1ST1_SIwdUUW8tC0WltzlSgr4LRaW3OVKCvj10fjQwkwpZWuW3jDJ2BtZ2QLZtwNlTGs-Ee0-g82Ff&_nc_ohc=VikZ78n9edUQ7kNvwH0Boir&_nc_oc=Adm4p8olLHHG42iEBjID6ZtoKtgzbfw40kn8SfIFfRE2wvdH3edw1gO9PlITbI2n7-8&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=-t67Me1_lsJFSTpzQmd3kA&oh=00_Afajq5aX8649hahhVyNfEkzA04QHBhvHeh_C7fOuIvUWWg&oe=68C26D3A",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540512794_1339019624745876_226716041700109893_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEVgBS4cRzy2yZcRWldzUvAuZ0dloKgrzy5nR2WgqCvPHyj0_fVZgR0Yif8R_PUrP86ZPQb2BLZqmgZkXcvzySr&_nc_ohc=oFDo8Gc1LN8Q7kNvwGt6iau&_nc_oc=Adkdsf9Tihy-zjE3FdbgKc_y0_Y5FqC6ubnk2fr3Ls0XiYtg28WQRWd9u8U8-BDM-vc&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=vEg0TNxpXOvNbvvEVwbfkg&oh=00_AfZoUaCb3wa7X5UOwe7I30-qLaTx4RoCIAAp_sKQmgxwyQ&oe=68C276E9",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/538843041_1339019544745884_5102826057792642656_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJNYXNtO2RWHpmndR9AwXtj3vFDY1o-MiPe8UNjWj4yPnArjsTLtdHYcP_G9EjhFn4xe2F2qSgRQY0EeXmsmWp&_nc_ohc=tz6_mDjZsRcQ7kNvwHkJ8Oa&_nc_oc=AdltKsnzdvsl0REa3wyGKEvjmb-_3FQiU0nmIE3h7MxNck-t7aU8qwcDkg66tysS36Q&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=gyRu89QKZ5THUjO_WiSWUQ&oh=00_AfYBkrtvzP1fYX-ltotQIvmSJpulfO0sgVp0RaJBETe8bw&oe=68C27A23",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536281561_1339019631412542_7501453953136610356_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgnsaash1NsOWFkgjldpmIEmHLkLRSD00SYcuQtFIPTZyne482JvAHzn45fF-5-tJXpQnXq1pUFttcySJTUckb&_nc_ohc=vGO1e3p8364Q7kNvwGR3VpP&_nc_oc=Adl5Kk22q0mRe9arJ1EtGHOYAlzDoqaMo0P4hLHsab1MLt4Blv6q1DjvmTVDamw1f4s&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=cOV0tp5BrQvLiPe2QfBTrw&oh=00_AfZVoCaNHFSwgbsIgdZX8HVybw4XNKaiP3VQX8F7E7W0Hg&oe=68C28895",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/539420619_1339019638079208_5002939396322820644_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGFWB9v74KjxuhFCNnkEHKU-6BYX45smgP7oFhfjmyaA4Q6zz8Pc4BeG3o9DWntkG9ueV_uGFo5jIlfRUd-r2Gm&_nc_ohc=nVb98QsARNcQ7kNvwFWpUCP&_nc_oc=Adk3ZOBh0mHVMcTDfyhOoRCR0D6BcoeUCSgxeAXDjhg-NOTATyPelInUnYBBKQnuI0w&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=f6UCI0PhaZVBb38oNiZCFw&oh=00_AfZLBLdEdzE1jIdbpF12fhggs7bntojLXFzdxOOeE3AJfg&oe=68C26A6F",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/539207621_1339019524745886_503918382855257426_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF0qU59MeXKPdVqs5YGjBkcIptwMRw-NJ8im3AxHD40n6kG8w3A3oalIGYNxkSMzuqSZPEFiGUTCskApDTiTJtB&_nc_ohc=5tW-AkDyO18Q7kNvwGqTfhG&_nc_oc=Adkbe98ynopAxrtok-obD9QEbrnGTI7B_bcDSXNub-2Yf8MWhZ2x0HBTWLVziZ1W3_s&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=l4hFrXpgfrkyyCbB-eQUdA&oh=00_AfapYp7Rrf7HMK_MD70HhhqNqBhmmGM0iHMW4dJU1rWRww&oe=68C27D9B"
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

export default FormPropGiachino;

