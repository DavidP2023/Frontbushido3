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
        <div className='flex'>
          {/* Sidebar */}
          <div className='w-64 bg-gray-200 p-5'>
            <h2 className='font-bold text-lg mb-4 text-orange-600'>Categorías</h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className='mb-2 hover:bg-orange-100 hover:text-orange-700 p-2 rounded cursor-pointer'>
                  {category}
                </li>
              ))}
            </ul>
          </div>
    
          {/* Product Grid */}
          <div className='flex-grow p-10 bg-gray-100'>
            <h1 className='text-center text-3xl font-bold mb-8 text-orange-600'>Motherboards</h1>
            <div className='grid grid-cols-3 gap-4'>
              {products.map((product) => (
                <Link to={`/motherboards/${product.id}`} key={product.id}>
                <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                  <img className='w-full' src={product.image} alt={product.name} />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2 text-gray-800'>{product.name}</div>
                    <p className='text-gray-700 text-base'>
                      Precio: <span className='text-orange-600'>{product.price}</span> (Antes: <span className='line-through text-gray-400'>{product.previousPrice}</span>)
                    </p>
                    {product.available ? (
                      <span className='inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800'>
                        Disponible
                      </span>
                    ) : (
                      <span className='inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-800'>
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
    