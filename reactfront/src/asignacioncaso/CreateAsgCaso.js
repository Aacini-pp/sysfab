import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const URI="http://localhost:8080/AsignacionCaso/";


const CompCreateAsgCaso=()=>{
    const [Ticket, setTicket] = useState('')
    const [Voluntaria, setVoluntaria] = useState('')
 

   // Usuaria =1
const navigate=useNavigate();


    const store = async (e)=>{
        e.preventDefault()
        console.log({ 
            Ticket:Ticket,
            Victima:Voluntaria
        } );
        
        
        axios.post(URI,{ 
            Ticket:Ticket,
            Victima:Voluntaria,
           
        } ).then((response) => {
            console.log(response.data);
            navigate("/AsignacionCaso/")
        });
      
    }


    return (
        <div >
        <h3>Registrando Ticket</h3>
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

          

            <button type="submit" className="btn btn-primary" > <i class="fa-solid fa-floppy-disk"></i> Registrar Ticket </button>
        </form>


    </div>
    )
}


export default CompCreateAsgCaso