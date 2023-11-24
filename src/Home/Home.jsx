import { useEffect,useState } from "react";
import './Home.css'
import { Formulario } from "../Formulario/Formulario";
import { Descripcion } from "../Descripcion/Descripcion";
import { Ubicacion } from "../Ubicacion/Ubicacion";
import { Carrousel } from "../Carrousel/Carrousel";
export function Home(){
return(
    <>
      <div className="banner">
        <div className="row">
            <div className="col-12 col-md-4 text-white">
                <h3 className="fw-bold fst-italic">Reserva Con Nosotros</h3><hr className="h-10"></hr>
                <Formulario/>
            </div>
        </div>
    </div>   
    <div className="bannerDos">
        <div className="row justify-content-center">
            <div className="col-12 col-md-4 text-white">
                <Descripcion/>
            </div>
        </div>
    </div>
   
    </>
)
}