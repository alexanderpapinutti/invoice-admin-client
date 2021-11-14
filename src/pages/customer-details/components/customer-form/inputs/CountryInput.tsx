import _ from "lodash";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CountrySelect from "react-bootstrap-country-select";
import { updateCustomer } from "my-store";
import { useTypedDispatch, useTypedSelector } from "my-hooks";

export function CountryInput() {
  const dispatch = useTypedDispatch();
  const country = useTypedSelector((state) =>
    _.get(state, "customerDetails.customer.country")
  );

  return (
    <InputGroup size="lg" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Form.Label>Country</Form.Label>
      </div>
      <div>
        <CountrySelect
          value={country}
          valueAs={"id"}
          onTextChange={(event) => {
            return;
          }}
          onChange={(event: any) =>
            dispatch(
              updateCustomer({ value: event?.id || event, prop: "country" })
            )
          }
        />
      </div>
    </InputGroup>
  );
}
