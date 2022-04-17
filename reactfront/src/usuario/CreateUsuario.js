import React from 'react';
import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const URI="http://localhost:8080/Usuarios/";


const CompCreateUsuarios=()=>{
    const  [msgEstado, setMegEstado] = useState('');
    const  [msgError, setMegError] = useState('');
    const limpiarMsg=  ()=>{
        setMegEstado("")
        setMegError("")
    }


    const [Nombre, setNombre] = useState('')
    const [NickName, setNickName] = useState('')
    const [Pass, setPass] = useState('')
   
    
    const [ApellidoPaterno, setApellidoPaterno] = useState('')
    const [ApellidoMaterno, setApellidoMaterno] = useState('')
    const [FechaNacimiento, setFechaNacimiento] = useState('')
    const [Ciudad, setCiudad] = useState('')

    const [PerfilFB, setPerfilFB] = useState('')
    const [Email, setEmail] = useState('')
    const [Telefono, setTelefono] = useState('')

    const navigate=useNavigate();

   


    const store = async (e)=>{
        e.preventDefault()
        const params={ 
            Nombre:Nombre,
            NickName:NickName,
            Pass:Pass,
            
            ApellidoPaterno:ApellidoPaterno,
            ApellidoMaterno:ApellidoMaterno,
            FechaNacimiento:FechaNacimiento,
            Ciudad:Ciudad,

            PerfilFB:PerfilFB,
            Email:Email,
            Telefono:Telefono
        } 
        
        console.log(params)
        
        
        axios.post(URI,params).then((response) => {
            console.log("mensaje ",response.data);
            limpiarMsg()
            setMegEstado(response.data.message)
            
            setTimeout(function(){navigate("/Usuarios/")}, 2000);


        }).catch(error => {
            console.error(error.response.data)
            limpiarMsg()
            setMegError(error.response.data.message)
        });
      
    }


    return (
        <div >
        <h3>Registrando Usuaria</h3>

        <div className="alert alert-success" role="alert">{msgEstado}</div>
        <div className="alert alert-danger" role="alert">{msgError}</div>

        <form onSubmit={store}>

            <div className="row">
                <div className="form-group col-md-6">

                    <label className="form-label required" >NickName</label>
                    <input value={NickName}
                    onChange={  (e)=> setNickName(e.target.value)  }
                    type="text"
                    className="form-control"
                    required    
                    />
            
                        

                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label required" >Pass</label>
                        <input value={Pass}
                        onChange={  (e)=> setPass(e.target.value)  }
                        type="password"
                        className="form-control"
                        required    
                        />
                   

                </div>
            </div>


            <div className="mb-3">
                   <label className="form-label required" >Nombre</label>
                    <input 
                    value={Nombre}
                    onChange={  (e)=> setNombre(e.target.value)  }
                    type="text"
                    className="form-control"
                    required    
                    />
            </div>



            <div className="row">
                <div className="form-group col-md-6">
                    
                    <label className="form-label" >Apellido Paterno</label>
                    <input 
                    value={ApellidoPaterno}
                    onChange={  (e)=> setApellidoPaterno(e.target.value)  }
                    type="text"
                    className="form-control"    
                    />


                </div>
                <div className="form-group col-md-6">
                    
                    <label className="form-label" >Apellido Materno</label>
                    <input 
                    value={ApellidoMaterno}
                    onChange={  (e)=> setApellidoMaterno(e.target.value)  }
                    type="text"
                    className="form-control"    
                    />



                </div>
            </div>

           
           

        <div className="row align-items-end">
                <div className="form-group col-md-6">
                    
                        <label className="form-label" >Email</label>
                        <input 
                        value={Email}
                        onChange={  (e)=> setEmail(e.target.value)  }
                        type="email"
                        placeholder="Ej. ejemplo@correo.com"
                        className="form-control"    
                        />


                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label" >Celular</label>
                        <input value={Telefono}
                        onChange={  (e)=> setTelefono(e.target.value)  }
                        type="number"
                        placeholder="Ej: 55 1234 56789"
                        className="form-control"    
                        />


                </div>
        </div>

        <div className="mb-3">

           <label className="form-label" >Perfil de Fb</label>
           <input value={PerfilFB}
           onChange={  (e)=> setPerfilFB(e.target.value)  }
           type="text"
           className="form-control"
           placeholder="Ej: fb.com/alguien"
               
           />
        </div>




        <div className="row align-items-end">
                <div className="form-group col-md-6">
                    
                        <label className="form-label" >Fecha de Nacimiento</label>
                        <input 
                        value={FechaNacimiento}
                        onChange={  (e)=> setFechaNacimiento(e.target.value)  }
                        type="date"
                        className="form-control"    
                        />


                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label" >Ciudad</label>
                        <input value={Ciudad}
                        onChange={  (e)=> setCiudad(e.target.value)  }
                        type="text"
                        className="form-control"    
                        />


                </div>
        </div>


           

            <button type="submit" className="btn btn-primary" > <i className="fa-solid fa-floppy-disk"></i> Registrar Usuaria </button>
        </form>


    </div>
    )
}


export default CompCreateUsuarios