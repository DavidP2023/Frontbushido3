import React from 'react';
    
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
          image: 'url-to-image-1.jpg',
          price: '308,300',
          previousPrice: '311,400',
          available: true,
        },
        {
          id: 2,
          name: 'Motherboard MSI MPG Z490 Gaming Edge WiFi',
          image: 'url-to-image-2.jpg',
          price: '379,350',
          previousPrice: '383,150',
          available: true,
        },
        {
          id: 3,
          name: 'Motherboard Gigabyte B450M DS3H',
          image: 'url-to-image-3.jpg',
          price: '309,050',
          previousPrice: '315,400',
          available: true,
        },
        {
          id: 4,
          name: 'Motherboard ASUS Prime Z590-A',
          image: 'url-to-image-4.jpg',
          price: '315,850',
          previousPrice: '319,000',
          available: true,
        },
        {
          id: 5,
          name: 'Motherboard MSI MAG B550 Tomahawk',
          image: 'url-to-image-5.jpg',
          price: '450,300',
          previousPrice: '455,600',
          available: true,
        },
        {
          id: 6,
          name: 'Motherboard ASRock X570 Phantom Gaming 4',
          image: 'url-to-image-6.jpg',
          price: '800,999',
          previousPrice: '810,000',
          available: true,
        },
        {
          id: 7,
          name: 'Motherboard Gigabyte Z590 AORUS Elite AX',
          image: 'url-to-image-7.jpg',
          price: '620,500',
          previousPrice: '625,800',
          available: true,
        },
        {
          id: 8,
          name: 'Motherboard ASUS TUF Gaming X570-Plus',
          image: 'url-to-image-8.jpg',
          price: '740,300',
          previousPrice: '750,400',
          available: true,
        },
        {
          id: 9,
          name: 'Motherboard MSI MPG X570 Gaming Pro Carbon WiFi',
          image: 'url-to-image-9.jpg',
          price: '999,999',
          previousPrice: '1,010,000',
          available: true,
        },
        {
          id: 10,
          name: 'Motherboard ASRock B550 Steel Legend',
          image: 'url-to-image-10.jpg',
          price: '250,300',
          previousPrice: '255,400',
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
                <div key={product.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
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
              ))}
            </div>
          </div>
        </div>
      );
    };
    