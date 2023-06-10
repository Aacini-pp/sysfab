import React, { Component } from 'react';



import ReactTimeAgo from 'react-time-ago'






//import "./conversation.css";

export default function Conversation( { conversation, currentUser }  ) {
  
  

    const consegirUltimMensaje= () =>{
        let  ultimoMsg =conversation.mensages.length -1;
        return     conversation.mensages[ultimoMsg];   
    };



    const consegirUltimMensajeAbreviado= () =>{
      
        return     consegirUltimMensaje().text ;  //" TODO: abreviar mensaje
    };



  return (
    <li className="p-2 border-bottom">
                                    <a
                                        href="#!"
                                        className="d-flex justify-content-between"
                                    >
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                                alt="avatar"
                                                className="d-flex align-self-center me-3"
                                                width="60"
                                                />
                                                <span className="badge bg-success badge-dot"></span>
                                            </div>
                                            <div className="pt-1">
                                                <p className="fw-bold mb-0">    { currentUser.Nombre } </p>
                                                <p className="small text-muted">
                                                    {consegirUltimMensajeAbreviado()}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-1">
                                            <p className="small text-muted mb-1">  <em>  <ReactTimeAgo date={ consegirUltimMensaje().createdAt} locale="es-MX"/>   </em>     </p>
                                            { conversation.mensajesNoleidos ? ( 
                                            <span className="badge bg-danger rounded-pill float-end">
                                                { conversation.mensajesNoleidos}
                                            </span>): "" }
                                        
                                        </div>
                                    </a>
                                    </li>
  );
}

