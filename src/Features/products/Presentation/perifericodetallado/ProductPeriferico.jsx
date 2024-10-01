import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import gpro1 from '../../../../assets/Perifericos/gpro1.png';
import gpro2 from '../../../../assets/Perifericos/gpro2.png';
import gpro3 from '../../../../assets/Perifericos/gpro3.png';

// ID2..
import razer1 from '../../../../assets/Perifericos/razer1.png';
import razer2 from '../../../../assets/Perifericos/razer2.png';
import razer3 from '../../../../assets/Perifericos/razer3.png';
import { FaCheckCircle, FaTruck } from 'react-icons/fa'; // Asegúrate de tener estos iconos

const ProductPlaca = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Teclado Logitech G Pro",
      priceCurrent: "108,300",
      priceBefore: "111,400",
      description: "El Teclado Logitech G Pro está diseñado para jugadores profesionales y entusiastas, ofreciendo switches mecánicos de alto rendimiento, iluminación RGB personalizable, y un diseño compacto y portátil para llevarlo a cualquier lugar.",
      availability: "En stock y listo para envío.",
      images: [
        gpro1,
        gpro2,
        gpro3
      ],
      details: {
        general: {
          type: "Teclado Mecánico",
          switchType: "GX Blue",
          specialFeatures: "Iluminación RGB LIGHTSYNC"
        },
        connectivity: {
          usbTypeC: "Sí",
          wired: "Cable USB desmontable"
        },
        dimensions: {
          width: "361 mm",
          length: "153 mm",
          thickness: "34 mm"
        },
        energy: {
          powerConsumption: "No requiere",
          recommendedPower: "No aplica"
        }
      }
    },
    {
      id: 2,
      name: "Ratón Gaming Razer DeathAdder V2",
      priceCurrent: "79,350",
      priceBefore: "83,150",
      description: "El Ratón Gaming Razer DeathAdder V2 ofrece un diseño ergonómico icónico y un sensor óptico de alta precisión para un rendimiento superior en juegos. Con switches ópticos Razer y una forma cómoda, es ideal para sesiones de juego prolongadas.",
      availability: "En stock y listo para envío.",
      images: [
        razer1,
        razer2,
        razer3
      ],
      details: {
        general: {
          type: "Ratón Gaming",
          sensor: "Razer Focus+ óptico de 20,000 DPI",
          specialFeatures: "Ergonomía optimizada"
        },
        connectivity: {
          usbTypeC: "No",
          wired: "Cable USB Speedflex"
        },
        dimensions: {
          width: "68 mm",
          length: "127 mm",
          thickness: "43 mm"
        },
        energy: {
          powerConsumption: "No requiere",
          recommendedPower: "No aplica"
        }
      }
    },
    // Más productos...
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <div style={{ fontSize: '40px', color: '#333' }}>&#10095;</div>,
    prevArrow: <div style={{ fontSize: '40px', color: '#333' }}>&#10094;</div>,
  };

  return product ? (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Carrusel de imágenes */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="mb-6">
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg object-contain border border-gray-200 shadow-sm"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Información del producto */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-base md:text-xl text-gray-600 mb-6">{product.description}</p>
          <div className="mb-6">
            <span className="text-2xl md:text-3xl font-bold text-orange-600 mr-4">${product.priceCurrent}</span>
            <span className="text-xl md:text-2xl text-gray-400 line-through">${product.priceBefore}</span>
          </div>

          {/* Opciones Verdes */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Garantía - 12 meses</span>
              <a href="#" className="text-blue-500 ml-2 underline">Ver términos y condiciones</a>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Stock disponible</span>
            </div>
            <div className="flex items-center">
              <FaTruck className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Envíos a todo el país</span>
            </div>
          </div>

          <p className="text-green-600 font-semibold mb-4">{product.availability}</p>
          <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg">
            Comprar Ahora
          </button>
        </div>
      </div>

      {/* Detalles producto */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Descripción Detallada</h3>
        <div className="grid grid-cols-2 gap-8 border-b-2 pb-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">General</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Tipo: {product.details.general.type}</li>
              <li>Switch: {product.details.general.switchType}</li>
              <li>Características especiales: {product.details.general.specialFeatures}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Conectividad</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>USB Tipo-C: {product.details.connectivity.usbTypeC}</li>
              <li>Conectividad: {product.details.connectivity.wired}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Dimensiones</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Ancho: {product.details.dimensions.width}</li>
              <li>Longitud: {product.details.dimensions.length}</li>
              <li>Grosor: {product.details.dimensions.thickness}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Consumo Energético</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Consumo: {product.details.energy.powerConsumption}</li>
              <li>Recomendado: {product.details.energy.recommendedPower}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Producto no encontrado</p>
  );
};

export default ProductPlaca;
