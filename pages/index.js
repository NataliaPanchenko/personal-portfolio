import AboutSection from "@/components/AboutSection/AboutSection";
import Header from "@/components/Header";
import ProfileIntro from "@/components/ProfileIntro";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <ProfileIntro />
      <AboutSection />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <ContactSection />

      <Footer />
    </>
  );
}
