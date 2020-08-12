import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Input from '../components/Input';

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  return (<>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={`${showMenu ? 'fixed h-full overflow-y-auto content-start' : ''} px-3 py-1 flex flex-wrap z-10 w-full xl:px-8 xl:static xl:h-auto xl:overflow-y-visible`} style={{ backgroundColor: '#F5F6F8' }}>
      <Link href="/">
        <div className="w-4/5 xl:w-auto xl:flex xl:items-center">
          <img src="/logo.png" className="h-24"></img>
          <h1 className="font-sans text-3xl text-blue-900 ml-2">ReparoAltoque.com</h1>
        </div>
      </Link>
      <button className="h-2 focus:outline-none ml-auto mt-2 xl:hidden" onClick={() => setShowMenu(!showMenu)}>
        {
          showMenu ?
            <svg className="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg>
            :
            <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        }
      </button>

      <nav className={`${!showMenu ? 'hidden' : ''} self-start h-auto mb-auto px-1 pb-4 w-full flex xl:flex flex-col xl:p-0 xl:flex-row mt-2 xl:flex-wrap`}>
        <form className="xl:w-3/6">
          <Input type="text" placeholder="Buscar" />
        </form>
        <Link href="/ingresar">
          <a className="hover:opacity-75 py-3 px-2 font-medium xl:ml-auto">Ingresar</a>
        </Link>
        <Link href="/registrarse">
          <a className="hover:opacity-75 py-3 px-2 font-medium">Registrarse</a>
        </Link>
        <div className="font-medium xl:w-full xl:flex xl:justify-center xl:text-blue-700">
          <Link href="/servicios">
            <a className="hover:opacity-75 py-3 px-2 w-full block xl:w-auto xl-inline xl:py-2">Servicios a distancia </a>
          </Link>
          <Link href="/servicios">
            <a className="hover:opacity-75 py-3 px-2 w-full block xl:w-auto xl-inline xl:py-2">Servicios a domicilio</a>
          </Link>
          <Link href="/servicios">
            <a className="hover:opacity-75 py-3 px-2 w-full block xl:w-auto xl-inline xl:py-2">Ayuda</a>
          </Link>
        </div>

      </nav>
      <span className={`${showMenu ? 'hidden xl:block' : ''} border-solid w-full border-b-2 border-gray-300 mx-auto mt-2 xl:mt-0`}></span>
    </header>
    <main className={`${showMenu ? 'overflow-hidden xl:overflow-visible' : ''} px-4 py-6 h-auto flex-grow xl:p-8`}>
      {children}
    </main>
    {/* <footer className="flex flex-wrap px-4 py-6 lg:px-8 justify-center mt-full">
      <span className="w-full border-solid border-b-2 border-gray-300"></span>
      Footer
    </footer> */}
  </>)
}