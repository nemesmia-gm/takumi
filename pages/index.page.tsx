import styled from "styled-components";

const StyledTitle = styled.div<{ color: string }>`
  height: 200px;
  background-color: ${(props)=> props.color };
  color: red;
  font-size: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Home: NextPage = () => {
  return <StyledTitle>Hello Takumi!!!</StyledTitle>;
};

export default Home;

