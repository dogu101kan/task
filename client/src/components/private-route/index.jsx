import { Navigate, Outlet } from "react-router-dom";
import { useAccount } from "../../store/auth/hooks"

export default function PrivateRoute() {

    const { token } = useAccount();
    
  return token ? (<div><Outlet/></div>) : <Navigate to="/login"/>
}
