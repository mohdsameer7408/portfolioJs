import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import hero from "../assets/images/hero.jpg";
import { IconButton } from "@material-ui/core";

function Home() {
  return (
    <HomeContainer id="home">
      <HeroDetails>
        <HeroTitle>Mohd Sameer Ahmad</HeroTitle>
        <HeroDescription>Software Developer</HeroDescription>
      </HeroDetails>
      <SocialContainer>
        <IconButton>
          <IconContainer href="https://www.facebook.com/" target="_blank">
            <FacebookIcon />
          </IconContainer>
        </IconButton>
        <IconButton>
          <IconContainer href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon />
          </IconContainer>
        </IconButton>
        <IconButton>
          <IconContainer href="https://www.instagram.com/" target="_blank">
            <InstagramIcon />
          </IconContainer>
        </IconButton>
        <IconButton>
          <IconContainer
            href="https://www.github.com/mohdsameer7408"
            target="_blank"
          >
            <GitHubIcon />
          </IconContainer>
        </IconButton>
      </SocialContainer>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3) url(${hero}) center/cover fixed no-repeat;
  background-blend-mode: darken;
  width: 100%;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
`;

const HeroDetails = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 20px;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 6rem;
`;

const HeroDescription = styled.h2`
  font-size: 2rem;
  text-align: center;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-top: 60px;
  width: 30%;
  justify-content: space-around;
`;

const IconContainer = styled.a`
  text-decoration: none;
  color: #fff;

  .MuiSvgIcon-root {
    font-size: 3rem;
    transition: 0.2s all ease;
  }

  :hover .MuiSvgIcon-root {
    transform: scale(1.2);
    color: #177972;
  }
`;
