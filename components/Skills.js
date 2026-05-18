import styled from "styled-components";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "SASS",
      "Next.js",
      "Bootstrap",
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      "Git",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "Mongoose",
      "Figma",
      "Responsive Design",
      "Accessibility",
      "Testing",
    ],
  },
  {
    title: "Currently Learning",
    skills: ["Type Script", "Web Performance Optimization"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Heading>Skills & Technologies</Heading>

        <Subheading>
          A comprehensive set of modern frontend development skills and tools I
          work with
        </Subheading>

        <CardsWrapper>
          {skillsData.map((category) => (
            <Card key={category.title}>
              <CardTitle>{category.title}</CardTitle>

              <Tags>
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </Tags>
            </Card>
          ))}
        </CardsWrapper>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  padding: 60px 16px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: var(--text-color);
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Subheading = styled.p`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: var(--subtitle-color);
  max-width: 600px;
  margin-inline: auto;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 40px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Card = styled.div`
  background: white;
  border: 1px solid #efdbe4;
  border-radius: 20px;
  padding: 20px;
  min-height: 80px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: var(--border-color);
    box-shadow: var(--box-shadow);
  }
`;

const CardTitle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--main-color);
  color: white;
  font-size: 15px;
  font-weight: 600;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
`;

const Tag = styled.span`
  background: var(--mobile-menu-bg);
  color: var(--tag-color);
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  line-height: 1.3;
  transition: 0.25s ease;

  &:hover {
    background: var(--tag-hover);
    transform: scale(1.02);
  }
`;
