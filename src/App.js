import styled from "styled-components";

import Header from "./app/components/Header";
import About from "./app/components/About";
import Home from "./app/components/Home";

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <About />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
