import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <HeaderContainer>
      <BurgerContainer>
        <MenuIcon />
      </BurgerContainer>
      <NavContainer>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#skills">Skills</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  z-index: 99;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.4);
`;

const BurgerContainer = styled(IconButton)`
  display: none !important;

  .MuiSvgIcon-root {
    color: #000 !important;
    font-size: 2rem;
    font-weight: 600 !important;
  }

  @media only screen and (max-width: 768px) {
    display: flex !important;
    align-self: flex-start !important;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 500px;
  max-width: 100%;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  position: relative;
  display: flex;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  padding: 7px 14px;
  transition: 0.5s 0.1s all ease;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(
      to bottom right,
      rgba(148, 120, 177, 0.6),
      rgba(77, 30, 125, 0.6)
    );
    transition: 0.5s all ease;
    border-radius: 12px;
    z-index: -1;
  }

  :hover::before {
    width: 100%;
  }

  :hover {
    transform: scale(1.2);
  }
`;
