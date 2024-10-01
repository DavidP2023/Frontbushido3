import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaCheckCircle, FaTruck } from 'react-icons/fa';
import ryzen5600 from '../../../../assets/Procesador/ryzen5600.jpg';
import ryzen56002 from '../../../../assets/Procesador/ryzen56002.png';
import ryzen56003 from '../../../../assets/Procesador/ryzen56003.png';
import ryzen58003 from '../../../../assets/Procesador/ryzen85003.png';
import ryzen58002 from '../../../../assets/Procesador/ryzen85002.png';
import ryzen58001 from '../../../../assets/Procesador/ryzen85001.png';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "AMD Ryzen 5 5600GT - Combo de Actualización",
      priceCurrent: "308,300",
      priceBefore: "311,400",
      description: "Eleva el rendimiento de tu sistema con el procesador AMD Ryzen 5 5600GT, diseñado para entusiastas de los juegos y creadores de contenido. Disfruta de una velocidad excepcional y una multitarea sin esfuerzo.",
      specs: [
        { key: "Núcleos", value: "6" },
        { key: "Hilos", value: "12" },
        { key: "Frecuencia Base", value: "3.9 GHz" },
        { key: "Frecuencia Máxima", value: "4.4 GHz" },
        { key: "Caché L3", value: "32 MB" },
        { key: "TDP", value: "65 W" },
        { key: "Compatibilidad con Placas Base", value: "AM4" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        ryzen5600,
        ryzen56002,
        ryzen56003
      ],
      details: {
        general: {
          type: 'pcie',
          chipset: 'RX 6650 XT',
          videoInput: 'No',
          sliSupport: '-',
          dualBridge: 'No',
          specialFeatures: 'Ray Tracing'
        },
        connectivity: {
          vga: 0,
          dvi: 0,
          hdmi: 1,
          displayPorts: 3,
          usbTypeC: 0
        },
        dimensions: {
          width: '131 mm',
          length: '241 mm',
          thickness: '2.0 slots'
        },
        energy: {
          pcie6Pins: 0,
          powerConsumption: '170 W',
          pcie8Pins: 1,
          recommendedPower: '500 W'
        },
        coolers: {
          backplate: 'Sí',
          waterCooling: 'No',
          coolerFans: 2
        },
        extras: {
          memorySpeed: '17500 MHz',
          memoryType: 'GDDR6',
          memoryCapacity: '8 GB'
        }
      }
    },
    {
      id: 2,
      name: "AMD Ryzen 7 5800GT - Combo de Actualización",
      priceCurrent: "456,900",
      priceBefore: "467,200",
      description: "El procesador AMD Ryzen 7 5800GT es perfecto para usuarios avanzados que buscan una experiencia de juego fluida y un rendimiento óptimo en tareas multitarea intensivas.",
      specs: [
        { key: "Núcleos", value: "8" },
        { key: "Hilos", value: "16" },
        { key: "Frecuencia Base", value: "3.8 GHz" },
        { key: "Frecuencia Máxima", value: "4.7 GHz" },
        { key: "Caché L3", value: "32 MB" },
        { key: "TDP", value: "105 W" },
        { key: "Compatibilidad con Placas Base", value: "AM4" }
      ],
      availability: "Stock limitado. Envío en 3-5 días.",
      images: [
        ryzen58001,
        ryzen58002,
        ryzen58003
      ],
      details: {
        general: {
          type: 'pcie',
          chipset: 'RX 6750 XT',
          videoInput: 'No',
          sliSupport: '-',
          dualBridge: 'No',
          specialFeatures: 'Ray Tracing, VR Ready'
        },
        connectivity: {
          vga: 0,
          dvi: 0,
          hdmi: 1,
          displayPorts: 3,
          usbTypeC: 1
        },
        dimensions: {
          width: '140 mm',
          length: '270 mm',
          thickness: '2.5 slots'
        },
        energy: {
          pcie6Pins: 0,
          powerConsumption: '230 W',
          pcie8Pins: 2,
          recommendedPower: '650 W'
        },
        coolers: {
          backplate: 'Sí',
          waterCooling: 'No',
          coolerFans: 3
        },
        extras: {
          memorySpeed: '19000 MHz',
          memoryType: 'GDDR6',
          memoryCapacity: '12 GB'
        }
      }
    }
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
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gray-50 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Carrusel de imágenes */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="mb-6">
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={image} 
                  alt={`Product Image ${index + 1}`} 
                  className="w-full h-auto rounded-lg object-contain border border-gray-200 shadow-md"
                  style={{ maxHeight: '400px' }} 
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Información del producto */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          
          {/* Precios */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-orange-600">${product.priceCurrent}</span>
            <span className="text-xl text-gray-400 line-through ml-4">${product.priceBefore}</span>
          </div>

          {/* Opciones verdes */}
          <div className="space-y-3">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Garantía - 12 meses</span>
              <Link to="/terms-conditions" className="text-blue-500 ml-2 underline">Ver términos y condiciones</Link>
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

          {/* Botón de compra */}
          <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg mt-8">
            Sumar al Carrito
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
              <li>Chipset: {product.details.general.chipset}</li>
              <li>Soporte SLI: {product.details.general.sliSupport}</li>
              <li>Características especiales: {product.details.general.specialFeatures}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Conectividad</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>VGA: {product.details.connectivity.vga}</li>
              <li>DVI: {product.details.connectivity.dvi}</li>
              <li>HDMI: {product.details.connectivity.hdmi}</li>
              <li>Puertos Display: {product.details.connectivity.displayPorts}</li>
              <li>USB Tipo-C: {product.details.connectivity.usbTypeC}</li>
            </ul>
          </div>
        </div>

        {/* Más detalles */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Dimensiones</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Ancho: {product.details.dimensions.width}</li>
              <li>Largo: {product.details.dimensions.length}</li>
              <li>Espesor: {product.details.dimensions.thickness}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Consumo Energético</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Consumo: {product.details.energy.powerConsumption}</li>
              <li>Recomendación PSU: {product.details.energy.recommendedPower}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Producto no encontrado.</p>
  );
};

export default ProductDetail;
