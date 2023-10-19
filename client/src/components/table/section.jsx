import Row from "./row";
import useOpen from "../../Hooks/useOpen";
import Button from "./Button";
import { useData } from "../../store/data/hooks";

const Section = ({ data }) => {
  const { isOpen, toggle } = useOpen(false);
  const scriptResult = useData();
  
  return (
    <tbody>
      <tr>
        <td>
          <Button isOpen={isOpen} toggle={toggle} />
        </td>
        <td>{data.id}</td>
        <td>{data.borclar}</td>
      </tr>
      {isOpen &&
        scriptResult.map((dataItem, index) => (
          (dataItem.tipi==="A" && data.id === dataItem.ust_hesap_id) && (<Row data={dataItem} key={index} />)
        ))}
    </tbody>
    
  );
}; 

export default Section;
