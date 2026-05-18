import styled from "styled-components";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Copyright>© 2026 Natalia Panchenko. All rights reserved.</Copyright>

        <Icons>
          <IconLink
            href="https://github.com/NataliaPanchenko"
            target="_blank"
            aria-label="GitHub"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </IconLink>

          <IconLink
            href="https://www.linkedin.com/in/nataliapanchenko/"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </IconLink>

          <IconLink href="mailto:nataliipanchenko@gmail.com" aria-label="Email">
            <FaRegEnvelope />
          </IconLink>
        </Icons>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 1px solid var(--border-color);
  background: var(--mobile-menu-bg);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 400;
  letter-spacing: 0.2px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconLink = styled.a`
  color: var(--main-color);
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  &:hover {
    transform: scale(1.2);
    color: var(--icon-hover);
  }
`;
