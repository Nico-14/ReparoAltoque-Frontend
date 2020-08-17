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
}