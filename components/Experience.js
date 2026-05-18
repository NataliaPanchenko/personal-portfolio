import styled from "styled-components";

const experienceData = [
  {
    year: "2026 - Present",
    title: "Frontend Developer",
    description:
      "Building modern and responsive web applications with React, Next.js, TypeScript, and styled-components.",
  },
  {
    year: "2026",
    title: "Web Development Bootcamp — Neue Fische",
    description:
      "Successfully completed an intensive bootcamp focused on frontend and full-stack web development.",
  },
  {
    year: "2025",
    title: "Self-Taught Frontend Developer",
    description:
      "Started my frontend development journey through online courses, documentation, and personal projects.",
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Heading>Experience</Heading>

        <Subheading>My journey in frontend development</Subheading>

        <Timeline>
          {experienceData.map((item, index) => (
            <TimelineItem key={index}>
              <Dot />
              <Card>
                <Year>{item.year}</Year>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 0 20px;
`;

const Container = styled.div`
  max-width: 950px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-color);
`;

const Subheading = styled.p`
  text-align: center;
  margin-top: 12px;
  color: var(--subtitle-color);
  font-size: 15px;
`;

const Timeline = styled.div`
  margin-top: 60px;
  @media (max-width: 992px) {
    padding: 20px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 60px;
  margin-bottom: 50px;
  &::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 32px;
    width: 2px;
    height: calc(100% + 18px);
    background: var(--before-item-bg);
  }
  &:last-child::before {
    display: none;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: 0;
  top: 8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--main-color-bg);
  border: 5px solid var(--badge-bg);
  z-index: 2;
`;

const Card = styled.div`
  background: white;
  border: 1px solid var(--main-color);
  border-radius: 22px;
  padding: 28px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: var(--border-color);
    box-shadow: var(--box-shadow);
  }
`;

const Year = styled.span`
  font-size: 14px;
  color: var(--year-color);
  font-weight: 500;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 22px;
  color: var(--text-color);
`;

const Description = styled.p`
  margin-top: 18px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-color);
`;
