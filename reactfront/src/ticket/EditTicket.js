import React from 'react';
import axios from 'axios'
import {useState,useEffect} from "react"

import { useNavigate,useParams } from 'react-router-dom'

const URI="http://localhost:8080/Tickets/";

const CompEditTickets=()=>{
    const  [msgEstado, setMegEstado] = useState('');
    const  [msgError, setMegError] = useState('');
    const limpiarMsg=  ()=>{
        setMegEstado("")
        setMegError("")
    }

    const [Usuaria, setUsuaria] = useState('')
    const [Semaforo, setSemaforo] = useState('')
    const [Descripcion, setDescripcion] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()


    const update= async (e) =>{
        e.preventDefault()


        let params = { 
            Usuaria:Usuaria,
            Semaforo_id:Semaforo,
            Descripcion:Descripcion,
        }
        console.log(params)


        await axios.put(URI+id,params ).then((response) => {
            console.log(response.data);
            limpiarMsg()
            setMegEstado(response.data.message)
            setTimeout(function(){navigate("/Tickets/")}, 2000);
            
        }).catch(error => {
            console.error(error.response.data)
            limpiarMsg()
            setMegError(error.response.data.message)
        });
       

    }


    useEffect( ()=>{
        getTicketsbyId()   
   
    },[])

    const  getTicketsbyId = async (e) =>{
        const res = await axios.get(URI+id).then(function (response) {
            setUsuaria(response.data[0].Usuaria)
            setSemaforo(response.data[0].Semaforo_id)
            setDescripcion(response.data[0].Descripcion)
            

          }).catch(error => {
            console.error(error)
            limpiarMsg()
            setMegError(error.response.data.message)
        });
        

    }


    return (
        <div >
        <h3>Editando Ticket</h3>

        <div className="row">
                <div className="alert alert-success" role="alert">{msgEstado}</div>
                <div className="alert alert-danger" role="alert">{msgError}</div>
        </div>

        <form onSubmit={update}>

            <div className="row">
                <div className="form-group col-md-6">

                    <label className="form-label required" >Victima</label>
                    <input value={Usuaria}
                    onChange={  (e)=> setUsuaria(e.target.value)  }
                    type="number"
                    className="form-control"
                    required    
                    />
            
                        

                </div>
                <div className="form-group col-md-6">
                    
                        <label className="form-label required" >Semaforo</label>
                        <input value={Semaforo}
                        onChange={  (e)=> setSemaforo(e.target.value)  }
                        type="number"
                        className="form-control"
                        required    
                        />
                   

                </div>
            </div>


            <div className="mb-3">
                   <label className="form-label required" >Descripcion</label>
                    <textarea 
                    value={Descripcion}
                    onChange={  (e)=> setDescripcion(e.target.value)  }
                    type="textarea"
                    className="form-control"
                    rows="8"
                    placeholder="Descriva la situacion por la que requiera ayuda"
                    required    
                    />
            </div>




           

            <button type="submit" className="btn btn-primary" > <i className="fa-solid fa-floppy-disk"></i> Guardar cambios </button>
        </form>


    </div>

    )

}

export default CompEditTickets;