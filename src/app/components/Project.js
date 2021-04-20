import styled from "styled-components";

import Iphone from "../assets/images/iphone.png";
import Monitor from "../assets/images/monitor.png";

function Project() {
  return (
    <ProjectContainer id="projects">
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectsInnerContainer>
        <ProjectCardContainer>
          <ProjectCard>
            <ProjectImage src="https://media.discordapp.net/attachments/785856007817003008/833779385437388820/Screenshot_2021-04-20-00-30-20-882.jpg?width=325&height=683" />
          </ProjectCard>
          <ProjectTitle>BlueFrenchHorn</ProjectTitle>
          <ProjectUrl
            href="https://expo.io/@harsh_hitdubey/projects/blueFrenchHorn"
            target="_blank"
          >
            Project Url
          </ProjectUrl>
        </ProjectCardContainer>

        <ProjectCardContainer>
          <ProjectCard>
            <ProjectImage src="https://media.discordapp.net/attachments/785856007817003008/833779385437388820/Screenshot_2021-04-20-00-30-20-882.jpg?width=325&height=683" />
          </ProjectCard>
          <ProjectTitle>Recipe App</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project Url{" "}
          </ProjectUrl>
        </ProjectCardContainer>

        <ProjectCardContainer>
          <ProjectCard>
            <ProjectImage src="https://media.discordapp.net/attachments/785856007817003008/833779385437388820/Screenshot_2021-04-20-00-30-20-882.jpg?width=325&height=683" />
          </ProjectCard>
          <ProjectTitle>Book Cricket</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project url
          </ProjectUrl>
        </ProjectCardContainer>

        <ProjectCardContainer>
          <ProjectCard>
            <ProjectImage src="https://media.discordapp.net/attachments/785856007817003008/833779385437388820/Screenshot_2021-04-20-00-30-20-882.jpg?width=325&height=683" />
          </ProjectCard>
          <ProjectTitle>Shop-App</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project url
          </ProjectUrl>
        </ProjectCardContainer>
      </ProjectsInnerContainer>
      <ProjectsInnerContainer>
        <ProjectCardContainer>
          <ProjectWebCard>
            <ProjectWebImage src="https://media.discordapp.net/attachments/785856007817003008/834130346395566190/unknown.png?width=945&height=489" />
          </ProjectWebCard>
          <ProjectTitle>WhatsApp-Clone</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project url
          </ProjectUrl>
        </ProjectCardContainer>
        <ProjectCardContainer>
          <ProjectWebCard>
            <ProjectWebImage src="https://media.discordapp.net/attachments/785856007817003008/834130346395566190/unknown.png?width=945&height=489" />
          </ProjectWebCard>
          <ProjectTitle>WhatsApp-Clone</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project url
          </ProjectUrl>
        </ProjectCardContainer>
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
  border-radius: 25px;
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
