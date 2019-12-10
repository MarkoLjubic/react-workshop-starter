import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../_context/AppContext'

function Header({ title }) {
    const { changeView, changeLight } = useContext(AppContext)

    return (
        <header>
            <nav className="red darken-2">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo card-title">
                            {title}
                        </Link>
                        <ul className="right">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a
                                    onClick={e => {
                                        e.preventDefault()
                                        changeView()
                                    }}
                                >
                                    <i className="material-icons">view_module</i>
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={e => {
                                        e.preventDefault()
                                        changeLight()
                                    }}
                                >
                                    <i className="material-icons">wb_incandescent</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
