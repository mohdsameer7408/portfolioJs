import styled from "styled-components";

import Iphone from "../assets/images/iphone.png";
import Monitor from "../assets/images/monitor.png";
import Amazon from "../assets/images/amazon.png";
import WhatsApp from "../assets/images/whatsapp.png";
import Instagram from "../assets/images/instagram.png";
import BookCricket from "../assets/images/book-cricket.jpg";
import ShopApp from "../assets/images/shop-app.jpg";
import ChatOn from "../assets/images/chaton.jpg";
import KeepNotes from "../assets/images/keep-notes.jpg";
import MealsApp from "../assets/images/meals-app.jpg";

const mobileApps = [
  {
    name: "Chat On",
    uri: "https://github.com/mohdsameer7408/ChatOn",
    image: ChatOn,
  },
  {
    name: "Book Cricket",
    uri: "https://github.com/mohdsameer7408/BookCricket",
    image: BookCricket,
  },
  {
    name: "Shop App",
    uri: "https://github.com/mohdsameer7408/ShopApp",
    image: ShopApp,
  },
  {
    name: "Keep Notes",
    uri: "https://github.com/mohdsameer7408/KeepNotes",
    image: KeepNotes,
  },
  {
    name: "Meals App",
    uri: "https://github.com/mohdsameer7408/RecipeApp",
    image: MealsApp,
  },
];

const webApps = [
  { name: "Amazon Clone", uri: "https://clone-18965.web.app/", image: Amazon },
  {
    name: "Instagram Clone",
    uri: "https://instagram-clone-1911e.web.app/",
    image: Instagram,
  },
  {
    name: "WhatsApp Clone",
    uri: "https://whatsapp-clone-acd10.web.app/",
    image: WhatsApp,
  },
];

function Project() {
  return (
    <ProjectContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsInnerContainer>
        {mobileApps.map(({ name, image, uri }) => (
          <ProjectCardContainer key={name}>
            <ProjectCard>
              <ProjectImage src={image} />
            </ProjectCard>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectUrl href={uri} target="_blank">
              Project Url
            </ProjectUrl>
          </ProjectCardContainer>
        ))}
      </ProjectsInnerContainer>
      <ProjectsInnerContainer>
        {webApps.map(({ name, image, uri }) => (
          <ProjectCardContainer key={uri}>
            <ProjectWebCard>
              <ProjectWebImage src={image} />
            </ProjectWebCard>
            <ProjectTitle>{name}</ProjectTitle>
            <ProjectUrl href={uri} target="_blank">
              Project url
            </ProjectUrl>
          </ProjectCardContainer>
        ))}
      </ProjectsInnerContainer>
    </ProjectContainer>
  );
}

export default Project;

const ProjectContainer = styled.section`
  display: flex;
  padding: 70px;
  flex-direction: column;
  align-items: center;
`;

const ProjectsInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ProjectsTitle = styled.h1``;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectCard = styled.div`
  background: url(${Iphone}) center/cover;
  width: 233px;
  height: 500px;
  margin: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ProjectImage = styled.img`
  height: 467px;
  width: 230px;
  padding: 10px;
  object-fit: cover;
  border-radius: 27px;
`;

const ProjectTitle = styled.h2`
  text-align: center;
`;

const ProjectUrl = styled.a`
  font-size: 1.2rem;
  color: #888;
`;

const ProjectWebCard = styled.div`
  background: url(${Monitor}) center/cover;
  width: 497px;
  height: 315px;
  margin: 1px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media only screen and (max-width: 500px) {
    width: 290px;
    height: 184px;
  }
`;

const ProjectWebImage = styled.img`
  height: 227px;
  width: 430px;
  margin-top: 11px;
  object-fit: cover;
  @media only screen and (max-width: 500px) {
    height: 124px;
    width: 249px;
  }
`;
