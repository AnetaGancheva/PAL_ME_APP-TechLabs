import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import '../additionalStyles.css';

const Option = styled.option`
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: rgb(228,242,227);
`

const SelectInput = ({options}) => { 
  return (
    <Form.Select aria-label="Default select example" className="form-style">
        <Option>All</Option>
        {options.map( (option,index) => <Option key={index}>{option.value}</Option>)}
</Form.Select>
  );
};

export default SelectInput;
