import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const Option = styled.option`
    border: 3px solid teal;
    border-radius: 4px;

    $:hover {
        background-color: rgb(0,64,64);
        color: white;
    }
`



const SelectInput = ({options}) => {
  return (
    <Form.Select aria-label="Default select example" size="lg" style={{padding: "20px", borderRadius: "4px",border:"2px solid teal", cursor: "pointer" }}>
        <Option>All</Option>
        {options.map( (option,index) => <Option value={index}>{option.value}</Option>)}
</Form.Select>
  );
};

export default SelectInput;
