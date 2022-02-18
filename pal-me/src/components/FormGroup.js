import styled from 'styled-components';

const Form = styled.div`
    margin-right: 3% !important;
    margin-bottom: 3% !important;
`
const Title = styled.h4`
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
