import { Container, Card, Form, Button, Row, Badge } from "react-bootstrap";
import { useState, useEffect } from "react";
import Label from "./label";

const Home = () => {
  const [arrayLabel, setLabelNumber] = useState([0]);
  const [arrayExpression, setExpression] = useState([]);
  const [index, setIndex] = useState(undefined);
  const [operation, setOperation] = useState(undefined);
  const [solution, setSolution] = useState(false);
  const [error, setError] = useState(false);

  const addValue = (event) => {
    addExpressionValue(index, event.target.value);
  };

  const addIndex = (index) => {
    setIndex(index);
  };

  const setLabel = (event) => {
    var data = [...Array(Number(event.target.value)).keys()];
    setLabelNumber(data);
  };

  const addExpressionValue = (index, value) => {
    setOperation(false);
    if (value) arrayExpression[index] = value;
    else arrayExpression[index] = false;
  };

  const getSolution = () => {
    if (!operation) return false;

    let math_solution = parseInt(arrayExpression[0]);
    setError(false);

    for (let index = 1; index < arrayExpression.length; index++) {
      let value = parseInt(arrayExpression[index]);

      console.log({ Value: value, isTrue: Number.isInteger(value) });

      if (operation === "Sum" && Number.isInteger(value))
        math_solution += value;
      if (operation === "Sub" && Number.isInteger(value))
        math_solution -= value;
      if (!value) {
        setSolution(false);
        setError(true);
        break;
      }
    }

    if (!error && arrayExpression.length > 1) setSolution(math_solution);
  };

  useEffect(() => {
    getSolution();
  });

  return (
    <>
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Calculadora</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form>
              <input
                type={"number"}
                placeholder="Quantidade de campos"
                onChange={setLabel}
              />
            </Form>
          </Card.Body>
          <Card.Body>
            <Label
              arrayLabel={arrayLabel}
              addValue={addValue}
              addIndex={addIndex}
            />
          </Card.Body>
          <Card.Body>
            <Row style={{ justifyContent: "end" }}>
              <Button
                className="ms-3"
                style={{ width: "200px" }}
                onClick={() => {
                  setOperation("Sum");
                }}
              >
                Realizar soma
              </Button>
              <Button
                className="ms-3"
                style={{ width: "200px" }}
                onClick={() => {
                  setOperation("Sub");
                }}
              >
                Realizar Subtração
              </Button>
            </Row>
          </Card.Body>
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
      </Container>
    </>
  );
};

export default Home;
