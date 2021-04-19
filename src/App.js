import styled from "styled-components";

import Header from "./app/components/Header";
import About from "./app/components/About";
import Home from "./app/components/Home";
import Skills from "./app/components/Skills";
import Education from "./app/components/Education";
import Project from "./app/components/Project";

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
