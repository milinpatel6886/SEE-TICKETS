// src/components/common/ProtectedRoute/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("tokenData");
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login-form" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;