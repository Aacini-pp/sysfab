import axios from 'axios'
import {useState,useEffect} from "react"
import {Link} from 'react-router-dom'


const URI="http://localhost:8080/Usuarios/";

const CompShowUsuarios=  ()=>{ 
    const [usuarios,setUsuario] = useState([])
    useEffect( ()=>{
             getUsuario()   
        
    },[])

    //procedimiento para mostrar todos los usuario
    const getUsuario= async () =>{
         const res =  await  axios.get(URI)

         setUsuario(res.data)
    }

    //procedimiento para eliminar un usuario
    const deleteUsuario= async (id) =>{
           await axios.delete(`${URI}${id} `)
            getUsuario()
    }

    return(
        <div className="container">
        <div className="row">
            <div className="col">
            <h1>USUARIAS</h1>
            <Link to={'/create'} className='btn btn-primary m-2'><i className="fas fa-plus"></i></Link>


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
                                    <Link to={`/edit/${usuario.id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
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