import Layout from "../components/Layout";
// import Input from "../components/Input";
// import Button from "../components/Button";

import SectionWelcome from "../components/Sections/SectionWelcome";
import SectionBuscar from "../components/Sections/SectionBuscar";
import SectionIniciar from "../components/Sections/SectionIniciar";

export default function Home() {
    return (
        <Layout>
            <div className="main" style={{ minHeight: "100vh" }}>
                <SectionWelcome />
                <SectionBuscar />
                <SectionIniciar />
            </div>
        </Layout>
    );
}
