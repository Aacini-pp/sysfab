import React from 'react';
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
import {useAuth,getRolUruaria} from '../app/funciones';



const ProtectedRoutesCoordinador = () => {
  const location = useLocation();
  const isCoordinadora = (getRolUruaria()==4) ;
  return (isCoordinadora) ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default ProtectedRoutesCoordinador;
