import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} made with 💓 by CodeArt✨✨
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #122230;
  box-shadow: 1px 0 8px 0 rgba(0, 0, 0, 0.6);
`;

const FooterText = styled.h4`
  color: #ccc;
`;
