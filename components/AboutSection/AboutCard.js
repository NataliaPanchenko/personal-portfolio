import styled from "styled-components";

export default function AboutCard({ icon, title, text }) {
  return (
    <Card>
      <Content>
        <Icon>{icon}</Icon>

        <Title>{title}</Title>
      </Content>
      <Text>{text}</Text>
    </Card>
  );
}

const Card = styled.div`
  background: white;
  border: 2px solid #f4e8ed;
  border-radius: 24px;
  padding: 14px;
  display: flex;
  gap: 18px;
  flex-direction: column;
  transition: 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  }
`;

const Icon = styled.div`
  min-width: 50px;
  height: 50px;
  border-radius: 18px;
  background: #e8b7ca;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Content = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 15px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const Text = styled.p`
  color: #555;
  line-height: 1.6;
  margin-top: 0;
`;
