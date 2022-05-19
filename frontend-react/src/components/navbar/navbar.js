import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <h1 className="title">MyMenus</h1>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Itens
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <hr/>
                                <a className="navbar-item">
                                    Contact
                                </a>
                
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                <Link to={`/sign`}><strong>Sign up</strong></Link>
                                </a>
                                <a className="button is-light">
                                    <Link to={`/login`}>Log in</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar