import { Container, Title } from './Layout.styled';

export const Layout = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
