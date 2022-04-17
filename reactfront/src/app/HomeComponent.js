import React from 'react';
import axios from 'axios'

import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const URI="http://localhost:8080/login/";


const HomeComponent=()=>{



    return (
        <div >
            <h1 className="display-1"> 
            <i className="fa-solid fa-person-dress"></i>  Bienvenida 
            </h1>
            <h3>Buscamos ayudarte . <Link className="" to={'/Usuarios/create'}>Registrate</Link>  y cuentanos todo  </h3>
            <p>
                
            </p>
        </div>
    )
}


export default HomeComponent