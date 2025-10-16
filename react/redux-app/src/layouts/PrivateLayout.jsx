import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateLayout() {
  const token = useSelector((state) => state.auth.token);
  if (!token) {
    return <Navigate to="/login" replace></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }

  return <div>PrivateLayout</div>;
}
