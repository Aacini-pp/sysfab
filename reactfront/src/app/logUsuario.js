import axios from 'axios'

import  {useState} from 'react'
//import {useNative} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const URI="http://localhost:8080/Usuarios/";


const ComplogUsuarios=()=>{
  
    const [NickName, setNickName] = useState('')
    const [Pass, setPass] = useState('')
 
  
const navigate=useNavigate();


    const login = async (e)=>{
        e.preventDefault()


        console.log({ 
         
            NickName:NickName,
            Pass:Pass,
            

        })
        
        navigate("/Usuarios/")
        /*
        axios.post(URI,{ 
          
            NickName:NickName,
            Pass:Pass,
            

        } ).then((response) => {
            console.log(response.data);
            navigate("/Usuarios/")
        });
        */  
    }


    return (
        <div >
        <h3>LoginUsuario</h3>
        <form onSubmit={login}>

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



           

            <button type="submit" className="btn btn-primary" > <i className="fa-solid fa-right-to-bracket"></i> Loggin </button>
        </form>


    </div>
    )
}


export default ComplogUsuarios