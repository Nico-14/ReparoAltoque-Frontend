import Layout from "../components/Layout";
import Input from '../components/Input';
import Button from '../components/Button';
import { useForm } from 'react-hook-form';

export default function Registrarse() {
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = data => {
    // console.log(errors)
  };
  return (
    <Layout>
      <section className="flex flex-col mx-auto w-full h-full justify-center">
        <h1 className="self-center text-2xl font-semibold">Crear cuenta</h1>
        <form className="flex flex-col self-center mt-4 w-full md:w-2/5 lg:w-1/3 space-y-2" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <Input name="name" type="text" placeholder="Nombre" className="w-full" ref={
              register({ required: 'Escribí tu nombre' })
            } error={'name' in errors} currentValue={getValues('name')} />
            <p className="text-red-500 font-medium ml-1 h-4 text-sm">{errors?.name?.message}</p>
          </div>

          <div>
            <Input name="email" type="email" placeholder="Email" className="w-full" ref={
              register({
                required: 'Escribí tu email',
                pattern: {
                  value: /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Escribí un email válido"
                }
              })
            } error={'email' in errors} currentValue={getValues('email')} />
            <p className="text-red-500 font-medium ml-1 h-4 text-sm">{errors?.email?.message}</p>
          </div>

          <div>
            <Input name="password" type="password" placeholder="Contraseña" className="w-full" ref={
              register({
                required: 'Escribí una contraseña',
              })
            } error={'password' in errors} currentValue={getValues('password')} />
            <p className="text-red-500 font-medium ml-1 h-4 text-sm">{errors?.password?.message}</p>
          </div>

          <div>
            <Input name="rePassword" type="password" placeholder="Confirmar contraseña" className="w-full" ref={
              register({
                required: 'Repetí la contraseña',
                validate: (value) => value === getValues('password') || 'Las contraseñas tienen que ser iguales'
              })
            } error={'rePassword' in errors} currentValue={getValues('rePassword')} />
            <p className="text-red-500 font-medium ml-1 h-4 text-sm">{errors?.rePassword?.message}</p>
          </div>

          <div className="w-full space-y-3">
            <Button className="w-full mt-2">Registrarse</Button>
            <Button className="w-full" secondary>Ingresar con Facebook</Button>
            <Button className="w-full" secondary>Ingresar con Google</Button>
          </div>
        </form>
      </section>
    </Layout>
  )
}