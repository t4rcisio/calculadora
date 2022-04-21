import { Container, Card, Form } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Calculadora</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <input placeholder="Digite aqui quantidade de campos" />
            </Form>
          </Card.Body>
          <Card.Body>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Card.Body>
          <Card.Footer>Digite o número de entradas para começar</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Home;
