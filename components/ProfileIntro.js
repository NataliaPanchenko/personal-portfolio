import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function ProfileIntro() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Wrapper $loaded={loaded}>
      <ImageWrapper>
        <Image
          src="/profile-photo.jpg"
          alt="Profile photo"
          width={180}
          height={180}
          style={{
            objectFit: "cover",
            objectPosition: "100% 20%",
          }}
        />
      </ImageWrapper>

      <Badge>Available for opportunities</Badge>

      <Title>Hi, I&apos;m NATALIA PANCHENKO</Title>
      <Subtitle>Junior Frontend Developer</Subtitle>

      <Text>
        Based in Germany. Passionate about creating beautiful, responsive, and
        user-friendly web experiences with modern technologies.
      </Text>

      <ButtonGroup>
        <PrimaryButton>View My Work</PrimaryButton>
        <SecondaryButton>Get In Touch</SecondaryButton>
      </ButtonGroup>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  animation: ${({ $loaded }) => ($loaded ? fadeUp : "none")} 0.8s ease-out;
  @media (min-width: 768px) {
    padding: 90px 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--image-border-color);
  box-shadow: 0 10px 30px var(--box-shadow-color);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;
`;

const Badge = styled.div`
  background: var(--badge-bg);
  color: var(--badge-color);
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  margin-bottom: 14px;
  font-weight: 500;
`;

const Title = styled.h1`
  margin-top: 20px;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-color);
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: var(--subtitle-color);
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 22px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PrimaryButton = styled.button`
  background: var(--main-color);
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 999px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background: var(--main-color-bg);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  padding: 10px 18px;
  border-radius: 999px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background: var(--badge-bg);
    transform: translateY(-2px);
  }
`;

const Text = styled.p`
  max-width: 500px;
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text-color);
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
