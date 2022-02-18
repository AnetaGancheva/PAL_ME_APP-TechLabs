import Header from './Header';
import styled from "styled-components";
import StoryFooter from './StoryFooter';

const Wrapper = styled.div`
    background-color: #f6f6ef;
    padding: 8px;
`

const Story = (props) => {
    return (
        <Wrapper>
            <Header title={props.title} url={props.url} />
            <StoryFooter score={props.score} by={props.by} time={props.time}/>
        </Wrapper>
    )
}

export default Story