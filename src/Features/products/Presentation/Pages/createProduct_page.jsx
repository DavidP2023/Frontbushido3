import React from 'react';
import { useCreateProductController } from '../hooks/use_create_product_controller_hook';

export const CreateProductPage = () => {
  const {
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    loading,
  } = useCreateProductController();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="relative p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[90%] max-w-[600px]">
          <div className="flex flex-col items-center">
            <h2 className="mb-4 text-2xl font-semibold text-center">
              Crear Producto
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap -mx-2">
              {[
                { label: "Nombre del Producto", name: "name", type: "text" },
                { label: "Descripción", name: "description", type: "text" },
                { label: "Marca", name: "brand", type: "text" },
                { label: "Tipo", name: "type", type: "text" },
                { label: "Precio", name: "precio", type: "number" },
                { label: "Stock", name: "stock", type: "number" },
                { label: "Características", name: "features", type: "text" },
                { label: "Garantía", name: "garantia", type: "text" },
                { label: "Imagen (Base64)", name: "image", type: "text" },
              ].map(({ label, name, type }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="w-full md:w-1/2 px-2 mb-4"
                >
                  <label
                    htmlFor={name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={name}
                    name={name}
                    onBlur={handleBlur(name)}
                    onChange={handleChange(name)}
                    value={values[name]}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                  />
                  {errors[name] && touched[name] && (
                    <p className="text-xs text-red-600 font-semibold text-center">
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-2">
              <button
                type="submit"
                className="block w-full px-4 py-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-lg"
              >
                {loading ? "Cargando..." : "Crear Producto"}
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-lg"
                onClick={() => window.history.back()}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};