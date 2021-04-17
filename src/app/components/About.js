import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src="https://images.unsplash.com/photo-1599057933537-5cb12556a6f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
      </AboutImageContainer>
      <AboutContent>
        <AboutHeading>Know About Me !</AboutHeading>
        <AboutDescription>
          I'm a computer science student who is passionate about writing code,
          solving problems, automating stuff, and building software.
        </AboutDescription>
        <AboutHeading>Contact</AboutHeading>
        <AboutDescription>
          ⚙ 9721152944 <br /> ⚙ 271 A/2 Tilak Nagar <br /> ⚙ Allahpur Prayagraj
          <br />⚙ Near Tilak Sikshad Santhan
        </AboutDescription>
        <StyledButton href="https://drive.google.com/file/d/1jzmeGPB2JJO48zI9cTyvLom7v2gKCjbJ/view?usp=sharing">
          <GetAppIcon /> Download Resume
        </StyledButton>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 70px 20px;
  background: linear-gradient(
    to bottom,
    rgba(20, 29, 38, 1),
    rgba(20, 29, 38, 0.9),
    rgba(20, 29, 38, 0.8)
  );
  flex-wrap: wrap;
`;
//#141d26
const AboutImageContainer = styled.div`
  margin: 0 133px 50px 0;
`;

const AboutImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const AboutContent = styled.div`
  max-width: 755px;
`;

const AboutHeading = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  color: #7a7a7a;
  margin-bottom: 20px;
  font-size: 1.3rem;
  line-height: 2rem;
`;

const StyledButton = styled(Button)`
  background: #243447 !important;
  color: #fff !important;
  padding: 15px 20px !important;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
  transition: 0.2s all ease-in-out !important;

  :hover {
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2) !important;
  }
`;
