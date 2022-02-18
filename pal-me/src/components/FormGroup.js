import styled from 'styled-components';
import { GlobalContext } from '../Context'
import {useContext} from 'react';

const Form = styled.form`
    margin-right: 3% !important;
    margin-bottom: 3% !important;
`
const Title = styled.h6`
    font-weight: 600 !important;
    text-transform: uppercase !important;
    margin-bottom: 2% !important;
`

const FormGroup = ({title, input}) => {

  return (
    <Form>
        <Title>{title}</Title>
        {input}
    </Form>
  );
};

export default FormGroup;
