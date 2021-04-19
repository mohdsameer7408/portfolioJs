import React from "react";
import styled from "styled-components";

import Iphone from "../assets/images/iphone.png";

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
            href="https://github.com/harshitdubey8/BlueFrenchHorn"
            target="_blank"
          >
            Project Url
          </ProjectUrl>
        </ProjectCardContainer>

        <ProjectCardContainer>
          <ProjectCard></ProjectCard>
          <ProjectTitle>Recipe App</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project Url{" "}
          </ProjectUrl>
        </ProjectCardContainer>

        <ProjectCardContainer>
          <ProjectCard></ProjectCard>
          <ProjectTitle>Book Cricket</ProjectTitle>
          <ProjectUrl href="" target="_blank">
            Project url
          </ProjectUrl>
        </ProjectCardContainer>

        <ProjectCardContainer>
          <ProjectCard></ProjectCard>
          <ProjectTitle>Shop-App</ProjectTitle>
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
  padding: 70px;
  flex-direction: column;
  align-items: center;
`;

const ProjectsInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProjectsTitle = styled.h1`
  text-align: center;
`;

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
