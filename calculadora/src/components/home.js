import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Label from "./label";

const Home = () => {
  const [arrayLabel, setLabelNumber] = useState([0]);
  const [arrayExpression, setExpression] = useState([]);
  const [index, setIndex] = useState(undefined);

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
    if (value) arrayExpression[index] = value;
    else arrayExpression[index] = 0;
  };

  const soma = () => {
    let solution = 0;
    arrayExpression.map((value) => {
      solution += parseInt(value);
    });
    console.log(solution);
  };

  console.log(arrayExpression);

  console.log(arrayLabel);
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
              <Button className="ms-3" style={{ width: "150px" }}>
                Realizar soma
              </Button>
              <Button className="ms-3" style={{ width: "150px" }}>
                Realizar soma
              </Button>
            </Row>
          </Card.Body>
          <Card.Footer>Digite o número de entradas para começar</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Home;

/**
 * 
 

              <Card>
                <Card.Body>
                  <Button onClick={() => soma()}>Somar</Button>
                </Card.Body>
              </Card>
 */
