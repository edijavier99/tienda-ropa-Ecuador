import React from "react";
import "../../styles/producion.css";
const Produccion = () =>{

    return(
        <div className="cuadrado">
            <div className="cuadrado-superior justify-content-center">
                <p className="produccion">Viste tu estilo único con nosotros.<br/>
                Producción propia, moda exclusiva.<br/>
                Creado con pasión, llevado con orgullo,<br/>
                Descubre la autenticidad en cada prenda.</p>
            </div>
            <div className="slogan">
                <span className="negro">Producción</span> <span className="centro"></span><span className="blanco"> Propia</span>
            </div>
            <div className="cuadrado-superior-derecha">
                <img src="https://cdn.pixabay.com/photo/2020/05/01/13/21/couture-5117019_1280.jpg" alt="foto-maquina-coser" />
            </div>
            <div className="cuadrado-inferior-izquierda">
                <img src="https://cdn.pixabay.com/photo/2019/01/30/08/29/wool-3964039_1280.jpg" alt="foto-hilo-ropa" />
            </div>
            <div className="cuadrado-inferior d-flex align-items-center justify-content-center">
                Confección excepcional, materiales de elite.<br/>
                Hilos de calidad, tu moda perfecta.<br/>
                Viste la excelencia en cada detalle.<br/>
                Donde la perfección se encuentra en cada costura.
            </div>
      </div>
    )
}

export default Produccion