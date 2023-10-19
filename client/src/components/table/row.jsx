import Expand from "./expand";
import useOpen from "../../Hooks/useOpen";
import Button from "./Button";
import { useData } from "../../store/data/hooks";

const Row = ({data}) => {

  const { isOpen, toggle } = useOpen(false);
  const scriptResult = useData();
  return (
    <>
      <tr>
        <td>
          <Button isOpen={isOpen} toggle={toggle} />
        </td>
        <td>{data.hesap_kodu}</td>
        <td>{data.borc}</td>
      </tr>
      {isOpen &&
        scriptResult.map(
          (dataItem, index) => (dataItem.tipi === "B" && dataItem.ust_hesap_id === data.id) && <Expand data={dataItem} key={index} />
        )}
     </> 
  );
}

export default Row