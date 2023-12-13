import React from "react";
import colecionImg from "../../img/chica2.jpg"
import "../../styles/colecion.css";

const Colecion = () =>{
    return(
        <section>
            <div className="container-fluid colecionBoard d-flex flex-row  ">
                <div className="colecionImagen col-md-4">
                    <img src={colecionImg} alt="colecion foto"/>
                </div>
                <div className="colecionDescription col-md-4 offset-md-1">
                    <h1 className="mb-4">COLECCIONES</h1>
                    <p>Ropa diseñada para héroes en el cuidado de la salud. Comodidad, estilo y funcionalidad en cada prenda. Tejidos de alta calidad para enfrentar desafíos diarios. La elección perfecta para el personal de enfermería.</p>
                    <span><strong>Encuentra el tuyo</strong></span>
                    <button className="btn btn-dark mt-5">COMPRAR</button>
                </div>
            </div>
        </section>
    )
}


export default Colecion