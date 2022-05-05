import React from 'react';
import axios from 'axios'

import  {useState,useEffect} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const URI="http://localhost:8080/Usuarios/";

const URIEstados ="http://localhost:8080/Cat/Estados/";
const URIRoles ="http://localhost:8080/Cat/Roles/";
const URIEstatus ="http://localhost:8080/Cat/Estatus/";

const CompDetalleUsuario=()=>{
    const  [msgEstado, setMegEstado] = useState('');
    const  [msgError, setMegError] = useState('');
    const limpiarMsg=  ()=>{
        setMegEstado("")
        setMegError("")
    }

    const [estados,setEstados] = useState([])
    const [roles,setRoles] = useState([])
    const [estatusArry,setEstatusArry] = useState([])



    
    useEffect( ()=>{
        getEstados()
        getRoles()   
        getEstatus()
        getUsuariobyId()
    },[])

    //procedimiento para mostrar todos los Usuarios
    const getEstados= async () =>{
       
        const res =  await  axios.get(URIEstados).then((response) => {
           console.log(response.data);
           setEstados(response.data)
       }).catch(error => {
           console.error(error.response.data)
           limpiarMsg()
           setMegError(error.response.data.message)
       });

       
   }

   const getRoles= async () =>{
       
        const res =  await  axios.get(URIRoles).then((response) => {
           console.log(response.data);
           setRoles(response.data)
       }).catch(error => {
           console.error(error.response.data)
           limpiarMsg()
           setMegError(error.response.data.message)
       });

       
   }

   const getEstatus= async () =>{
       
        const res =  await  axios.get(URIEstatus).then((response) => {
           console.log(response.data);
           setEstatusArry(response.data)
       }).catch(error => {
           console.error(error.response.data)
           limpiarMsg()
           setMegError(error.response.data.message)
       });

       
   }

   const  getUsuariobyId = async (e) =>{
        const res = await axios.get(URI+id).then(function (response) {
            setNombre(response.data[0].Nombre)
            setNickName(response.data[0].NickName)
            setPass(response.data[0].Pass)
           

            setApellidoPaterno(response.data[0].ApellidoPaterno)
            setApellidoMaterno(response.data[0].ApellidoMaterno)
            setFechaNacimiento(response.data[0].FechaNacimiento)
            setEstado(response.data[0].EntidadFederativa)
            setCiudad(response.data[0].Ciudad)


            setPerfilFB(response.data[0].PerfilFB)
            setEmail(response.data[0].Email)
            setTelefono(response.data[0].Telefono)

            setRol(response.data[0].Rol)
            setEstatus(response.data[0].Estatus)

            let data  = {...response.data[0]}
           
            data.createdAt = data.createdAt.slice(0,10)
            data.updatedAt = data.updatedAt.slice(0,10)
            setUsuariaDataCompl(data)


          }).catch(error => {
                console.error(error)
                limpiarMsg()
                setMegError(error.response.data.message)
            });
        

    }




    const [UsuariaDataCompl, setUsuariaDataCompl] = useState({})

    const [Nombre, setNombre] = useState('')
    const [NickName, setNickName] = useState('')
    const [Pass, setPass] = useState('')
   
    
    const [ApellidoPaterno, setApellidoPaterno] = useState(undefined)
    const [ApellidoMaterno, setApellidoMaterno] = useState(undefined)
    const [FechaNacimiento, setFechaNacimiento] = useState('')
    const [Estado, setEstado] = useState(34)
    const [Ciudad, setCiudad] = useState('')

    const [PerfilFB, setPerfilFB] = useState(undefined)
    const [Email, setEmail] = useState(undefined)
    const [Telefono, setTelefono] = useState(undefined)

    const [Rol, setRol] = useState(undefined)
    const [Estatus, setEstatus] = useState(undefined)

    const navigate=useNavigate();
    const {id} = useParams()

    const update = async (e)=>{
        e.preventDefault()
        const params={ 
            Nombre:Nombre,
            NickName:NickName,
            Pass:Pass,
            
            ApellidoPaterno: (ApellidoPaterno == "")? null :ApellidoPaterno,
            ApellidoMaterno: (ApellidoMaterno == "")? null :ApellidoMaterno,
            FechaNacimiento:(FechaNacimiento == "")? null : FechaNacimiento,
            EntidadFederativa:Estado,
            Ciudad: (Ciudad == "")? null : Ciudad,

            PerfilFB: (PerfilFB == "")? null : PerfilFB,
            Email: (Email == "")? null : Email ,
            Telefono:(Telefono == "")? null : Telefono, 

            Rol: (Rol == "")? null : Rol,
            Estatus: (Estatus == "")? null : Estatus
        } 
        
        console.log(params)
        
        
        axios.put(URI,params).then((response) => {
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
         <h3>Ver Usuaria</h3>

        <div className="alert alert-success" role="alert">{msgEstado}</div>
        <div className="alert alert-danger" role="alert">{msgError}</div>

        <form onSubmit={update}>

            <div className="row">
                <div className="form-group col-md-6">

                    <label className="form-label required" >NickName</label>
                    <input value={NickName}
                    onChange={  (e)=> setNickName(e.target.value)  }
                    type="text"
                    className="form-control"
                    disabled    
                    />
            
                        

                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label required" >Pass</label>
                        <input value={Pass}
                        onChange={  (e)=> setPass(e.target.value)  }
                        type="password"
                        className="form-control"
                        disabled    
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
                    disabled    
                    />
            </div>



            <div className="row align-items-end">
                <div className="form-group col-md-6">
                    
                    <label className="form-label" >Apellido Paterno</label>
                    <input 
                    value={ApellidoPaterno}
                    onChange={  (e)=> setApellidoPaterno(e.target.value)  }
                    type="text"
                    className="form-control"
                    disabled    
                    />


                </div>
                <div className="form-group col-md-6">
                    
                    <label className="form-label" >Apellido Materno</label>
                    <input 
                    value={ApellidoMaterno}
                    onChange={  (e)=> setApellidoMaterno(e.target.value)  }
                    type="text"
                    className="form-control"
                    disabled    
                    />



                </div>
            </div>



            <div className="row align-items-end">
                <div className="form-group col-md-6">
                    
                    <label className="form-label" >Rol</label>
                    <select name="Estado" className="form-select"  onChange={  (e)=> {setRol(e.target.value)  }  } disabled>  
                            <option value=""  > Seleccione un Rol.. </option>  
                            { roles.map( (rol)=>(
                                <option key={ rol.id} value={rol.id} selected={ rol.id==Rol }  > {rol.Nombre}  </option>
                             ))}

                    </select>


                </div>
                <div className="form-group col-md-6">
                    
                    <label className="form-label" >Estatus</label>
                    <select name="Estado" className="form-select"  onChange={  (e)=> {setEstatus(e.target.value)  }  } disabled>  
                            <option value=""  > Seleccione un  estauts.. </option>  
                            { estatusArry.map( (estatusItem)=>(
                                <option key={ estatusItem.id} value={estatusItem.id} selected={ estatusItem.id==Estatus }  > {estatusItem.Nombre}  </option>
                             ))}

                    </select>



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
                        disabled 
                        />


                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label" >Celular</label>
                        <input value={Telefono}
                        onChange={  (e)=> setTelefono(e.target.value)  }
                        type="number"
                        placeholder="Ej: 55 1234 56789"
                        className="form-control" 
                        disabled   
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
           disabled    
           />
        </div>




        <div className="row align-items-end">
                <div className="form-group col-md-6">
                    
                        <label className="form-label"    >Estado</label>
                        <select name="Estado" className="form-select"  onChange={  (e)=> {setEstado(e.target.value)  }  } disabled>  
                            <option value="34"  > Seleccione un estado.. </option>  
                            { estados.map( (edo)=>(
                                <option key={ edo.id} value={edo.id} selected={ edo.id==Estado  } > {edo.Estado}  </option>
                             ))}

                        </select>  


                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label" >Ciudad</label>
                        <input value={Ciudad}
                        onChange={  (e)=> setCiudad(e.target.value)  }
                        type="text"
                        className="form-control"  
                        disabled  
                        />


                </div>
        </div>

        <div className="mb-3">

                         <label className="form-label" >Fecha de Nacimiento</label>
                        <input 
                        value={FechaNacimiento}
                        onChange={  (e)=> setFechaNacimiento(e.target.value)  }
                        type="date"
                        className="form-control"    
                        disabled
                        />
        </div>
        <div className="row align-items-end">
                <div className="form-group col-md-6">
                        <label className="form-label" >Fecha de creación</label>        
                        <a className='btn  btn-secondary form-control'>{UsuariaDataCompl.createdAt}</a>
                        
                </div>
                <div className="form-group col-md-6">
                        <label className="form-label" >Fecha de modificación</label>        
                        <a className='btn  btn-secondary form-control'>{UsuariaDataCompl.updatedAt}</a>        
                        
                </div>
        </div>
           

            <Link to={`/usuarios/edit/${id}`} className='btn btn-primary m-2'>  <i className="fa-solid fa-floppy-disk"></i> Editar Usuaria   </Link>
            <Link to={`/usuarios/`} className='btn btn-danger m-2'> <i className="fa-solid fa-ban"></i>  Cancelar  </Link>                        
            
        </form>


    </div>
    )
}


export default CompDetalleUsuario