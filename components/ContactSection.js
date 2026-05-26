import styled from "styled-components";

export default function ContactSection() {
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
              <Icon>📧</Icon>
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
              <Icon>💼</Icon>
              <div>
                <span>LinkedIn</span>
                <p>linkedin.com/in/nataliapanchenko/</p>
              </div>
            </InfoItem>

            <InfoItem>
              <Icon>💻</Icon>
              <div>
                <span>GitHub</span>
                <p>github.com/nataliapanchenko</p>
              </div>
            </InfoItem>
          </InfoCard>

          <FormCard>
            <Title>Send a Message</Title>

            <form>
              <Input type="text" placeholder="Your name" />
              <Input type="email" placeholder="Your email" />
              <TextArea placeholder="Your message..." rows="5" />
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
    color: #666;
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
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const FormCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
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
    color: #999;
  }

  p {
    margin: 0;
    font-weight: 500;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3d6e3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #eee;
  outline: none;

  &:focus {
    border-color: #d18aa5;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  outline: none;

  &:focus {
    border-color: #d18aa5;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #d18aa5;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;
