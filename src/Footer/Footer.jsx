import { Ubicacion } from "../Ubicacion/Ubicacion";

export function Footer() {
    return (
        <>
            <div className="card bg-dark text-white">
                <div className="card-header">
                    {/* Featured */}
                </div>
                <div className="row p-5">
                    <div className="col-12 col-md-6 fst-italic fw-bold">
                        <div className="mb-3">
                            <Ubicacion />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 fst-italic fw-bold">
                    <div className="card-body">
                    <h5 className="card-title">Contactanos</h5>
                    <p className="card-text">Conoce nuestros aliados.</p>
                    <a href="#" className="btn btn-primary">Siguenos</a>
                </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}