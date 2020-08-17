<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainNavbar from "./Layouts/MainNavbar";

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
      <main>
        {/* <Container className="py-4" fluid> */}
        {children}
        {/* </Container> */}
      </main>
    </>
  );
=======
import React from "react";

import Head from "next/head";
import MainNavbar from "./Layouts/MainNavbar";
import MainFooter from "./Layouts/MainFooter";
import VolverArriba from "./Sections/VolverArriba";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <style jsx>{`
                main {
                    min-height: 100%;
                }
            `}</style>
            <Head>
                <title>Te lo Reparo al Toque</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainNavbar />
            <main>{children}</main>
            <MainFooter />
            <VolverArriba />
        </React.Fragment>
    );
>>>>>>> branchGonzalo
}
