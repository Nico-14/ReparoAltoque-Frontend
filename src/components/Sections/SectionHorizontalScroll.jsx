import React from "react";

import CardPublicación from "../Utilities/CardPublicacion";

export default function SectionHorizontalScroll({
    titulo,
    arrayPublicaciones,
    bgColor,
}) {
    return (
        <React.Fragment>
            <section className={"section " + bgColor}>
                <div className="col-lg-12">
                    <h3 className="title text-center display-3 mb-5">
                        {titulo}
                    </h3>
                </div>
                <div
                    className="col-lg-12 d-flex pt-3"
                    style={{
                        overflowX: "scroll",
                    }}
                >
                    {arrayPublicaciones &&
                        arrayPublicaciones.map((publicacion) => (
                            <CardPublicación
                                titulo={publicacion.main_title}
                                nombre={publicacion.name}
                                urlImg={publicacion.url_img}
                                raitings={publicacion.current_average_ratings}
                                idPost={publicacion.post_id}
                                key={publicacion.post_id}
                            />
                        ))}
                </div>
            </section>
        </React.Fragment>
    );
}
