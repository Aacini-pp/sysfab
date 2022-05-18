import React from 'react';
import socket from "./Socket"
import axios from 'axios'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useAuth, getRolUruaria, getUruaria, isVoluntaria, isCoordinadora } from './../app/funciones'

const URI = "http://localhost:8080/AsignacionCaso/";

const CompEmergencias = (props) => {
    const [msgEstado, setMegEstado] = useState('');
    const [msgError, setMegError] = useState('');
    const limpiarMsg = () => {
        setMegEstado("")
        setMegError("")
    }

    const [emergencias, setEmergencias] = useState(props.emergencias);
    console.log("Emergencias recibidas ", emergencias)

    //procedimiento para mostrar todos los AsgCasos

    /*
        useEffect(() => {
            if (useAuth()) {
                let chanelUser = `Emergencias>` + getUruaria().id
                console.log("Escuchando ", chanelUser)
                socket.on(chanelUser, msg => {
                    console.log("Emergencia", msg)
                    setEmergencias([...emergencias, msg])
                })
                return () => { socket.off() }
            }
    
        }, [emergencias])
    
    */
    /*
       */
    /*
//actualizar  emergencias
setTimeout(function () {
    console.log("Actualizando emergencias ", emergencias)

    let emerg = props.getEmergencias()
    setEmergencias(emerg)
    console.log("Emergencias recibidas ahora  ", emergencias)


}, 500);*/

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1><i className="fa-solid fa-land-mine-on"></i>Emergencias</h1>

                    <div className="row">
                        <div className="alert alert-success" role="alert">{msgEstado}</div>
                        <div className="alert alert-danger" role="alert">{msgError}</div>
                    </div>



                    {/*  <table className="table table-dark">
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Voluntaria</th>
                                <th scope="col">Ticket</th>

                                <th scope="col">Victima</th>

                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {AsgCasos.map((AsgCaso) => (
                                <tr key={AsgCaso.id} >
                                    <td> {AsgCaso.id}  </td>
                                    <td> <Link to={`/Usuarios/${AsgCaso.deVoluntaria.id}`} >   {AsgCaso.deVoluntaria.NickName}   </Link> </td>
                                    <td > <Link to={`/Tickets/${AsgCaso.deTicket.id}`} >{AsgCaso.Ticket}</Link>:  {AsgCaso.deTicket.Descripcion}    </td>
                                    <td> <Link to={`/Usuarios/${AsgCaso.deTicket.deUsuaria.id}`} > {AsgCaso.deTicket.deUsuaria.NickName}  </Link>  </td>


                                    <td>
                                        <div className="btn-group" role="group" >
                                            <Link to={`edit/${AsgCaso.id}`} title="Editar Asignacion" className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                            <button title="Eliminar Asignacion" onClick={() => deleteAsgCasos(AsgCaso.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                        </div>
                                    </td>
                                </tr>

                            ))}




                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    )

}


export default CompEmergencias