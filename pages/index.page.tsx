import type { NextPage } from "next";
import styled from "styled-components";

const StyledTitle = styled.div`
  height: 200px;
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
