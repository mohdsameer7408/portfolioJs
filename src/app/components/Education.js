import styled from "styled-components";

function Education() {
  return (
    <EducationContainer id="education">
      <EducationBox>
        <EducationTitle>Education</EducationTitle>
        <EducationWrapper>
          <EducationHeading>
            Shri Ramswaroop Memorial University
          </EducationHeading>
          <EducationDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, velit
            id! Eveniet pariatur cum aspernatur culpa eum fugit recusandae,
            neque excepturi voluptas ratione consequatur consectetur quisquam
            vel autem nostrum inventore.mai hu ghatotkach meri maiya ne mujhko
            pala
          </EducationDescription>
        </EducationWrapper>
      </EducationBox>

      <EducationBox>
        <EducationTitle>Work</EducationTitle>
        <EducationWrapper>
          <EducationHeading>Club App</EducationHeading>
          <EducationDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, velit
            id! Eveniet pariatur cum aspernatur culpa eum fugit recusandae,
            neque excepturi voluptas ratione consequatur consectetur quisquam
            vel autem nostrum inventore.mai hu ghatotkach meri maiya ne mujhko
            pala
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
`;
const EducationBox = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const EducationTitle = styled.h1`
  width: 30%;
`;

const EducationWrapper = styled.div``;

const EducationHeading = styled.h1`
  font-size: 1.5rem;
`;

const EducationDescription = styled.p`
  font-size: 1.2rem;
  color: #6e7881;
`;
