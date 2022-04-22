import { Badge, Form, InputGroup } from "react-bootstrap";

const Label = ({ arrayLabel, addValue, addIndex }) => {
  return (
    <>
      {arrayLabel.length <= 1 ? (
        <h4>
          <Badge>Informe a quatidade de campos para começar</Badge>
        </h4>
      ) : (
        <>
          <InputGroup name="Form">
            {arrayLabel.map((id) => (
              <Form.Control
                style={{ width: "100px" }}
                type={"number"}
                name={id}
                key={id.toString()}
                onChange={addValue}
                onFocus={() => addIndex(id)}
              />
            ))}
          </InputGroup>
        </>
      )}
    </>
  );
};

export default Label;
