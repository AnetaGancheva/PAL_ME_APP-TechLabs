import styled from 'styled-components';
import { Form} from 'react-bootstrap';


const SelectSport = () => {
  return (
    <Form.Select aria-label="Default select example" size="lg" style={{padding: "20px", borderRadius: "4px",border:"none", cursor: "pointer" }}>
        <option>Choose one of these</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
</Form.Select>
  );
};

export default SelectSport;
