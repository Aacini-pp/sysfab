import React from "react";
import { useState, useEffect } from "react"


import logo from "./logo.svg";
import "./App.css";

import conectarSocket from "./Sockets/Socket"

import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ProtectedRoutesVoluntaria from "./Routes/ProtectedRoutesVoluntaria";
import ProtectedRoutesCoordinador from "./Routes/ProtectedRoutesCoordinador";

import CompDetalleUsuario from "./usuario/DetalleUsuario";
import CompRegistrarUsuario from "./usuario/RegistrarUsuario";
import CompShowUsuarios from "./usuario/ShowUsuario";
import CompCreateUsuarios from "./usuario/CreateUsuario";
import CompEditUsuario from "./usuario/EditUsuario";

import CompDetalleTicket from "./ticket/DetalleTicket";
import CompMisTickets from "./ticket/MisTickets";
import CompShowTickets from "./ticket/ShowTicket";
import CompCreateTickets from "./ticket/CreateTicket";
import CompEditTickets from "./ticket/EditTicket";

import CompMisAsgCasos from "./asignacioncaso/MisAsgCasos";
import CompShowAsgCaso from "./asignacioncaso/ShowAsgCaso";
import CompCreateAsgCaso from "./asignacioncaso/CreateAsgCaso";
import CompEditAsgCas from "./asignacioncaso/EditAsgCaso";

import HomeComponent from "./app/HomeComponent";
import CompMainMenu from "./app/MainMenu";
import ComplogUsuarios from "./app/logUsuario";
import CompForgotpass from "./app/CompForgotpass";
import CompChangePasswords from "./app/CompChangePasswords";
import CompPoliticas from "./app/CompPoliticas";


import CompChat from "./Sockets/CompChat";
import CompEmergencias from "./Sockets/CompEmergencias"

import { useAuth, getRolUruaria, getUruaria, isVoluntaria, isCoordinadora } from './app/funciones'

import CompNotFound from "./app/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [emergencias, setEmergencias] = useState([]);

  const getEmergencias = () => {
    return emergencias
  }

  const ConectarSocketCanalPropioEvent = (e) => {
    console.log("ConectarSocketCanalPropioEvent".e)
    let socket = conectarSocket()

    let chanelUser = `Emergencias>${getUruaria().id}`//


    console.log("Escuchando ", chanelUser)
    socket.on(chanelUser, msg => {
      console.log("MensajeSoket recivido: ", msg)
      setEmergencias([...emergencias, msg])

    })

    console.log("Emergencias registradas", emergencias)
  }

  /*   si esta logeado conectarse automaticamente*/
  if (useAuth()) {
    ConectarSocketCanalPropioEvent()
  }

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <CompMainMenu />
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/login" element={<ComplogUsuarios ConectarSocketCanalPropio={ConectarSocketCanalPropioEvent} />} />
            <Route path="/Registrarse" element={<CompRegistrarUsuario />} />
            <Route path="/forgot-password" element={<CompForgotpass />} />
            <Route path="/change-password/:token" element={<CompChangePasswords />} />
            <Route path="/politicas" element={<CompPoliticas />} />



            <Route element={<ProtectedRoutes />}>

              {/* usuarios logeados */}
              <Route path="/Chat" element={<CompChat />} />

              <Route path="/MisTickets/" element={<CompMisTickets />} />
              <Route path="/Tickets/create" element={<CompCreateTickets />} />
              <Route element={<ProtectedRoutesVoluntaria />}>
                <Route path="/Emergencias" element={<CompEmergencias emergencias={emergencias} getEmergencias={getEmergencias} />} />

                <Route path="/MisAsignaciones/" element={<CompMisAsgCasos />} />
                <Route path="/Usuarios/:id" element={<CompDetalleUsuario />} />
                <Route path="/Tickets/:id" element={<CompDetalleTicket />} />

                <Route element={<ProtectedRoutesCoordinador />}>
                  <Route path="/Usuarios/" element={<CompShowUsuarios />} />
                  <Route path="/Usuarios/create" element={<CompCreateUsuarios />} />
                  <Route path="/Usuarios/edit/:id" element={<CompEditUsuario />} />

                  <Route path="/Tickets/" element={<CompShowTickets />} />
                  {/* ...Crear ticket es publico */}
                  <Route path="/Tickets/edit/:id" element={<CompEditTickets />} />

                  <Route path="/AsignacionCaso/" element={<CompShowAsgCaso />} />
                  <Route path="/AsignacionCaso/create" element={<CompCreateAsgCaso />} />
                  <Route path="/AsignacionCaso/create/:id" element={<CompCreateAsgCaso />} />
                  <Route path="/AsignacionCaso/edit/:id" element={<CompEditAsgCas />} />

                </Route>
              </Route>
            </Route>
            <Route path="*" element={<CompNotFound />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
