import React from "react";

import Head from "next/head";
import MainNavbar from "./Layouts/MainNavbar";

export default function Layout({ children }) {
    return (
        <React.Fragment>
            <Head>
                <title>Te lo Reparo al Toque</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainNavbar />
            <main>{children}</main>
            {/* <footer className="flex flex-wrap px-4 py-6 lg:px-8 justify-center mt-full">
      <span className="w-full border-solid border-b-2 border-gray-300"></span>
      Footer
    </footer> */}
        </React.Fragment>
    );
}
