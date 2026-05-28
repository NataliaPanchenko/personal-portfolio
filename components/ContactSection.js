import styled from "styled-components";
import { useState } from "react";

export default function ContactSection() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xojbrjbp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setIsSent(true);
      form.reset();

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
  };

  return (
    <Section>
      <Container>
        <Header>
          <h2>Get In Touch</h2>
          <p>
            I&apos;m currently open to new opportunities and collaborations.
            Feel free to reach out!
          </p>
        </Header>

        <Grid>
          <InfoCard>
            <Title>Contact Information</Title>

            <InfoItem>
              <Icon href="mailto:nataliipanchenko@gmail.com">📧</Icon>
              <div>
                <span>Email</span>
                <p>nataliipanchenko@gmail.com</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>📍</Icon>
              <div>
                <span>Location</span>
                <p>Hamburg, Germany</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon
                href="https://linkedin.com/in/nataliapanchenko/"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </Icon>
              <div>
                <span>LinkedIn</span>
                <p>linkedin.com/in/nataliapanchenko/</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon
                href="https://github.com/nataliapanchenko"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻
              </Icon>
              <div>
                <span>GitHub</span>
                <p>github.com/nataliapanchenko</p>
              </div>
            </InfoItem>
          </InfoCard>

          <FormCard>
            <Title>Send a Message</Title>

            <form
              action="https://formspree.io/f/xojbrjbp"
              method="POST"
              onSubmit={handleSubmit}
            >
              <Input type="text" placeholder="Your name" name="name" />
              <Input type="email" placeholder="Your email" name="email" />
              <TextArea placeholder="Your message..." rows="5" name="message" />
              {isSent && (
                <SuccessMessage>
                  ✅ Your message has been sent! Thank you! ✨
                </SuccessMessage>
              )}
              <Button type="submit">Send Message</Button>
            </form>
          </FormCard>
        </Grid>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 20px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    color: var(--text-dark-color);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: var(--header-bg);
  padding: 30px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-color);
`;

const FormCard = styled.div`
  background: var(--header-bg);
  padding: 30px;
  border-radius: 16px;
  box-shadow: var(--box-shadow-color);
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  span {
    font-size: 12px;
    color: var(----text-dark-color);
  }
  p {
    margin: 0;
    font-weight: 500;
  }
`;

const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--icon-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid var(--input-border-color);
  outline: none;

  &:focus {
    border-color: var(--main-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid var(--input-border-color);
  margin-bottom: 15px;
  outline: none;
  &:focus {
    border-color: var(--main-color);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: var(--main-color);
  color: var(--white-color);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: var(--year-color);
  }
`;
