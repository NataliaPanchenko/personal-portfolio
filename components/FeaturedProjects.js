import styled from "styled-components";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A responsive admin dashboard for managing products, orders, and customers. Built with React, TypeScript, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather application with location search and 5-day forecast. Integrated with OpenWeatherMap API.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "JavaScript", "REST API", "CSS Modules"],
    link: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <Section>
      <Heading>Featured Projects</Heading>

      <Subtitle>
        A selection of projects I've worked on, demonstrating my skills and
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

              <Link href={project.link}>View Project →</Link>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f7f8;
  min-height: 100vh;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
`;

const Subtitle = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 1rem auto 3rem;
  color: #4b5563;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid #f3d1e3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 2rem;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #374151;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4b5563;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.8rem;
`;

const Tag = styled.span`
  background: #d8a9c4;
  color: white;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
`;

const Link = styled.a`
  color: #d19abc;
  text-decoration: none;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
