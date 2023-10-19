import { Navigate } from "react-router-dom";
import { useAccount } from "../store/auth/hooks"


const Notfound = () => {
  const { token } = useAccount();
  
  return (
    token ? (<Navigate to="/table"/>) : (<Navigate to="/"/>)
  )
}

export default Notfound