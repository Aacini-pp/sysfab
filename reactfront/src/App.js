import React from "react";
import { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react"


import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'


import logo from "./logo.svg";
import "./App.css";

import conectarSocket from "./Sockets/Socket"

import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ProtectedRoutesVoluntaria from "./Routes/ProtectedRoutesVoluntaria";
import ProtectedRoutesCoordinador from "./Routes/ProtectedRoutesCoordinador";



import CompIndexAdmon from   "./administracion/index";

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


import CompFakeLogin from "./app/fackeLogin";


import CompChat from "./Sockets/CompChat";
import CompEmergencias from "./Sockets/CompEmergencias"
import CompMultiChat from "./Sockets/Chat/MultiChat";

 

import { useAuth, getRolUruaria, getUruaria, isVoluntaria, isCoordinadora } from './app/funciones'

import CompNotFound from "./app/NotFound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [emergencias, setEmergencias] = useState([]);
  const [socket, setSocket] = useState(conectarSocket());
  const childCompRef = useRef()


  TimeAgo.addDefaultLocale(es);
 




  const conversacionesDef = [
      

        {

            Usuaria: 
                   {
                        id: 42,
                        Nombre: 'susi',
                        ApellidoPaterno: 'Menganita',
                        ApellidoMaterno: 'Menganita',
                        NickName: 'a3',
                        Pass: 'a',
                        FechaNacimiento: '2022-03-01',
                        Ciudad: 'Menganita',
                        PerfilFB: null,
                        Email: null,
                        Telefono: '123',
                        Rol: 4,
                        EntidadFederativa: 9,
                        Estatus: 1,
                        createdAt: "2022-04-29 16:08:31",
                        updatedAt: "2022-05-26 13:28:58"
                      },
            mensajesNoleidos : 8,

            mensages: [   { 
                            "emisor":42,
                            "receptor":1,
                            "text" : "Saludos soy la voluntaria a3",
                            "createdAt": '2023-05-29T20:46:56.028Z'
                            

                        },
                        { 
                            "emisor":1,
                            "receptor":42,
                            "text" : "saludo devuelto soy cordinadora",
                            "createdAt": "2022-05-20 22:22:22"

                        },

                        { 
                            "emisor":42,
                            "receptor":1,
                            "text" : "hola desde voluntaia a3",
                            "createdAt": "2022-05-20 22:18:22"

                        }

                    ]

        },


        {

          Usuaria:  //info del otro contacto
                 {
                      id: 1,
                      Nombre: 'Coordinadora',
                      ApellidoPaterno: 'Menganita',
                      ApellidoMaterno: null,
                      NickName: 'a',
                      Pass: 'a',
                      FechaNacimiento: '2022-03-01',
                      Ciudad: 'Menganita',
                      PerfilFB: null,
                      Email: null,
                      Telefono: '123',
                      Rol: 4,
                      EntidadFederativa: 9,
                      Estatus: 1,
                      createdAt: "2022-04-29 16:08:31",
                      updatedAt: "2022-05-26 13:28:58"
                    },

          mensajesNoleidos : 4,

          mensages: [ 
              
              
                  { 
                          "emisor":1,
                          "receptor":42,
                          "text" : "Saludos soy la cordinadora",
                          "createdAt": "2023-05-29 22:18:22"
      
                  },
      
      
                  { 
                          "emisor":42,
                          "receptor":1,
                          "text" : "saludo devuelto",
                          "createdAt": "2023-05-29 22:18:22"
      
                    },

                    

                    { 
                      "emisor":1,
                      "receptor":42,
                      "text" : "1",
                      "createdAt": "2023-05-29 22:18:22"
  
                    },
        
        
                    { 
                      "emisor":42,
                      "receptor":1,
                      "text" : "2",
                      "createdAt": "2023-05-29 22:18:22"
      
                    },

                        

                    { 
                      "emisor":1,
                      "receptor":42,
                      "text" : "3",
                      "createdAt": "2023-05-29 22:18:22"

                    },


                    { 
                            "emisor":42,
                            "receptor":1,
                            "text" : "4",
                            "createdAt": "2023-05-29 22:18:22"

                      }


      
      
      
              ]
      },


        {

          Usuaria: 
                 {
                      id: 18,
                      Nombre: 'Voluntaria2',
                      ApellidoPaterno: 'Menganita',
                      ApellidoMaterno: 'Menganita',
                      NickName: 'a3',
                      Pass: 'a',
                      FechaNacimiento: '2022-03-01',
                      Ciudad: 'Menganita',
                      PerfilFB: null,
                      Email: null,
                      Telefono: '123',
                      Rol: 4,
                      EntidadFederativa: 9,
                      Estatus: 1,
                      createdAt: "2022-04-29 16:08:31",
                      updatedAt: "2022-05-26 13:28:58"
                    },
          mensajesNoleidos : 6,

          mensages: [   { 
                          "emisor":18,
                          "receptor":1,
                          "text" : "Saludos soy la voluntaria a3",
                          "createdAt": '2023-05-29T20:46:56.028Z'
                          

                      },
                      { 
                          "emisor":1,
                          "receptor":18,
                          "text" : "saludo devuelto soy cordinadora",
                          "createdAt": "2022-05-20 22:22:22"

                      },

                      { 
                          "emisor":18,
                          "receptor":1,
                          "text" : "bye",
                          "createdAt": "2022-05-20 22:18:22"

                      }

                  ]

          },

          {

            Usuaria: 
                   {
                        id: 19,
                        Nombre: 'Menganita3',
                        ApellidoPaterno: 'Menganita',
                        ApellidoMaterno: 'Menganita',
                        NickName: 'a3',
                        Pass: 'a',
                        FechaNacimiento: '2022-03-01',
                        Ciudad: 'Menganita',
                        PerfilFB: null,
                        Email: null,
                        Telefono: '123',
                        Rol: 4,
                        EntidadFederativa: 9,
                        Estatus: 1,
                        createdAt: "2022-04-29 16:08:31",
                        updatedAt: "2022-05-26 13:28:58"
                      },
            mensajesNoleidos : 3,

            mensages: [   { 
                            "emisor":19,
                            "receptor":1,
                            "text" : "Saludos soy la voluntaria a3",
                            "createdAt": '2023-05-29T20:46:56.028Z'
                            

                        },
                        { 
                            "emisor":1,
                            "receptor":19,
                            "text" : "saludo devuelto soy cordinadora",
                            "createdAt": "2022-05-20 22:22:22"

                        },

                        { 
                            "emisor":19,
                            "receptor":1,
                            "text" : "hola desde volungtaria a3",
                            "createdAt": "2022-05-20 22:18:22"

                        }

                    ]

        }
        


       
 
 

    ]
     
 const [conversaciones, setConversaciones] = useState(conversacionesDef);




  const getEmergencias = () => {
    alert("Please")
    // return emergencias
  }

  const EmergenciasPendientesEvent = (e) => {
    
    console.log('ConsultarDatosAtrazados');
    let canal ="ConsultarDatosAtrazados";
    let mensaje = "";
    //emitirMensaje(canal, mensaje);

  }

  const emitirMensaje =(canal, mensaje) =>{
    socket.emit(canal, mensaje)
    
  }

  /*
    useEffect(() => {
    
      if (useAuth()) {
        console.log("ConectarSocketCanalPropioEvent")
        let socket = conectarSocket()
  
        let chanelUser = `Emergencias>${getUruaria().id}`//
  
  
        console.log("Escuchando ", chanelUser)
        socket.on(chanelUser, msg => {
          console.log("MensajeSoket recivido: ", msg, emergencias)
          setEmergencias([...emergencias, msg])
          console.log("Emergencias registradas", emergencias)
        })
  
        return () => { socket.off() }
      }
  
    }, [])
    */





 //agrega un msg recibido el el array de mensajes  ordenandolo deacurdo a su receptor
  //tanto propio como de alguien mas
  //y reggresa una copia modificado de Conversasiones
    const agregarMensaje  =  (msg) =>{
      let copyConversaciones = [...conversaciones]; //copiamos las conversaciones
      let posItem = null;

      //cuando el mensaje es de otro  buscar el id del misor
      // cuando el mensaje es propio bucar el id del receptro
      let idABuscar =    ( getUruaria().id  !=   msg.Emisor.id   ) ? msg.Emisor.id  : msg.Receptor; 

      //encontrar la posicion del ensaje
    let elemModificar =   conversaciones.find(function(elem, index) {
           if(   elem.Usuaria.id == idABuscar   ){
              posItem = index;
              return elem ;
           }
      });

 
      if( posItem !=  null ){ // si se encuentra  conversacion con el 

       
        elemModificar.mensages.push( //agregarlo a la conversacion 
          { 
            "emisor": msg.Emisor.id,
            "receptor":msg.Receptor,
            "text" :  msg.Mensage,
            "createdAt": msg.createdAt
        });



        if( ( getUruaria().id  !=   msg.Emisor.id   ) ){ //solo aumnetar  mensajes no leidos cuando no es el suyo
          elemModificar.mensajesNoleidos++;
        }
        copyConversaciones[ posItem ]  = elemModificar;

         //pasar el elemento hasta arriba del array
       copyConversaciones.splice(0, 0, copyConversaciones.splice(posItem, 1)[0]);

      }else{ //crear elemento 

          copyConversaciones.unshift({ //agregarlo hasta arriba de los elementos
            Usuaria: msg.Emisor ,//info del otro contacto
            mensajesNoleidos : 1,
            mensages: [{ 
                          "emisor": msg.Emisor.id,
                          "receptor":msg.Receptor,
                          "text" :  msg.Mensage,
                          "createdAt": msg.createdAt
                    }]
          });


      }

      console.log("copyConversaciones",copyConversaciones);
      return  copyConversaciones;

    };



    //Escuchar mensajes 
  useEffect(() => {


    if (useAuth()) {

      let chanelUser = `Mensajes>${getUruaria().id}`; //canal de la usuaria
      console.log("EscuchandoMensajes ", chanelUser);
      socket.on(chanelUser, msg => {


        //recibimos la copia  de las conversaciones
      let copyConversaciones  =  agregarMensaje(msg);        
      setConversaciones([...copyConversaciones]);  //agregar el mensaje  a su usuario y no directamente, 
     
      // if (childCompRef.current) { //si estamos en la vista Emergencias actualizar
      //   childCompRef.current.setemErgencias([...conversaciones, msg])
      // }

      })

      return () => { socket.off() }
    }
  
  }, [socket, conversaciones])





  useEffect(() => {


    if (useAuth()) {


      EmergenciasPendientesEvent();//consultar emergencias
      
      
      let chanelUser = `Emergencias>${getUruaria().id}`
      console.log("Escuchando ", chanelUser)
      socket.on(chanelUser, msg => {
        setEmergencias([...emergencias, msg])
        if (childCompRef.current) { //si estamos en la vista Emergencias actualizar
          childCompRef.current.setemErgencias([...emergencias, msg])
        }

      })


      socket.on("EstatusEmerg", msg => {
        //modificar las emergencias
        let emergActualizadas = [ ...emergencias]

        console.log("EstatusEmerg",msg,emergActualizadas)

        emergActualizadas.forEach( (elem,index) =>{
            console.log(elem,index)
            if( elem.Emergencia.id == msg.id ){
              emergActualizadas[index].Emergencia.Estatus = msg.Estatus

              if(msg.Voluntaria ){
                emergActualizadas[index].Emergencia.Voluntaria_Atendio = msg.Voluntaria

              }
            }
        }  )
        
        
        
      setEmergencias(emergActualizadas)
        
        if (childCompRef.current) {
          childCompRef.current.setemErgencias(emergActualizadas)
        }

      })


      return () => { socket.off() }
    }
  }, [socket, emergencias])


  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <CompMainMenu />
          
          
          <div  className="position-relative">
            <img src={logo} className="App-logo" alt="logo"></img> 
            
            <div  class="position-absolute  top-50 start-50 translate-middle  ">
               <img src="/anaBellaMex.png" width="82%" ></img> 
            </div>
          </div>
         
          




          <Routes>
            <Route path="/" element={<HomeComponent />} />

           

            <Route path="/login" element={<ComplogUsuarios EmergenciasPendientes={EmergenciasPendientesEvent} />} />
            <Route path="/Registrarse" element={<CompRegistrarUsuario />} />
            <Route path="/forgot-password" element={<CompForgotpass />} />
            <Route path="/change-password/:token" element={<CompChangePasswords />} />
            <Route path="/politicas" element={<CompPoliticas />} />

            <Route path="/juego" element={<CompFakeLogin />} />

            



            <Route element={<ProtectedRoutes />}>

              {/* usuarios logeados */}
              <Route path="/Chat" element={<CompChat />} />

              <Route path="/MultiChat" element={<CompMultiChat   conversaciones={conversaciones}   />} />
            
           

              <Route path="/MisTickets/" element={<CompMisTickets />} />
              <Route path="/Tickets/create" element={<CompCreateTickets />} />
              <Route element={<ProtectedRoutesVoluntaria />}>
                <Route path="/Emergencias" element={<CompEmergencias ref={childCompRef} emergencias={emergencias} emitirMensaje={emitirMensaje}  getEmergencias={getEmergencias} />} />

                <Route path="/MisAsignaciones/" element={<CompMisAsgCasos />} />
                <Route path="/Usuarios/:id" element={<CompDetalleUsuario />} />
                <Route path="/Tickets/:id" element={<CompDetalleTicket />} />

                <Route element={<ProtectedRoutesCoordinador />}>

                

                <Route path="/Administracion/" element={<CompIndexAdmon />} />

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
    </div >
  );
}

export default App;
