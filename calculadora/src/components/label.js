import { Form, InputGroup } from "react-bootstrap";

const Label = ({ arrayLabel, addValue, addIndex }) => {
  return (
    <>
      {arrayLabel.length <= 1 ? (
        <h6 text-align="center">
          <p className="fw-light">Informe a quantidade de campos</p>
        </h6>
      ) : (
        <>
          <InputGroup name="Form">
            {arrayLabel.map((id) => (
              <Form.Control
                className="m-1"
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
