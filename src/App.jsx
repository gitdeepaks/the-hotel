import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Input } from "./Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: beige;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-500);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  margin: 20px;
  cursor: pointer;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Hotel</H1>
        <Button onClick={() => alert("chek in")}>Check in</Button>
        <Button onClick={() => alert("chek out")}>Check out</Button>
        <Input type="number" placeholder="Enter your number" />
        <Input type="number" placeholder="Enter your number" />
      </StyledApp>
    </>
  );
}

export default App;
