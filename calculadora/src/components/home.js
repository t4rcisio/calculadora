import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Badge,
  InputGroup,
  Nav,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import Label from "./label";

const Home = () => {
  // Estados das variáves que interagem com a interface
  const [arrayLabel, setLabelNumber] = useState([0]);
  const [arrayExpression, setExpression] = useState([]);
  const [index, setIndex] = useState(undefined);
  const [operation, setOperation] = useState(undefined);
  const [solution, setSolution] = useState(false);
  const [error, setError] = useState(false);

  // Captura o evento de mudança de valor no elemento e o envia para ser incluído no array
  const addValue = (event) => {
    addExpressionValue(index, event.target.value);
  };

  // Sempre que o usuário seleciona um dos campos, a posição selecionada é capturada
  const addIndex = (index) => {
    setIndex(index);
  };

  // Gera um array de N posições para a criação dos campos conforme o usuário digita
  const setLabel = (event) => {
    const size = event.target.value;
    if (size <= 0) return false;
    var data = [...Array(Number(size)).keys()];
    setLabelNumber(data);
  };

  // Atualiza os valores no array de elementos conforme o usuário insere ou modifica os valores
  const addExpressionValue = (index, value) => {
    setOperation(false);
    if (value) arrayExpression[index] = value;
    else arrayExpression[index] = false;
  };

  // Calcula o valor da operação
  const getSolution = () => {
    //Verifica se há um tipo de operação selecionada
    if (!operation) return false;

    // O primeiro elemento é inserido em separado, para não realizar a operação de forma incorreta
    let math_solution = parseInt(arrayExpression[0]);
    setError(false);

    // O loop percorre todo o vetor
    for (let index = 1; index < arrayExpression.length; index++) {
      let value = parseInt(arrayExpression[index]);

      //A operaçãoserá realizada conforme o tipo de operação selecionada
      if (operation === "Sum" && Number.isInteger(value))
        math_solution += value;
      if (operation === "Sub" && Number.isInteger(value))
        math_solution -= value;
      if (!value) {
        // Caso um dos campos esteja vazio, a operção é interrompida
        setSolution(false);
        setError(true);
        break;
      }
    }

    // Em tudo ocorrendo bem, o valor da operação é exibido na tela
    if (!error && arrayExpression.length > 1) setSolution(math_solution);
  };

  const zoom = (element, size) => {
    const data = document.getElementById(element);
    data.style.fontSize = `${size}px`;
  };

  //Limpa toda interface
  const resetInterface = () => {
    setLabelNumber([]);
    setExpression([]);
    setSolution(false);
    document.getElementById("inputForm").value = "";
  };

  // Sempre que houver uma interção com interface, a função é executada
  useEffect(() => {
    getSolution();
  });

  return (
    <>
      <Container className="center-block" style={{ marginTop: "25px" }}>
        <Row className="justify-content-md-center">
          <Card style={{ width: "420px" }}>
            <Card.Header>
              <Card.Title>Calculadora</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row style={{ justifyContent: "end" }}>
                <Form style={{ width: "160px" }}>
                  <Form.Control
                    id="inputForm"
                    type={"number"}
                    placeholder="Nº campos"
                    onChange={setLabel}
                  />
                </Form>
                <Button
                  variant="danger"
                  className="ms-3"
                  style={{ width: "200px" }}
                  onClick={() => {
                    resetInterface();
                  }}
                >
                  Limpar
                </Button>
              </Row>
            </Card.Body>
            <Card.Body>
              <Label // Aqui serão carregados de forma dinâmica os campos
                arrayLabel={arrayLabel}
                addValue={addValue}
                addIndex={addIndex}
              />
            </Card.Body>
            <Card.Body>
              <Row className="mt-6" style={{ justifyContent: "center" }}>
                <Button
                  variant="success"
                  className="ms-3"
                  style={{ width: "150px" }}
                  onClick={() => {
                    setOperation("Sum");
                  }}
                >
                  Realizar soma
                </Button>
                <Button
                  variant="warning"
                  className="ms-3"
                  style={{ width: "150px" }}
                  onClick={() => {
                    setOperation("Sub");
                  }}
                >
                  Realizar Subtração
                </Button>
              </Row>
            </Card.Body>{" "}
            {/* Aqui, são exibidas as mensagens conforme o estado das variáves de estado mudarem */}
            {!solution && !error && arrayLabel.length > 1 && (
              <Card.Footer>Preencha todos os campos</Card.Footer>
            )}
            {error && (
              <Card.Footer>Você precisa preencher todos os campos</Card.Footer>
            )}
            {arrayLabel.length <= 1 && (
              <Card.Footer>Selecione a quantidade de campos</Card.Footer>
            )}
            {!error && solution ? (
              <Card.Footer className="text-center">
                <Badge bg="success">
                  <h3>Resultado: {solution}</h3>
                </Badge>
              </Card.Footer>
            ) : (
              <></>
            )}
          </Card>
        </Row>
      </Container>
      <Nav
        className=" fixed-bottom navbar-light bg-light justify-content-center"
        style={{ height: "40px" }}
      >
        <Row className="mt-6 text-center">
          <Col>
            <a
              id="linkedinLink"
              href="https://www.linkedin.com/in/t4rcisio/"
              className="text-decoration-none alert-link  m-0 p-0"
              style={{ fontSize: 15 }}
              onMouseOver={() => zoom("linkedinLink", 20)}
              onMouseOut={() => zoom("linkedinLink", 15)}
            >
              Linkedin
            </a>
          </Col>
          <Col>
            <a
              id="gitLink"
              href="https://github.com/t4rcisio"
              className="text-decoration-none alert-link m-0 p-0"
              style={{ fontSize: 15 }}
              //onFocus={() => setSize(25)}
              onMouseOver={() => zoom("gitLink", 20)}
              onMouseOut={() => zoom("gitLink", 15)}
            >
              GitHub
            </a>
          </Col>
        </Row>
      </Nav>
    </>
  );
};

export default Home;
