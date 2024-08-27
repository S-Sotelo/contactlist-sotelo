import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-white mb-3">
            <div className="container-fluid">
                <div className="d-flex ms-auto">
                    <Link to="/addContact">
                        <button className="btn btn-success">Add New Contact</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};