import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { FaCheckCircle, FaTruck } from 'react-icons/fa';
import asusb5501 from '../../../../assets/mother/asusb5501.png';
import asusb5502 from '../../../../assets/mother/asusb5502.png';
import asusb5503 from '../../../../assets/mother/asusb5503.png';

// ID2..
import msi1 from '../../../../assets/mother/msi1.png';
import msi2 from '../../../../assets/mother/msi2.png';
import msi3 from '../../../../assets/mother/msi3.png';

const ProductPlaca = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Motherboard ASUS ROG Strix B550-F Gaming",
      priceCurrent: "308,300",
      priceBefore: "311,400",
      description: "La ASUS ROG Strix B550-F Gaming es una placa madre diseñada para gamers y entusiastas, ofreciendo compatibilidad con los últimos procesadores AMD Ryzen y características avanzadas como PCIe 4.0, Wi-Fi 6, y un diseño robusto para un rendimiento excepcional.",
      availability: "En stock y listo para envío.",
      images: [
        asusb5501,
        asusb5502,
        asusb5503
      ],
      details: {
        general: {
          socket: "AM4",
          chipset: "AMD B550",
          memory: "4 x DIMM, máx. 128 GB, DDR4",
          expansionSlots: "2 x PCIe 4.0 x16, 3 x PCIe 3.0 x1",
          storage: "2 x M.2, 6 x SATA 6Gb/s",
          network: "Intel I225-V 2.5Gb Ethernet",
          audio: "ROG SupremeFX 7.1 Surround Sound"
        },
        connectivity: {
          vga: "No",
          dvi: "No",
          hdmi: "1x HDMI 2.1",
          displayPorts: "3x DisplayPort 1.4a",
          usbTypeC: "No"
        },
        power: {
          energyConsumption: "170 W",
          recommendedPower: "550 W"
        },
        dimensions: {
          length: "242 mm",
          width: "112 mm",
          thickness: "40 mm"
        }
      }
    },
    {
      id: 2,
      name: "Motherboard MSI MPG Z490 Gaming Edge WiFi",
      priceCurrent: "379,350",
      priceBefore: "383,150",
      description: "La MSI MPG Z490 Gaming Edge WiFi es una placa madre de alto rendimiento diseñada para entusiastas y gamers, con soporte para los últimos procesadores Intel Core de décima generación, conectividad Wi-Fi 6, y un diseño avanzado para un rendimiento y estabilidad excepcionales.",
      availability: "En stock y listo para envío.",
      images: [
        msi1,
        msi2,
        msi3
      ],
      details: {
        general: {
          socket: "LGA 1200",
          chipset: "Intel Z490",
          memory: "4 x DIMM, máx. 128 GB, DDR4",
          expansionSlots: "2 x PCIe 3.0 x16, 3 x PCIe 3.0 x1",
          storage: "2 x M.2, 6 x SATA 6Gb/s",
          network: "2.5G LAN y Wi-Fi 6",
          audio: "Realtek ALC1200 7.1 Surround Sound"
        },
        connectivity: {
          vga: "No",
          dvi: "No",
          hdmi: "1x HDMI 2.1",
          displayPorts: "3x DisplayPort 1.4a",
          usbTypeC: "No"
        },
        power: {
          energyConsumption: "170 W",
          recommendedPower: "550 W"
        },
        dimensions: {
          length: "242 mm",
          width: "112 mm",
          thickness: "40 mm"
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
              <a href="#" className="text-blue-500 ml-2 underline">Ver términos y condiciones</a>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Stock disponible</span>
            </div>
            <div className="flex items-center mb-4"> {/* Margen añadido aquí */}
              <FaTruck className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Envíos a todo el país</span>
            </div>
          </div>

          <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg mt-4"> {/* Añadido mt-4 */}
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
              <li>Socket: {product.details.general.socket}</li>
              <li>Chipset: {product.details.general.chipset}</li>
              <li>Memoria: {product.details.general.memory}</li>
              <li>Slots de Expansión: {product.details.general.expansionSlots}</li>
              <li>Almacenamiento: {product.details.general.storage}</li>
              <li>Red: {product.details.general.network}</li>
              <li>Audio: {product.details.general.audio}</li>
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

        <div className="grid grid-cols-2 gap-8 border-b-2 pb-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Energía</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Consumo Energético: {product.details.power.energyConsumption}</li>
              <li>Potencia Recomendada: {product.details.power.recommendedPower}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Dimensiones</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Longitud: {product.details.dimensions.length}</li>
              <li>Ancho: {product.details.dimensions.width}</li>
              <li>Grosor: {product.details.dimensions.thickness}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-900">Producto no encontrado</h2>
    </div>
  );
};

export default ProductPlaca;
