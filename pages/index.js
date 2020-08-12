import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col space-y-10 lg:space-y-12">
        <section className="w-full lg:w-2/4">
          <h1 className="text-3xl font-semibold">Publicá tu servicio de forma gratuita y rápida. O encontrá el servicio que necesites.</h1>
          <p className="text-lg mt-1">¿Sos profesional? Empezá a publicar tu servicio gratuitamente en menos de 5 minutos.
          <br />
          ¿Necesitas hacer un arreglo en tu casa? Buscá el servicio que necesites y encontrá a los trabajadores más cercanos.</p>
          <div className="w-full mt-8 flex justify-between lg:justify-start">
            <Button>Publicar servicio</Button>
            <Button secondary className="lg:ml-16">Buscar servicios</Button>
          </div>
        </section>
        <span className="w-full border-solid border-b-2 border-gray-300 mx-auto"></span>
        <section className="w-full">
          <h1 className="text-3xl font-semibold">Es fácil</h1>
          <h2 className="text-2xl font-semibold text-blue-600">Publicar un servicio sólo te lleva 3 simples pasos</h2>
          <div className="w-full flex justify-around mt-4 flex-wrap space-y-8 sm:space-y-0">
            <article className="w-full sm:w-1/4 space-y-1">
              <h1 className="text-xl font-semibold text-center">Registrate</h1>
              <p className="text-lg text-center">Creá una cuenta rápidamente usando tu Facebook, tu cuenta de Google o tu correo electrónico.</p>
            </article>
            <article className="w-full sm:w-1/4 space-y-1">
              <h1 className="text-xl font-semibold text-center">Publicá</h1>
              <p className="text-lg text-center">Publicá tu servicio de forma rápida, sencilla y sin ningún costo.</p>
            </article>
            <article className="w-full sm:w-1/4 space-y-1">
              <h1 className="text-xl font-semibold text-center">Conseguí clientes</h1>
              <p className="text-lg text-center">Nosotros te vamos a recomendar a los clientes más cercanos que necesiten tu servicio.</p>
            </article>
          </div>
        </section>
      </div>
    </Layout >
  )
}
