import styled from "styled-components";

const progressStatsColor = [
  "#b9bf15 #222 #222 #222",
  "#b9bf15 #b9bf15 #222 #222",
  "#b9bf15 #b9bf15 #b9bf15 #222",
  "#b9bf15 #b9bf15 #b9bf15 #b9bf15",
];

const mySkills = [
  { name: "MERN", progress: 75 },
  { name: "React Native", progress: 100 },
  { name: "Java", progress: 50 },
  { name: "Python", progress: 50 },
  { name: "C", progress: 75 },
];

function Skills() {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle>My Finest Skills</SkillsTitle>
      <SkillsInnerContainer>
        {mySkills.map(({ name, progress }) => (
          <SkillCard key={name}>
            <SkillHeading>{name}</SkillHeading>
            <ProgressCircle progress={progress}>
              <ProgressPercentage>{progress}%</ProgressPercentage>
            </ProgressCircle>
          </SkillCard>
        ))}
      </SkillsInnerContainer>
    </SkillsContainer>
  );
}

export default Skills;

const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
  padding: 70px;
  color: #fff;
`;

const SkillsTitle = styled.h1``;

const SkillsInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 50px;

  @media only screen and (max-width: 539px) {
    justify-content: center;
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 220px;
  justify-content: space-around;
  align-items: center;
`;

const SkillHeading = styled.h2`
  text-align: center;
`;

const ProgressCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 10px solid #222;
  border-color: ${({ progress }) => {
    if (progress === 25) return progressStatsColor[0];
    if (progress === 50) return progressStatsColor[1];
    if (progress === 75) return progressStatsColor[2];
    if (progress === 100) return progressStatsColor[3];
  }};
`;

const ProgressPercentage = styled.h3``;
