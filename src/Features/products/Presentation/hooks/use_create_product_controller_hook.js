import Product from "../data/models/product";
import { useCreateProductMutationHook } from "./use_create_product_mutation_hook";
import * as yup from 'yup';
import { useFormik } from 'formik';

const createProductFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('El nombre del producto es requerido'),
  description: yup
    .string()
    .nullable(), 
  brand: yup
    .string()
    .nullable(), 
  type: yup
    .string()
    .nullable(), 
  precio: yup
    .number()
    .positive('El precio debe ser un número positivo')
    .required('El precio es requerido'),
  stock: yup
    .number()
    .integer('El stock debe ser un número entero')
    .min(0, 'El stock no puede ser negativo')
    .required('El stock es requerido'),
  features: yup
    .array()
    .of(yup.string())
    .min(1, 'Debe agregar al menos una característica'),
  garantia: yup
    .array()
    .of(yup.string())
    .nullable(), 
  image: yup
    .string()
    .nullable(),
});

export const useCreateProductController = () => {
  const { errors, handleSubmit, handleChange, handleBlur, values, touched } = useFormik({
    initialValues: {
      name: '',
      description: '',
      brand: '',
      type: '',
      precio: 0,
      stock: 0,
      features: [],
      garantia: [],
      image: '', 
    },
    validationSchema: createProductFormSchema,
    onSubmit: (values) => handleCreateProductClick(values),
  });

  const { loading, mutate, error, data } = useCreateProductMutationHook();

  const handleCreateProductClick = (values) => {
    const product = new Product();

    product.name = values.name;
    product.description = values.description;
    product.brand = values.brand;
    product.type = values.type;
    product.precio = values.precio;
    product.stock = values.stock;
    product.features = values.features;
    product.garantia = values.garantia;
    product.image = values.image;

    mutate(product);
  };

  return {
    handleCreateProductClick,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
  };
};
