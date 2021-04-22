import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

import styled from "styled-components";

function About() {
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src="https://scontent.flko7-1.fna.fbcdn.net/v/t1.6435-9/104482823_956499954794520_3596117502670329697_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pfF5z2WFgYAAX8B1pHN&_nc_ht=scontent.flko7-1.fna&oh=9281d31e8a1f09fb8d267643a205dea2&oe=60A88B23" />
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
  background: #141d26;
  flex-wrap: wrap;
`;

const AboutImageContainer = styled.div`
  margin: 0 133px 50px 0;
`;

const AboutImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
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

export const StyledButton = styled(Button)`
  background: #243447 !important;
  color: #fff !important;
  padding: 15px 20px !important;
  box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.5) !important;
  transition: 0.2s all ease-in-out !important;

  :hover {
    box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.2) !important;
  }
`;
