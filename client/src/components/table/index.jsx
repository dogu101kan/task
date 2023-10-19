import { useData, useAccounts } from "../../store/data/hooks";
import Section from "./section";

const Table = () => {

  const accounts = useAccounts();

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Hesap Kodu</th>
          <th>Toplam Borç</th>
        </tr>
      </thead>
      {accounts?.map((data, index) => (
        (<Section data={data} key={index} />)
      ))}
    </table>
  );
};

export default Table;
