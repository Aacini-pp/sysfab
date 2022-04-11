import axios from 'axios'
import {useState,useEffect} from "react"

import { useNavigate,useParams } from 'react-router-dom'

const URI="http://localhost:8080/AsignacionCaso/";

const CompEditAsgCaso=()=>{
    const [Ticket, setTicket] = useState('')
    const [Voluntaria, setVoluntaria] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()


    const update= async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{ 
            Ticket:Ticket,
            Victima:Voluntaria,
           
        }  ).then((response) => {
            console.log(response.data);
            navigate("/AsignacionCaso/")
        });
       

    }


    useEffect( ()=>{
        getAsgCasbyId()   
   
    },[])

    const  getAsgCasbyId = async (e) =>{
        const res = await axios.get(URI+id).then(function (response) {
            setTicket(response.data[0].Ticket)
            setVoluntaria(response.data[0].Victima)
                       

          })
        

    }


    return (
        <div >
        <h3>Editando Asignación de Casos</h3>
        <form onSubmit={update}>

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
           

            <button type="submit" className="btn btn-primary" > <i className="fa-solid fa-floppy-disk"></i> Guardar cambios </button>
        </form>


    </div>

    )

}

export default CompEditAsgCaso;