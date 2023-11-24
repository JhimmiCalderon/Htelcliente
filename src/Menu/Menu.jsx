export function Menu() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fst-italic fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#">
              <section style={{ textAlign: 'center', margin: '0 auto' }}>
                <img src="src/assets/img/logo.jpg" alt="" style={{ maxWidth: '50%', height: 'auto', maxHeight: '150px' }} />
              </section>
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
                   Habitaciones
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Reserva
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Ubicación
                  </a>
                </li>
            
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  