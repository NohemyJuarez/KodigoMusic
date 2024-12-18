import React from 'react';
import { useForm } from 'react-hook-form';

// Formulario de inicio de sesión
const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);  // Enviar datos al backend para iniciar sesión o registrarse
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <label>
        Nombre:
        <input {...register('name', { required: 'El nombre es obligatorio' })} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        Correo:
        <input type="email" {...register('email', { required: 'El correo es obligatorio' })} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>
        Contraseña:
        <input type="password" {...register('password', { required: 'La contraseña es obligatoria' })} />
        {errors.password && <span>{errors.password.message}</span>}
      </label>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;