
export  const useAuth = () => {
    let  isAuth = !(localStorage.getItem("Usuaria") === null);
    console.log("Estado del Auth ", isAuth);
    return  isAuth;
};

export  const getUruaria = () =>{
    if(useAuth){ 
        let usuaria = JSON.parse(localStorage.getItem("Usuaria"));
        return usuaria
    }
    return 0;
  
};
  

export  const getRolUruaria = () =>{
    if(useAuth){ 
        let usuaria = JSON.parse(localStorage.getItem("Usuaria"));
        return usuaria.Rol
    }
    return 0;
  
}

export const isVoluntaria = () =>{

    return (getRolUruaria() >= 3)
}


export const isCoordinadora = () =>{
  return   (getRolUruaria() >= 4)


}




