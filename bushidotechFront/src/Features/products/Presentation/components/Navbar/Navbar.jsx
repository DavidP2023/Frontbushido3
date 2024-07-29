import { useState } from "react";
import Logo from "../../../../../assets/logob.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import {DarkMode} from "./DarkMode";
import {PopupInitSession} from "../Popup/PopupInitSession";
import {Popup} from "../Popup/Popup";
import { Link } from "react-router-dom";
import { PopupRegisterSucess } from "../Popup/PopupRegisterSucess";
import { RegisterPopup } from "../Popup/RegisterPopup";

const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Procesadores",
    link: "/procesadores",
  },
  {
    id: 3,
    name: "Tarjetas Gráficas",
    link: "/#tarjetas-graficas",
  },
  {
    id: 4,
    name: "Placas Base",
    link: "/#placas-base",
  },
  {
    id: 5,
    name: "Periféricos",
    link: "/#perifericos",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Productos Populares",
    link: "/#productos-populares",
  },
  {
    id: 2,
    name: "Más Vendidos",
    link: "/#mas-vendidos",
  },
  {
    id: 3,
    name: "Más Valorados",
    link: "/#mas-valorados",
  },
];

 export const Navbar = () => {
  const [showInitSessionModal, setShowInitSessionModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [orderPopup, setOrderPopup] = useState(false);


  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };  

  const handleShowModal = () => {
    setShowInitSessionModal(true);
  };

  return (
    <div className="shadow-md bg-orange-500 dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Navbar Superior */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              BUSHIDOTECH
            </a>
          </div>

          {/* Barra de Búsqueda */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Botón de Orden */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Ordenar
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Cambio de Modo Oscuro */}
            <div>
              <DarkMode />
            </div>

            {/* Botón de Iniciar Sesión */}
            <div className="flex items-center">
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                onClick={handleShowModal}
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Iniciar sesión
                </span>
                <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Inferior */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-orange-700 duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Dropdown Simple y Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Productos Populares
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-orange-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <PopupInitSession showModal={showInitSessionModal} setShowModal={setShowInitSessionModal} setShowRegisterModal={setShowRegisterModal} />
      <RegisterPopup showModal={showRegisterModal} setShowModal={setShowRegisterModal}  />

    </div>
  );
};

