// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => { //components dua tren route
  const authToken = localStorage.getItem('myKey');
    // authToken ="" tao 1 bbien de check xewm tren localStorage co myKey hay khong
  return authToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

