import Table from "../components/table"
import { setAccounts, setData} from "../store/data/actions";
import { useAccount } from "../store/auth/hooks";
import { useEffect } from "react";

const Home = () => {

      const { token } = useAccount();

    useEffect(()=>{

      let url = "https://task-api-lovat.vercel.app/api/table";
      const data = {token:token};

      let headers = new Headers();

      headers.append("Content-Type", "application/json");

      fetch(url, { method: "POST", headers: headers, body: JSON.stringify(data) })
      .then((response) => response.json())
      .then((response) => {
        setAccounts(response.data.accounts);
        setData(response.data.connectedAccounts);
        })

      },[token])

      

  return (
    <>
        <Table/>
    </>
  )
}

export default Home