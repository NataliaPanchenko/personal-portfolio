import styled from "styled-components";

const projects = [
  {
    title: "Event Finder",
    description:
      "A web platform for discovering and booking local events such as concerts, meetups, conferences, and community activities. Users can browse events, search for interesting activities, view detailed event information, reserve and purchase tickets, and manage their bookings through a personal profile dashboard. The platform also includes user authentication, allowing users to sign up, log in securely, and access their personal information and booking history.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: [
      "Next.js",
      "JavaScript",
      "MongoDB",
      "NextAuth",
      "Next.js API Routes",
      "Styled Components",
    ],
    link: "https://event-finder-pearl.vercel.app/",
  },
];

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
  padding: 0 2rem 2rem 2rem;
  min-height: 100vh;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
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
  background: white;
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
  padding: 2rem;
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
