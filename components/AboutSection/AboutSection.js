import styled from "styled-components";
import AboutCard from "./AboutCard";
import features from "@/db-assets/about.json";

export default function AboutSection() {
  return (
    <Section>
      <Title>About Me</Title>

      <Container>
        <Left>
          <Text>
            I&apos;m a Junior Frontend Developer with a passion for building
            clean, efficient, and user-centered web applications. With a strong
            foundation in modern JavaScript frameworks and a keen eye for
            design, I strive to bridge the gap between aesthetics and
            functionality.
          </Text>

          <Text>
            My journey into web development started with a curiosity about how
            websites work, and it quickly became my career path. I love staying
            up-to-date with the latest frontend technologies and best practices.
          </Text>

          <Text>
            When I&apos;m not coding, I enjoy exploring new technologies,
            improving my skills through personal projects, and staying inspired
            by modern web design and frontend trends.
          </Text>
        </Left>

        <Right>
          {features.map((item) => (
            <AboutCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Right>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
  font-size: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Text = styled.p`
  line-height: 1.8;
  color: #444;
  margin-bottom: 24px;
`;
