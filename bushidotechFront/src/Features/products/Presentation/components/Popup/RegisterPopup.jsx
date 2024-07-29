import React from "react";
import PropTypes from "prop-types";
import { usePopupRegisterController } from "../../hooks/usePopupRegisterController_hook";
import { PopupRegisterSucess } from "./PopupRegisterSucess";

export const RegisterPopup = ({ showModal, setShowModal, }) => {


  const {
    errors,
    showRegisterSucessModal,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched } = usePopupRegisterController({
      showModal, setShowModal, 
    });

  return (
    <>
      {showModal ? (


        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          {
            showRegisterSucessModal ? <PopupRegisterSucess setShowModal={setShowModal} /> :

              (

                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[90%] max-w-[600px]">
                  <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                  <h2 className="mb-4 text-2xl font-semibold text-center">
                    Crear cuenta
                  </h2>
                  <div className="space-y-4" >
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nombre
                        </label>
                        <input
                          name="name"
                          onChange={handleChange('name')}
                          value={values.name}
                          onBlur={handleBlur('name')}
                          type="text"
                          id="name"
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                          required
                        />
                        {
                          errors && errors.name && touched.name &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.name}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="lastname"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Apellido
                        </label>
                        <input
                          name="lastname"
                          onBlur={handleBlur('lastname')}
                          onChange={handleChange('lastname')}
                          value={values.lastname}
                          type="text"
                          id="lastname"
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                          required
                        />
                        {
                          errors && errors.lastname && touched.lastname &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.lastname}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onBlur={handleBlur('email')}
                          onChange={handleChange('email')}
                          value={values.email}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                          required
                        />
                        {
                          errors && errors.email && errors.email &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.email}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="dni"
                          className="block text-sm font-medium text-gray-700"
                        >
                          DNI
                        </label>
                        <input
                          type="text"
                          id="dni"
                          name="dni"
                          onBlur={handleBlur('dni')}
                          onChange={handleChange('dni')}
                          value={values.dni}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                        />
                        {
                          errors && errors.dni && errors.dni &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.dni}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="adress"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Dirección
                        </label>
                        <input
                          type="text"
                          id="adress"
                          name="adress"
                          onBlur={handleBlur('adress')}
                          onChange={handleChange('adress')}
                          value={values.adress}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                        />
                        {
                          errors && errors.adress && errors.adress &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.adress}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="ciudad"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Ciudad
                        </label>
                        <input
                          type="text"
                          id="ciudad"
                          name="ciudad"
                          onBlur={handleBlur('ciudad')}
                          onChange={handleChange('ciudad')}
                          value={values.ciudad}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                        />
                        {
                          errors && errors.ciudad && errors.ciudad &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.ciudad}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="provincia"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Provincia
                        </label>
                        <input
                          type="text"
                          id="provincia"
                          name="provincia"
                          onBlur={handleBlur('provincia')}
                          onChange={handleChange('provincia')}
                          value={values.provincia}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                        />
                        {
                          errors && errors.provincia && errors.provincia &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.provincia}
                          </p>
                        }
                      </div>
                      <div className="w-full md:w-1/3 px-2">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contraseña
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onBlur={handleBlur('password')}
                          onChange={handleChange('password')}
                          value={values.password}
                          className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                          required
                        />
                        {
                          errors && errors.password && errors.password &&
                          <p className="text-xs text-red-600 font-semibold text-center ">

                            {errors.password}
                          </p>
                        }
                      </div>
                    </div>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                      onClick={handleSubmit}
                    >
                      Registrarse
                    </button>
                    <button
                      type="button"
                      className="block w-full px-4 py-2 mt-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-full"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>)}
        </div>
      ) : null

      }

    </>
  );
};

