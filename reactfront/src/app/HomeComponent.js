import React from 'react';
import axios from 'axios'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useAuth, getUruaria, getRolUruaria } from './funciones'



const URI = "http://localhost:8080/login/";


const HomeComponent = () => {


    const [msgBienvenida, setMsgBienvenida] = useState("");

    useEffect(() => {//TODO:CAMBIAR  ancors por links para que no cambie la pagina
        setMsgBienvenida(`<span><a className="" href='/Registrarse'>Registrate</a>  y cuentanos todo</span>`)
        if (useAuth()) {
            setMsgBienvenida(`<span><a className="" href='/Tickets/create'>Cuentanos todo </a></span>`)
            if (getRolUruaria() >= 3) {
                setMsgBienvenida(`<span>Muchas gracias por tu ayuda</span>`)
            }

        }

    }, [])


    return (
        <div >
            <h1 className="display-1">
                <i className="fa-solid fa-person-dress"></i>  Bienvenida  {(useAuth()) ? <span> {getUruaria().Nombre}  </span> : <span> </span>}
            </h1>
            <h3>Buscamos ayudarte.  <span className="content" dangerouslySetInnerHTML={{ __html: msgBienvenida }}></span> </h3>
            <p>

            </p>
        </div>
    )
}


export default HomeComponent