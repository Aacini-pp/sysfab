import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const URI="http://localhost:8080/Usuarios/";


const CompCreateUsuarios=()=>{
    const [Nombre, setNombre] = useState('')
    const [NickName, setNickName] = useState('')
    const [Pass, setPass] = useState('')
    const [PrimerMedioContacto, setPrimerMedioContacto] = useState('')
    
    const [ApellidoPaterno, setApellidoPaterno] = useState('')
    const [ApellidoMaterno, setApellidoMaterno] = useState('')
    const [FechaNacimiento, setFechaNacimiento] = useState('')
    const [Ciudad, setCiudad] = useState('')

const navigate=useNavigate();


    const store = async (e)=>{
        e.preventDefault()
        console.log({ 
            Nombre:Nombre,
            NickName:NickName,
            Pass:Pass,
            PrimerMedioContacto:PrimerMedioContacto,
            ApellidoPaterno:ApellidoPaterno,
            ApellidoMaterno:ApellidoMaterno,
            FechaNacimiento:FechaNacimiento,
            Ciudad:Ciudad

        })
        
        
        axios.post(URI,{ 
            Nombre:Nombre,
            NickName:NickName,
            Pass:Pass,
            PrimerMedioContacto:PrimerMedioContacto,
            ApellidoPaterno:ApellidoPaterno,
            ApellidoMaterno:ApellidoMaterno,
            FechaNacimiento:FechaNacimiento,
            Ciudad:Ciudad

        } ).then((response) => {
            console.log(response.data);
            navigate("/Usuarios/")
        });
      
    }


    return (
        <div >
        <h3>Registrando Usuaria</h3>
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

           

            


        <div className="mb-3">

           <label className="form-label required" >Medio de contacto</label>
           <input value={PrimerMedioContacto}
           onChange={  (e)=> setPrimerMedioContacto(e.target.value)  }
           type="text"
           className="form-control"
           placeholder=" ejemplo@correo.com"
           required    
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