export function Menu(){
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fst-italic fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        HotelTransilvania
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Galeria
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Ubicación
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}