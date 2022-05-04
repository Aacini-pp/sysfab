import React from 'react';
import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

import ProtectedRoutes from './Routes/ProtectedRoutes';
import ProtectedRoutesVoluntaria from './Routes/ProtectedRoutesVoluntaria';
import ProtectedRoutesCoordinador from './Routes/ProtectedRoutesCoordinador';

import CompDetalleUsuario from "./usuario/DetalleUsuario"
import CompRegistrarUsuario from './usuario/RegistrarUsuario';
import CompShowUsuarios from './usuario/ShowUsuario';
import CompCreateUsuarios from './usuario/CreateUsuario';
import CompEditUsuario from './usuario/EditUsuario';


import CompDetalleTicket from './ticket/DetalleTicket';
import CompMisTickets from './ticket/MisTickets';
import CompShowTickets from './ticket/ShowTicket';
import CompCreateTickets from './ticket/CreateTicket'
import CompEditTickets from './ticket/EditTicket'

import CompMisAsgCasos from './asignacioncaso/MisAsgCasos';
import CompShowAsgCaso from './asignacioncaso/ShowAsgCaso';
import CompCreateAsgCaso from   './asignacioncaso/CreateAsgCaso';
import CompEditAsgCas from './asignacioncaso/EditAsgCaso'


import HomeComponent from './app/HomeComponent'
import CompMainMenu from './app/MainMenu'
import ComplogUsuarios from './app/logUsuario'


import CompNotFound from './app/NotFound'


import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {





  return (
    <div className="App">
    
      
      <header className="App-header">
      
      

        <BrowserRouter>
        
        
        <CompMainMenu/>
        <img src={logo} className="App-logo" alt="logo" />
        
               
          <Routes>
          
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/login" element={<ComplogUsuarios/>}/>
            <Route path="/Registrarse" element={<CompRegistrarUsuario/>}/>

            
            <Route element={<ProtectedRoutes />} > {/* usuarios logeados */}
            

              <Route path="/MisTickets/" element={<CompMisTickets/>}/>
              <Route path="/Tickets/create" element={<CompCreateTickets/>}/>

              
              <Route element={<ProtectedRoutesVoluntaria />} >  
                <Route path="/MisAsignaciones/" element={<CompMisAsgCasos/>}/>
                <Route path="/Usuarios/:id" element={<CompDetalleUsuario/>}/>
                <Route path="/Tickets/:id" element={<CompDetalleTicket/>}/>
                

                <Route element={<ProtectedRoutesCoordinador />} >   
                    
                      <Route path="/Usuarios/" element={<CompShowUsuarios/>}/>
                      <Route path="/Usuarios/create" element={<CompCreateUsuarios/>}/>
                      <Route path="/Usuarios/edit/:id" element={<CompEditUsuario/>}/>


                      <Route path="/Tickets/" element={<CompShowTickets/>}/>
                      {/* ...Crear es publico */}
                      <Route path="/Tickets/edit/:id" element={<CompEditTickets/>}/>
                  
                  
                      
                      <Route path="/AsignacionCaso/" element={<CompShowAsgCaso/>}/>
                      <Route path="/AsignacionCaso/create" element={<CompCreateAsgCaso/>}/>
                      <Route path="/AsignacionCaso/create/:id" element={<CompCreateAsgCaso/>}/>
                      <Route path="/AsignacionCaso/edit/:id" element={<CompEditAsgCas/>}/>
                </Route>
              </Route>
          
          </Route>

          
          <Route path="*" element={<CompNotFound/>}/>
            
          </Routes>
        </BrowserRouter>





       

      </header>
      
   


   
    </div>
  );
}

export default App;
