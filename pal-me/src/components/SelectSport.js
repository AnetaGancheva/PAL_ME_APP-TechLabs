import styled from 'styled-components';
import { Form} from 'react-bootstrap';


const SelectSport = () => {
  return (
    <Form.Select aria-label="Default select example" size="lg" style={{padding: "20px", borderRadius: "4px",border:"none", cursor: "pointer" }}>
        <option>Select one of the following sports</option>
        <option value="1">Football</option>
        <option value="2">Basketball</option>
        <option value="3">Hockey</option>
</Form.Select>
  );
};

export default SelectSport;
