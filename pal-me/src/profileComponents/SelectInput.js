import styled from "styled-components";

const Select = styled.select`
  padding: 1%;
    margin: 1% 0;
    width: 50%;
    border-radius: 4px;
`
const Option = styled.option`
    border: 1px solid lightgray;
    border-radius: 4px;
    background-color: rgb(228,242,227);
`
const Label = styled.label`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
`

const SelectInput = ({options,label}) => { 
  return (<>
      <Label>{label}</Label>
      <Select>
          <Option>All</Option>
          {options.map( (option,index) => <Option key={index}>{option.value}</Option>)}
      </Select>
  </>
    
  );
};


export default SelectInput;
