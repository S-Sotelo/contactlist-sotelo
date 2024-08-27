import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";
import Modal from "../component/modal";

export const Home = () => {
    const [show, setShow] = useState(false);
    const [contacto, setContacto] = useState(null);
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-white">
                        <h2>Contact List</h2>
                        <h6>Agenda asignada: {store.agenda}</h6>
                    </div>
                    <div className="col-md-12">
                        {
                            store.contacts.length > 0 &&
                            store.contacts.map((contact) => {
                                return (
                                    <Card {...contact} key={contact.id} onClick={() => {
                                        setContacto(contact);
                                        setShow(true);
                                    }} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Modal show={show} setShow={setShow} contacto={contacto} setContacto={setContacto} deleteContact={actions.deleteContact} />
        </>
    );
};