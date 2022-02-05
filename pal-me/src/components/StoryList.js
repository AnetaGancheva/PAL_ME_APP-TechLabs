import styled from "styled-components";
import Story from './Story';

const Wrapper = styled.div`
    margin: 20px;
`

const StoryList = ({items}) => {
    return (
        <Wrapper>
            {items.map((item, i) => <Story key={i+1} title={item.title} url={item.url} score={item.score} by={item.by} time={item.time} />)}
        </Wrapper>
    )
}

export default StoryList