import React from 'react';
import { useForm } from 'react-hook-form';

// Página del perfil de usuario
const UserProfilePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Enviar datos al backend para actualizar el perfil
  };

  return (
    <div className="profile-page">
      <h1>Mi Perfil</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Actualizar Perfil</button>
      </form>
    </div>
  );
};

export default UserProfilePage;