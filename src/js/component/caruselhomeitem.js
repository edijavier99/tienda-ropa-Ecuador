import React from "react";
import portada from "../../img/portada2.png";
import portadaFondo from "../../img/portadaChico.png";

const CaruselHomeItem = ({ title, buttonText, navigation, description }) => {

  return (
<div className="carousel-item active d-flex flex-row" >
      <div className="description text-white col-md-6">
        <h1 className="tituloPortada">ÚLTIMAS <br /> <span className="">NOVEDADES </span></h1>
        <p className="text-center">Descubre nuestras coleciones de uniformes  <br/>para damas y cabelleros</p>
        <button className="btn mt-5 comprarHome">COMPRAR  <i className="fa-solid fa-arrow-right mx-3"></i>  </button>
      </div>
      <div className="imagenTrasera col-md-2">
          <img  src={portadaFondo} alt="imagen-fondo"/>
      </div>
      <div className="imagenPortada col-md-4">
        <img src={portada} alt="fotoportada" className="d-block" />
      </div>
    </div>
  );
}

export default CaruselHomeItem;