import React from 'react';


export const ProcesorsPage = () => {
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
      name: 'Combo Actualización Procesador AMD Ryzen 5 5600GT',
      image: 'diamondsystemar-vtexassets-com-arquivos-ids-160204-800-auto-v-638536246880330000-width-800-height-auto-aspect-true.jpg',
      price: '308,300',
      previousPrice: '311,400',
      available: true,
    },
    {
      id: 2,
      name: 'Combo Actualización Procesador AMD Ryzen 5 8500G',
      image: 'url-to-image-2.jpg',
      price: '379,350',
      previousPrice: '383,150',
      available: true,
    },
    {
      id: 3,
      name: 'Combo Actualización Procesador Core i3 12100',
      image: 'url-to-image-3.jpg',
      price: '309,050',
      previousPrice: '315,400',
      available: true,
    },
    {
      id: 4,
      name: 'Combo Actualización Procesador Core i3 12100',
      image: 'url-to-image-4.jpg',
      price: '315,850',
      previousPrice: '319,000',
      available: true,
    },
    {
      id: 5,
      name: 'Combo Actualización Procesador AMD Ryzen 7 5700X',
      image: 'url-to-image-5.jpg',
      price: '450,300',
      previousPrice: '455,600',
      available: true,
    },
    {
      id: 6,
      name: 'Combo Actualización Procesador AMD Ryzen 9 5900X',
      image: 'url-to-image-6.jpg',
      price: '800,999',
      previousPrice: '810,000',
      available: true,
    },
    {
      id: 7,
      name: 'Combo Actualización Procesador Intel i5 11600K',
      image: 'url-to-image-7.jpg',
      price: '620,500',
      previousPrice: '625,800',
      available: true,
    },
    {
      id: 8,
      name: 'Combo Actualización Procesador Intel i7 11700K',
      image: 'url-to-image-8.jpg',
      price: '740,300',
      previousPrice: '750,400',
      available: true,
    },
    {
      id: 9,
      name: 'Combo Actualización Procesador Intel i9 11900K',
      image: 'url-to-image-9.jpg',
      price: '999,999',
      previousPrice: '1,010,000',
      available: true,
    },
    {
      id: 10,
      name: 'Combo Actualización Procesador AMD Ryzen 3 3300X',
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
        <h1 className='text-center text-3xl font-bold mb-8 text-orange-600'>Procesadores</h1>
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
