import axios from 'axios'
import {useState,useEffect} from "react"
import {Link} from 'react-router-dom'


const URI="http://localhost:8080/Tickets/";

const CompShowTickets=  ()=>{ 
    const [tickets,setTickets] = useState([])
    useEffect( ()=>{
             getTicket()   
        
    },[])

    //procedimiento para mostrar todos los tickets
    const getTicket= async () =>{
         const res =  await  axios.get(URI)

         setTickets(res.data)
    }

    //procedimiento para eliminar un tickets
    const deleteTickets= async (id) =>{
           await axios.delete(`${URI}${id} `).then((response) => {
            console.log(response.data);
            getTicket()
            });
            
    }

    return(
        <div className="container">
        <div className="row">
            <div className="col">
            <h1><i className="fa-solid fa-ticket"></i> Tickets</h1>
            <Link to={'create'} className='btn btn-primary m-2'><i className="fas fa-plus"></i> Registrar Ticket</Link>


            <table className="table table-dark">
                <thead className="table-primary">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Victima</th>
                    <th scope="col">Semaforo</th>
                    <th scope="col">Descripcion</th>
                     <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    { tickets.map( (Ticket)=>(
                        <tr key={ Ticket.id} >
                                <td> {Ticket.id}  </td>
                                <td> {Ticket.Usuaria}  </td>
                                <td> {Ticket.Semaforo_id}  </td>
                                <td> {Ticket.Descripcion}  </td>
    
                                <td>  
                                    <Link to={`edit/${Ticket.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                    <button  onClick={ ()=>deleteTickets( Ticket.id)   } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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


export default CompShowTickets