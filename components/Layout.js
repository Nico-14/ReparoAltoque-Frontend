import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainNavbar from "./Layouts/MainNavbar";
import { onAuthStateChange } from '../firebase';

export default function Layout({ children }) {
  const [user, setUser] = useState(); //Temporal

  useEffect(() => {
    const unsubscribe = onAuthStateChange((newUser) => setUser(newUser))
    return () => unsubscribe() //Limpiar el evento en cada
  }, [])

  return (
    <>
      <style jsx>{`
        main {
            min-height: 100%;
        }
      `}</style>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar user={user} />
      <main>
        {/* <Container className="py-4" fluid> */}
        {children}
        {/* </Container> */}
      </main>
    </>
  );
}
