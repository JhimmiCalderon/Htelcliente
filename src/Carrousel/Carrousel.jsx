export function Carrousel() {
    return (
        <>
            <section>
                <div className="row justify-content-center bannerDos img-fluid">
                <h1 className="fw-bold text-center text-white fst-italic">Nuestras Habitaciones</h1>
                    <div className="col-12 col-md-8 text-white">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/cadenahotelapi.appspot.com/o/habitacion1.jpeg?alt=media&token=f50938d5-89e0-4212-b589-51ab6dfa6471" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/cadenahotelapi.appspot.com/o/habitacion2.jpeg?alt=media&token=e6c06312-3de5-44ce-9ca0-ef0ae8ce8750" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/cadenahotelapi.appspot.com/o/habitacion4.jpeg?alt=media&token=89aa8fee-8559-4821-92e7-c8cf9fe7a499" className="d-block w-100" alt="..." />
                                </div>
                                {/* <div className="carousel-item">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/cadenahotelapi.appspot.com/o/habitacion7.jpeg?alt=media&token=5121b5f5-25dd-494f-895b-57699471b0d7" className="d-block w-100" alt="..." />
                                </div> */}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}