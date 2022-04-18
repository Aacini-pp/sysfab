import React from 'react';
import axios from 'axios'

import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

import {useAuth,getUruaria} from './funciones'



const URI="http://localhost:8080/login/";


const HomeComponent=()=>{

    console.log( "se definio ",getUruaria() )


    return (
        <div >
            <h1 className="display-1"> 
            <i className="fa-solid fa-person-dress"></i>  Bienvenida  {(useAuth())?<span> {getUruaria().Nombre}  </span>:<span> </span>  } 
            </h1>
            <h3>Buscamos ayudarte. {(!useAuth())?<span><Link className="" to={'/Usuarios/create'}>Registrate</Link>  y cuentanos todo</span>:<span><Link className="" to={'/Tickets/create'}>Cuentanos todo </Link></span>  }  </h3>
            <p>
                
            </p>
        </div>
    )
}


export default HomeComponent