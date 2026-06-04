import AboutSection from "@/components/AboutSection/AboutSection";
import Header from "@/components/Header";
import ProfileIntro from "@/components/ProfileIntro";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Section>
      <Header />

      <section id="home">
        <ProfileIntro />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </Section>
  );
}

const Section = styled.div``;
