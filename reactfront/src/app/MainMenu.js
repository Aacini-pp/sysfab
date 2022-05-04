import React from 'react';
import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


import {useAuth,getRolUruaria} from './funciones'

const URI="http://localhost:8080/logout/";




const CompMainMenu=()=>{
  const navigate=useNavigate();


  const logOutFn = (e)=>{
   
    console.log("Cerrando session");

        e.preventDefault()
        
        axios.get(URI).then((response) => {
            console.log(response);
            let usuaria = JSON.parse(localStorage.getItem("Usuaria"));
        
            setTimeout(function(){navigate("/")}, 2000);
            
            console.log("Adios "+usuaria.Nombre)
            console.log(response.message)
           
            //limpiarMsg()
            //setMegEstado("Adios "+usuaria.Nombre)           
            localStorage.clear();
        }).catch(error => {
            console.error(error)
            localStorage.clear();
            //limpiarMsg()
            //setMegError(error.response.data.message)
        });
  }


 
  
   
    return (
           
        <div className="container-fluid m-0 p-0">
        <div className="row">
            <div className="col">


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <Link className="navbar-brand" to={'/'}> <img src="/iconAnabella.png" width="30" height="30"/>  Ana Bella  México</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
      <li className="nav-item active">
        <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    { (!useAuth() )?
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center"> 
         <li className="nav-item">
          <Link className="nav-link" to={'/login/'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/Registrarse'}>Registrarse</Link>
        </li>
       
      </ul>
      :<ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
         <li className="nav-item">
          <Link className="nav-link" to={'/MisTickets/'}> <i className="fa-solid fa-ticket-simple"></i> Mis Tickets</Link>
        </li>
        
         {/* Solo Voluntarias o superior */}
        { (getRolUruaria() >= 3) ?(
          <li className="nav-item">     
            <Link className="nav-link" to={'/MisAsignaciones/'}><i className="fa-solid fa-clipboard"></i> Mis Asignaciones</Link>
          </li>):"" 
         }

         {/* Solo Coordinadores */}
         { (getRolUruaria() >= 4) ?(    
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0 align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to={'/Usuarios/'}> <i className="fa-solid fa-child-dress"></i> Usuarias</Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to={'/Tickets/'}> <i className="fa-solid fa-ticket"></i> Tickets</Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to={'/AsignacionCaso/'}> <i className="fa-solid fa-clipboard-list"></i> Asignación de Casos</Link>
                </li>
              </ul>
            ):"" 
         }
         
                


        

      

        {/* <form className="form-inline my-2 my-lg-0">
           <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
     
        </form> */}

         <button  className="btn btn-primary m-2" onClick={ logOutFn}  > <i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</button>
    

      </ul>    
     }

      
    
 
   </div>
</nav>




          </div>
        </div>
     </div>
      
       
    )
}


export default CompMainMenu