import React from 'react';
import { Link } from 'react-router-dom';
import motherb550 from '../../../../assets/mother/motherb550.png';  
import motherZ490 from '../../../../assets/mother/motherZ490.png';

export const MotherboardsPage = () => {
  const categories = [
    'Componentes de PC',
    'Coolers',
    'Discos Duros HDD',
    'Discos Sólidos SSD',
    'Fuentes',
    'Gabinetes',
    'Memorias RAM',
    'Motherboards',
    'Placas de Video',
    'Procesadores'
  ];

  const products = [
    {
      id: 1,
      name: 'Motherboard ASUS ROG Strix B550-F Gaming',
      image: motherb550,
      price: '308,300',
      previousPrice: '311,400',
      available: true,
    },
    {
      id: 2,
      name: 'Motherboard MSI MPG Z490 Gaming Edge WiFi',
      image: motherZ490,
      price: '379,350',
      previousPrice: '383,150',
      available: true,
    }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="md:w-1/4 bg-gray-100 p-5 shadow-lg">
        <h2 className="font-semibold text-xl mb-6 text-orange-500">Categorías</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li 
              key={index} 
              className="py-2 px-3 hover:bg-orange-100 hover:text-orange-600 rounded transition-colors duration-200 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex-grow p-8 bg-gray-50">
        <h1 className="text-center text-4xl font-semibold mb-12 text-orange-500">Motherboards</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link to={`/motherboards/${product.id}`} key={product.id}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                <img className="w-full h-48 object-cover rounded-t-lg" src={product.image} alt={product.name} />
                <div className="p-6 flex-grow">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 mt-2">
                    Precio: <span className="text-orange-500">{product.price}</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Antes: <span className="line-through">{product.previousPrice}</span>
                  </p>
                </div>
                <div className="p-6">
                  {product.available ? (
                    <span className="inline-block bg-green-50 rounded-full px-4 py-1 text-xs font-medium text-green-700">
                      Disponible
                    </span>
                  ) : (
                    <span className="inline-block bg-red-50 rounded-full px-4 py-1 text-xs font-medium text-red-700">
                      No disponible
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
