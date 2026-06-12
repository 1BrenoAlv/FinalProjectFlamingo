import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow-sm sticky-top">
            <div className="container-fluid">
                <div className="row align-items-center py-3 px-3 px-md-4">
                    <div className="col-auto">
                        <a href="/" className="text-decoration-none">
                            <h1 className="h5 mb-0">
                                Breno<span className="text-primary">Cursos</span>
                            </h1>
                        </a>
                    </div>

                    <nav className="col d-none d-md-block">
                        <ul className="nav justify-content-center">
                            <li className="nav-item"><a className="nav-link" href="#">Início</a></li>
                            <li className="nav-item"><a className="nav-link" href="#cursos">Cursos</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
