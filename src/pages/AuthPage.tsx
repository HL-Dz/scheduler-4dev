import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { useAppSelector } from "../hooks/hooks";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const token = useAppSelector((state) => state.auth.token);
  const error = useAppSelector((state) => state.auth.error);

  if (token && !error) {
    return <Navigate replace to="/tasks" />;
  } else if (!token && error) {
    return <Navigate replace to="/error" />;
  }

  return (
    <div className="auth">
      <AuthForm />
    </div>
  );
};

export default Auth;
