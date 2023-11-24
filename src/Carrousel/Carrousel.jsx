export function Carrousel() {
    return (
        <>
            <section>
                <div className="row justify-content-center bannerDos img-fluid">
                <h1 className="fw-bold text-center text-white fst-italic">Habitaciones Disney</h1>
                    <div className="col-12 col-md-8 text-white">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://1.bp.blogspot.com/-OUr_K4tg63A/TblVFtCjZYI/AAAAAAAABi4/kDMwutj0fso/s1600/Suite.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/d/disney-world-resorts-5.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://1.bp.blogspot.com/-fX_75RCYlOo/YEKVjMdBr4I/AAAAAAAAVJc/x2vVX-H2lIE9RJ7XZZl-e1HSx7ZTf6yRgCLcBGAsYHQ/s16000/moana_hotel_6.jpg" className="d-block w-100" alt="..." />
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