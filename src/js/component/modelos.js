import React from "react";
import "../../styles/modelos.css";
import chicoPortada from "../../img/chico.jpg"
import chicaPortada from "../../img/chicaModelo.jpg"

const Modelos = () => {
  return (
    <section className="d-flex mt-4 flex-column">
      <h1>MODELOS</h1>
      <div className="modeloGeneroBoard d-flex p-5 col-md-11">
        <div className="col-md-6 mx-2 imagenModelo chico">
          <img
            src={chicoPortada}
            alt="modelo-chico"
            className="modeloImagen"
          />
          <div className="tituloModelo">Hombre</div>
        </div>
        <div className="col-md-6 imagenModelo">
          <img
            src={chicaPortada}
            alt="modelo-chica"
            className="modeloImagen"
          />
          <div className="tituloModelo">Mujer</div>
        </div>
      </div>
    </section>
  );
};

export default Modelos;


