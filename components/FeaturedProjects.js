import styled from "styled-components";
import projects from "@/db-assets/projects.json";

export default function FeaturedProjects() {
  return (
    <Section>
      <Heading>Featured Projects</Heading>

      <Subtitle>
        A selection of projects I&apos;ve worked on, demonstrating my skills and
        passion for frontend development
      </Subtitle>

      <Grid>
        {projects.map((project) => (
          <Card key={project.title}>
            <Image src={project.image} alt={project.title} />

            <Content>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
              <Tags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →{" "}
              </Link>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem;
  min-height: 100vh;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: var(--text-color);
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 1rem auto 3rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 600px));
  justify-content: center;
  gap: 2rem;
`;

const Card = styled.div`
  background: var(--experience-bg);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--main-color);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    border-color: var(--border-color);
    box-shadow: var(--box-shadow);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 0 2rem 2rem 2rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: var(--text-color);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  white-space: pre-line;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.8rem;
`;

const Tag = styled.span`
  background: var(--main-color);
  color: white;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
`;

const Link = styled.a`
  color: var(--main-color);
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
