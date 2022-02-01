import styled from 'styled-components';
import { Form} from 'react-bootstrap';

const Option = styled.option`
`
const SelectInput = ({options}) => {
  return (
    <Form.Select aria-label="Default select example" size="lg" style={{padding: "20px", borderRadius: "4px",border:"none", cursor: "pointer" }}>
        <Option>All</Option>
        {options.map( (option,index) => <Option value={index}>{option.value}</Option>)}
</Form.Select>
  );
};

export default SelectInput;
