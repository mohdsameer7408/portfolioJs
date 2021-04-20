import styled from "styled-components";

import Header from "./app/components/Header";
import About from "./app/components/About";
import Home from "./app/components/Home";
import Skills from "./app/components/Skills";
import Education from "./app/components/Education";
import Project from "./app/components/Project";
import Contact from "./app/components/Contact";
import Footer from "./app/components/Footer";

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
