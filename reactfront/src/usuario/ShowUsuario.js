import React from 'react';
import axios from 'axios'
import {useState,useEffect} from "react"
import {Link} from 'react-router-dom'


const URI="http://localhost:8080/Usuarios/";

const CompShowUsuarios=  ()=>{ 

    const  [msgEstado, setMegEstado] = useState('');
    const  [msgError, setMegError] = useState('');
    const limpiarMsg=  ()=>{
        setMegEstado("")
        setMegError("")
    }



    const [usuarios,setUsuario] = useState([])
    useEffect( ()=>{
             getUsuario()   
        
    },[])

    //procedimiento para mostrar todos los usuario
    const getUsuario= async () =>{
         const res =  await  axios.get(URI).then((response) => {
            console.log(response.data);
            setUsuario(response.data)
        }).catch(error => {
            console.error(error.response.data)
            limpiarMsg()
            setMegError(error.response.data.message)
        });
       
        
    }

    //procedimiento para eliminar un usuario
    const deleteUsuario= async (id) =>{
           await axios.delete(`${URI}${id} `).then((response) => {
                console.log(response.data);
                limpiarMsg()
                setMegEstado(response.data.message)
                getUsuario()
            }).catch(error => {
                console.error(error.response.data)
                limpiarMsg()
                setMegError(error.response.data.message)
            });
            
    }

    return(
        <div className="container">
        <div className="row">
            <div className="col">
            <h1>  <i className="fa-solid fa-child-dress"></i> USUARIAS</h1>
            
            
            <div className="alert alert-success" role="alert">{msgEstado}</div>
            <div className="alert alert-danger" role="alert">{msgError}</div>

            <Link to={'create'} className='btn btn-primary m-2'><i className="fas fa-plus"></i> Registrar Usuaria</Link>


            <table className="table table-dark">
                <thead className="table-primary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido Paterno</th>
                    <th scope="col">NickName</th>
                     <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    { usuarios.map( (usuario)=>(
                        <tr key={ usuario.id} >
                                <td> {usuario.id}  </td>
                                <td> {usuario.Nombre}  </td>
                                <td> {usuario.ApellidoPaterno}  </td>
                                <td> {usuario.NickName}  </td>
    
                                <td>  
                                    <Link to={`edit/${usuario.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                    <button  onClick={ ()=>deleteUsuario( usuario.id)   } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                </td>
                        </tr>   
    
                    ))}
    
     
                   
                    
                </tbody>
            </table>
            </div>   
        </div>
    </div>
    )

}


export default CompShowUsuarios