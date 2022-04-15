import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

const URI="http://localhost:8080/Usuarios/";


const CompMainMenu=()=>{
  
   
    return (
           
        <div className="container-fluid m-0 p-0">
        <div className="row">
            <div className="col">


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <Link className="navbar-brand" to={'/'}> <img src="./iconAnabella.png" width="30" height="30"/>  Ana Bella  México</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/Usuarios/create'}>Registrarse</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/login/'}>Login</Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to={'/Usuarios/'}> <i className="fa-solid fa-child-dress"></i> Usuarias</Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to={'/Tickets/'}> <i className="fa-solid fa-ticket"></i> Tickets</Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" to={'/AsignacionCaso/'}> <i className="fa-solid fa-list-check"></i> Asignación de Casos</Link>
      </li>



      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
     
    </form>
  </div>
</nav>




          </div>
        </div>
     </div>
      
       
    )
}


export default CompMainMenu