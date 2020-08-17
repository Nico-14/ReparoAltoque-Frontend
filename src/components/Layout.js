import React from "react";
import Head from "next/head";
import MainNavbar from "./Layouts/MainNavbar";
import MainFooter from './Layouts/MainFooter';
import VolverArriba from './Sections/VolverArriba';

export default function Layout({ children, title }) {
  return (
    <>
      <style jsx>{`
        main {
            min-height: 100%;
        }
      `}</style>
      <Head>
        <title>{title || 'ReparoAltoque'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <main>{children}</main>
      <MainFooter />
      <VolverArriba />
    </>
  );
}
