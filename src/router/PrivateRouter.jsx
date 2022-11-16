import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { userContext } = useAuthContext();

  return <>{userContext ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
