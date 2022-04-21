import { useState } from "react";
import { Field, Formik } from "formik";
import { Badge, Form, InputGroup } from "react-bootstrap";

const Label = ({ arrayLabel, addValue, addIndex }) => {
  return (
    <>
      {arrayLabel.length <= 1 ? (
        <h1>
          <Badge>Informe a quatidade de campos para começar</Badge>
        </h1>
      ) : (
        <>
          <InputGroup name="Form" fluid>
            {arrayLabel.map((id) => (
              <Form.Control
                style={{ width: "100px" }}
                type={"number"}
                name={id}
                key={id.toString()}
                onChange={addValue}
                onClick={() => {
                  addIndex(id);
                }}
              />
            ))}
          </InputGroup>
        </>
      )}
    </>
  );
};

export default Label;
