import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import "../Css/Navbar.css"
import { WrapperContext } from "./App";
import Diamond from "./Diamond";
import { BsCartDash } from "react-icons/bs"


export default function Navbar() {
    const { searchFormValue, setSearchFormValue } = useContext(WrapperContext)
    const { list, setList } = useContext(WrapperContext);
    const { filterList } = useContext(WrapperContext);

    return <>
        <nav className="navbar bg-dark sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navbar bg-dark p-2">
                <h1>Jewellers</h1>
                <button className="navbar-toggler bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                            <NavLink className="nav-link dropdown-toggle p-0" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <li className="cart">
                            < BsCartDash />
                        </li>
                    </ul>

                    <input className="form-control me-2 w-25"
                        placeholder="Search"
                        value={searchFormValue}
                        onChange={(e) => setSearchFormValue(e.target.value)} />
                </div>
            </div>
        </nav >


    </>
}
