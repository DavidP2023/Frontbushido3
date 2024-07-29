import PropTypes, { string } from "prop-types";
import { RegisterPopup } from "./RegisterPopup";
import { usepopupSessionshook } from "../../hooks/use_popupSessions_hook";


export const PopupInitSession = ({showModal, setShowModal, setShowRegisterModal}) => {

  const { 
    handleRegisterClick, 
    handleSubmit, 
    handleChange, 
    handleBlur, 
    values, 
    errors, 
    touched,
   
  } = usepopupSessionshook( showModal, setShowModal)


  return (
    <>
      {showModal && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              Ingresar a tu cuenta
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Dirección de correo electrónico
                </label>
                <input
                  name="email"
                  onBlur={handleBlur('email')}
                  onChange={handleChange('email')}
                  value={values.email}
                  type="email"
                  id="email"
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-2"
                  required
                />
                {
                  errors && errors.email && touched.email && 
                  <p className="text-xs text-red-600 font-semibold text-center ">
                    
                    {errors.email}
                  </p>
                }
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <input
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleChange('password')}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                  required
                  />
                  {
                  errors && errors.password && touched.password && 
                  <p className="text-xs text-red-600 font-semibold text-center ">
                    
                    {errors.password}
                  </p>
                }
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:text-indigo-500"
                >
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
              <button
                type="button"
                className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                onClick={handleSubmit}

              >
                Iniciar sesión
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                onClick={()=> {setShowRegisterModal(true)
                  setShowModal(false)
                }}
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      )}
    
    </>
  );
};



