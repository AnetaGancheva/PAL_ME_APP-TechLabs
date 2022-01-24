import styled from 'styled-components';

const Form = styled.div`
    margin-right: 3%;
    margin-bottom: 3%;
`
const Title = styled.h4`
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 2%;
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
