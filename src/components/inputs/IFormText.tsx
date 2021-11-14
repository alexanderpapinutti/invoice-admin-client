import _ from "lodash";
import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useTypedSelector } from "my-hooks";

type IFormTextProps = {
  onChange: (prop: string, event: any) => void;
  stateItem: string;
  prop: string;
  label: string;
};
export function IFormText({
  onChange,
  stateItem,
  prop,
  label,
}: IFormTextProps) {
  const value = useTypedSelector((state) =>
    _.get(state, `${stateItem}.${prop}`)
  );

  return (
    <InputGroup size="lg" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Form.Label>{label}</Form.Label>
      </div>
      <div>
        <FormControl
          value={value || ""}
          onChange={(event) => onChange(prop, event)}
        />
      </div>
    </InputGroup>
  );
}
