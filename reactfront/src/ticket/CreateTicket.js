import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const URI="http://localhost:8080/Tickets/";


const CompCreateTickets=()=>{
    const [Usuaria, setUsuaria] = useState('')
    const [Semaforo, setSemaforo] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    

   // Usuaria =1
const navigate=useNavigate();


    const store = async (e)=>{
        e.preventDefault()
        console.log({ 
            Usuaria:Usuaria,
            Semaforo_id:Semaforo,
            Descripcion:Descripcion,
        } );
        
        
        axios.post(URI,{ 
            Usuaria:Usuaria,
            Semaforo_id:Semaforo,
            Descripcion:Descripcion,
        } ).then((response) => {
            console.log(response.data);
            navigate("/Tickets/")
        });
      
    }


    return (
        <div >
        <h3>Registrando Ticket</h3>
        <form onSubmit={store}>

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




           

            <button type="submit" className="btn btn-primary" > <i className="fa-solid fa-floppy-disk"></i> Registrar Ticket </button>
        </form>


    </div>
    )
}


export default CompCreateTickets