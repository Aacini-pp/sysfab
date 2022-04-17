import React from 'react';
import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const URI="http://localhost:8080/AsignacionCaso/";


const CompCreateAsgCaso=()=>{
    const  [msgEstado, setMegEstado] = useState('');
    const  [msgError, setMegError] = useState('');
    const limpiarMsg=  ()=>{
        setMegEstado("")
        setMegError("")
    }

    const [Ticket, setTicket] = useState('')
    const [Voluntaria, setVoluntaria] = useState('')
 

   // Usuaria =1
const navigate=useNavigate();


    const store = async (e)=>{
        e.preventDefault()
        const params={ 
            Ticket:Ticket,
            Victima:Voluntaria,
           
        }
        
        console.log(params)
        
        
        axios.post(URI,params ).then((response) => {
            console.log(response.data);
          
            limpiarMsg()
            setMegEstado(response.data.message)
            setTimeout(function(){navigate("/AsignacionCaso/")}, 2000);
        }).catch(error => {
            console.error(error.response.data)
            limpiarMsg()
            setMegError(error.response.data.message)
        });
      
    }


    return (
        <div >
        <h3>Registrando Ticket</h3>
        
        <div className="row">
                <div className="alert alert-success" role="alert">{msgEstado}</div>
                <div className="alert alert-danger" role="alert">{msgError}</div>
        </div> 

        <form onSubmit={store}>

            <div className="row">
                <div className="form-group col-md-6">

                    <label className="form-label required" >Ticket</label>
                    <input value={Ticket}
                    onChange={  (e)=> setTicket(e.target.value)  }
                    type="number"
                    className="form-control"
                    required    
                    />
            
                        

                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label required" >Voluntaria</label>
                        <input value={Voluntaria}
                        onChange={  (e)=> setVoluntaria(e.target.value)  }
                        type="number"
                        className="form-control"
                        required    
                        />
                   

                </div>
            </div>

          

            <button type="submit" className="btn btn-primary" > <i className="fa-solid fa-floppy-disk"></i> Registrar Ticket </button>
        </form>


    </div>
    )
}


export default CompCreateAsgCaso