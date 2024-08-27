import React from "react";
import foto from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

const Card = ({ id, name, email, phone, address, onClick }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0 align-items-center">
                <div className="col-md-2 d-flex justify-content-center">
                    <img src={foto} className="rounded-circle" alt="Foto de perfil" width={100} height={100} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text mb-1"><i className="bi bi-telephone-fill"></i> {phone}</p>
                        <p className="card-text mb-1"><i className="bi bi-envelope"></i> {email}</p>
                        <p className="card-text mb-1"><i className="bi bi-geo-alt-fill"></i> {address}</p>
                    </div>
                </div>
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column">
                        <Link className="btn btn-primary mb-2" to={`/editContact/${id}`}><i className="bi bi-pencil-fill"></i> Editar</Link>
                        <button className="btn btn-danger" onClick={onClick}><i className="bi bi-trash3-fill"></i> Borrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
