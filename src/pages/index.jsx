import Layout from "../components/Layout";

import SectionWelcome from "../components/Sections/SectionWelcome";
import SectionBuscar from "../components/Sections/SectionBuscar";
import SectionIniciar from "../components/Sections/SectionIniciar";
import SectionHorizontalScroll from "../components/Sections/SectionHorizontalScroll";

export default function Home({ posts }) {
  let arrayDePrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  console.log(posts)
  //mismo que en el form registro, pero es una petición get
  //la url base + /Posts/showWelcome
  //acá se devuelven 2 arrays, uno de trabajo a distancia y otro de presenciales
  //actualmente hay como 4 publicaciones en la base de datos, asi que el llamado va adevolver solo 1 o 2 resultados

  //y otra cosa, para listar la lista (valga la redundancia) de rubros de trabajo es otra petición get
  //esta vez a la url base + /LineWorks/show

  return (
    <Layout>
      <div className="main" style={{ minHeight: "100vh" }}>
        <SectionWelcome />
        <SectionBuscar />
        <SectionHorizontalScroll
          titulo="Trabajos a distancia que recomendamos"
          arrayPublicaciones={posts.aDistanciaFiltrados}
          bgColor="bg-secondary"
        />
        <SectionHorizontalScroll
          titulo="Trabajos a domicilio que recomendamos"
          arrayPublicaciones={posts.presencialesFiltrados}
          bgColor="bg-white"
        />
        <SectionIniciar />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {  //Antes de renderizar la página en el server
  const indexPostsEndpoint = '/Posts/showWelcome';
  let res;
  try {
    res = await fetch(process.env.NEXT_PUBLIC_API_URL + indexPostsEndpoint); //Pide a la api los posts
    res = await res.json();
    console.log(res)
  } catch {
  }
  return {
    props: { posts: res }, // will be passed to the page component as props
  }
}