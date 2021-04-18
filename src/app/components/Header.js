import { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false);

  const navToggleHandler = () => {
    setIsNavOpened((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <BurgerContainer onClick={navToggleHandler}>
        <MenuIcon />
      </BurgerContainer>
      <NavContainer isNavOpened={isNavOpened}>
        <StyledCancelIcon onClick={navToggleHandler} />
        <NavItem onClick={navToggleHandler} href="#home">
          Home
        </NavItem>
        <NavItem onClick={navToggleHandler} href="#about">
          About
        </NavItem>
        <NavItem onClick={navToggleHandler} href="#education">
          Education
        </NavItem>
        <NavItem onClick={navToggleHandler} href="#skills">
          Skills
        </NavItem>
        <NavItem onClick={navToggleHandler} href="#projects">
          Projects
        </NavItem>
        <NavItem onClick={navToggleHandler} href="#contact">
          Contact
        </NavItem>
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
  width: 540px;
  max-width: 100%;
  transition: 0.5s all ease-in-out;

  @media only screen and (max-width: 768px) {
    position: absolute;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 80%;
    top: 0;
    left: ${({ isNavOpened }) => (isNavOpened ? "0" : "-80%")};
    background: rgba(20, 29, 38, 1);
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

  @media only screen and (max-width: 768px) {
    color: #fff;
  }
`;

const StyledCancelIcon = styled(ChevronLeftIcon)`
  display: none !important;

  @media only screen and (max-width: 768px) {
    display: flex !important;
    align-self: flex-end;
    color: #fff;
    font-size: 2.5rem !important;
    margin-right: 20px;
  }
`;
