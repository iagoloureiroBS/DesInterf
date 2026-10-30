export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ReservaYa!
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarDarkDrawer"
          aria-controls="navbarDarkDrawer"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="navbarDarkDrawer"
          aria-labelledby="navbarDarkDrawerLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarDarkDrawerLabel">
              Menú
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Cerrar"
            />
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <span className="nav-link disabled" aria-disabled="true">
                  Disabled
                </span>
              </li>
            </ul>

            <form
              className="d-flex gap-2"
              role="search"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Buscar"
                aria-label="Buscar"
              />
              <button className="btn btn-outline-light" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}