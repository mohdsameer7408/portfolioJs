import styled from "styled-components";

function Education() {
  return (
    <EducationContainer id="education">
      <EducationBox>
        <EducationTitleContainer>
          <EducationTitle>Education</EducationTitle>
        </EducationTitleContainer>
        <EducationWrapper>
          <EducationHeading>
            Shri Ramswaroop Memorial University
          </EducationHeading>
          <EducationDescription>
            B.Tech in Computer Science & Engineering
            <br />
            7.95 CGPA
          </EducationDescription>
        </EducationWrapper>
      </EducationBox>

      <EducationBox>
        <EducationTitleContainer>
          <EducationTitle>Work</EducationTitle>
        </EducationTitleContainer>
        <EducationWrapper>
          <EducationHeading>Club App</EducationHeading>
          <EducationDescription>
            Created a club management system where clubs of my college can
            handle their events, manage club members, and interact with each
            other in the community page build with JavaScript MERN (MongoDB,
            ExpressJs, ReactJs, NodeJs).
          </EducationDescription>
        </EducationWrapper>
      </EducationBox>
    </EducationContainer>
  );
}

export default Education;

const EducationContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px;
  line-height: 2;

  @media only screen and (max-width: 768px) {
    padding: 70px 30px;
  }
`;
const EducationBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const EducationTitleContainer = styled.div`
  width: 200px;
  margin-bottom: 30px;
`;

const EducationTitle = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  border-bottom: 3px solid #ba0a1b;
`;

const EducationWrapper = styled.div`
  width: 500px;
  max-width: 100%;
  padding-left: 10px;
  border-left: 10px solid #ffc000;
`;

const EducationHeading = styled.h1`
  font-size: 1.5rem;
`;

const EducationDescription = styled.p`
  font-size: 1.2rem;
  color: #6e7881;
`;
