import React from "react";

import Head from "next/head";
import MainNavbar from "./Layouts/MainNavbar";
import { Container } from "reactstrap";

export default function Layout({ children }) {
  return (
    <>
      <style jsx>{`
      main {
        padding-top: 70px;
        min-height: 100%;
      }
      `}</style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <main>
        <Container className="py-4" fluid>
          {children}
        </Container>
      </main>
      {/* <footer className="flex flex-wrap px-4 py-6 lg:px-8 justify-center mt-full">
      <span className="w-full border-solid border-b-2 border-gray-300"></span>
      Footer
    </footer> */}
    </>
  );
}