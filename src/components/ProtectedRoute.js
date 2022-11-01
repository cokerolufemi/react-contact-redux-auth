import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { users } = useSelector((state) => {
    return state.authReducer;
  });

  if (!users) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
