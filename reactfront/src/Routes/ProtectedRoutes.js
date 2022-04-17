import React from 'react';
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
  let  isAuth = !(localStorage.getItem("Usuaria") === null);
  console.log("Estado del Auth ", isAuth);
  return  isAuth;
};

const ProtectedRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
