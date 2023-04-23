import { NavLink } from "react-router-dom";
import React from "react";
import "../Css/Navbar.css"

export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navbar">
                <h1>Jewellers</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav-item dropdown ">
                            <NavLink className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Collection
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/Diamond" className="dropdown-item" href="">Diamond</NavLink></li>
                                <li><NavLink to="/Gold" className="dropdown-item" href="">Gold</NavLink></li>
                                <li><NavLink to="/Platinum" className="dropdown-item" href="">Platinum</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2"
                            // type="search"
                            placeholder="Search"
                        // value={searchvalue}
                        // onChange={(e) => setsearchvalue(e.target.value)} />
                        />
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        {/* <div className="Navbar ">
            <div className="row ">
                <div className="logo col-lg-4 col-md-4 col-sm-12">
                    <h1> Jewellers</h1>
                </div>
                <div className="Menu col-lg-8 col-md-8 col-sm-12">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Collection
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/Diamond" className="dropdown-item" href="">Diamond</NavLink></li>
                                <li><NavLink to="/Gold" className="dropdown-item" href="">Gold</NavLink></li>
                                <li><NavLink to="/Platinum" className="dropdown-item" href="">Platinum</NavLink></li>
                            </ul></li>
                        <li>
                            <NavLink to="/Contact ">Contact </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div > */}
    </>
}