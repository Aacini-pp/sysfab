import logo from './logo.svg';
import './App.css';


import CompShowUsuarios from './usuario/ShowUsuario';
import CompCreateUsuarios from './usuario/CreateUsuario';
import CompEditUsuario from './usuario/EditUsuario';

import CompShowTickets from './ticket/ShowTicket';
import CompCreateTickets from './ticket/CreateTicket'
import CompEditTickets from './ticket/EditTicket'


import CompShowAsgCaso from './asignacioncaso/ShowAsgCaso';
import CompCreateAsgCaso from   './asignacioncaso/CreateAsgCaso';
import CompEditAsgCas from './asignacioncaso/EditAsgCaso'




import ComplogUsuarios from './app/logUsuario'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
     
     <div className="container-fluid m-0 p-0">
        <div className="row">
            <div className="col">


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <a className="navbar-brand" href="/"> <img src="/iconAnabella.png" width="30" height="30"/>  Ana Bella  México</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Usuarios/create">Registrarse</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login/">Login</a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/Usuarios/"> <i className="fa-solid fa-child-dress"></i> Usuarias</a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/Tickets/"> <i className="fa-solid fa-ticket"></i> Tickets</a>
      </li>


      <li className="nav-item">
        <a className="nav-link" href="/AsignacionCaso/"> <i className="fa-solid fa-list-check"></i> Asignación de Casos</a>
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
      
      
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />


        <BrowserRouter>
          <Routes>

            <Route path="login/" element={<ComplogUsuarios/>}/>


            <Route path="Usuarios/" element={<CompShowUsuarios/>}/>
            <Route path="Usuarios/create" element={<CompCreateUsuarios/>}/>
            <Route path="Usuarios/edit/:id" element={<CompEditUsuario/>}/>



            <Route path="Tickets/" element={<CompShowTickets/>}/>
            <Route path="Tickets/create" element={<CompCreateTickets/>}/>
            <Route path="Tickets/edit/:id" element={<CompEditTickets/>}/>


            <Route path="AsignacionCaso/" element={<CompShowAsgCaso/>}/>
            <Route path="AsignacionCaso/create" element={<CompCreateAsgCaso/>}/>
            <Route path="AsignacionCaso/edit/:id" element={<CompEditAsgCas/>}/>
            
          </Routes>
        </BrowserRouter>





       

      </header>

   
    </div>
  );
}

export default App;
