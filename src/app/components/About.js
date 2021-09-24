import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import styled from "styled-components";

import Profile from "../assets/images/profile.jpg";
import Resume from "../assets/docs/Sameer_Ahmad_Resume.pdf";

function About() {
  return (
    <AboutContainer id="about">
      <AboutImageContainer>
        <AboutImage src={Profile} />
      </AboutImageContainer>
      <AboutContent>
        <AboutHeading>Know About Me !</AboutHeading>
        <AboutDescription>
          A computer science enthusiast with college project experience in full
          stack, mobile development, looking to utilize my knowledge and skills
          for the organization’s growth.
        </AboutDescription>
        <AboutHeading>Contact</AboutHeading>
        <AboutDescription>
          ⚙ mohdsameer7408@gmail.com <br /> ⚙ Gorakhpur, UP
          <br />⚙ India
        </AboutDescription>
        <ResumeLink href={Resume} download="MohdSameerAhmadResume">
          <StyledButton startIcon={<GetAppIcon />}>
            Download Resume
          </StyledButton>
        </ResumeLink>
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

const ResumeLink = styled.a`
  text-decoration: none;
`;
