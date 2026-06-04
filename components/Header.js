import { useState } from "react";
import styled from "styled-components";
import { Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <Container>
          <LogoWrapper>
            <Logo>NP</Logo>

            <Name>Natalia Panchenko</Name>
          </LogoWrapper>

          <DesktopNavigation>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </DesktopNavigation>

          <RightSide>
            <ToggleTheme />

            <BurgerButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </BurgerButton>
          </RightSide>
        </Container>
      </HeaderWrapper>

      <MobileMenu $isOpen={isOpen}>
        <MobileLink href="#about" onClick={() => setIsOpen(false)}>
          About
        </MobileLink>

        <MobileLink href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </MobileLink>

        <MobileLink href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </MobileLink>

        <MobileLink href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </MobileLink>
      </MobileMenu>
    </>
  );
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background: var(--header-bg);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 18px 20px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--logo-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  flex-shrink: 0;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: var(--text-color);
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const DesktopNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 50px;
  z-index: 1000;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--nav-color);
  font-size: 17px;
  transition: 0.3s;

  &:hover {
    color: var(--nav-hover-color);
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const IconButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--theme-button);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BurgerButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--header-bg);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 93px;
  left: 0;
  width: 100%;
  background: var(--mobile-menu-bg);
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  border-bottom: 1px solid var(--border-color);
  z-index: 2000;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-120%)"};
  opacity: ${({ $isOpen }) => ($isOpen ? 0.8 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
  transition: 0.35s ease;
`;

const MobileLink = styled.a`
  text-decoration: none;
  color: var(--nav-color);
  font-size: 20px;
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    color: var(--nav-hover-color);
  }
`;
