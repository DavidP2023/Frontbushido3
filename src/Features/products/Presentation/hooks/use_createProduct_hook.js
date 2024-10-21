const createProductFormSchema = yup.object().shape({

    email: yup
      .string()
      .email('El correo electronico ingresado no es valido'),
    password: yup
      .string('')
      .min(6, 'la contraseña debe tener al menos 10 caracteres')
      .max(15, 'la constraseña debe tener maximo 15 caracteres'),
  
  })
  
  export const useCreateProductController = () => {
  
    const { errors, handleSubmit, handleChange, handleBlur, values, touched } = useFormik({
      initialValues: { email: '', password: '' },
      validationSchema: createProductFormSchema,
      onSubmit: (values) => handleLoginClick(values),
    });
    
    // const { loading, mutate, error, data } = useLoginMutationHook()
  
  
    const handleLoginClick = (values) => {
      const user = new User();
  
      user.email = values.email;
      user.password = values.password;
      mutate(
        user
      );
      setShowModal(false);
    };
  
    useEffect(() => {
  
      if (data && !loading) {
        console.log(data)
        SaveUserLocalData(data.login.user, data.login.token)
  
      }
  
    }, [data])
  
    return {
      handleLoginClick,
      errors,
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      touched
    }
  }
  