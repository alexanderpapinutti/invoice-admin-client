import _ from "lodash";
import React from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { useTypedSelector } from "my-hooks";
import styles from "./CurrencyInput.module.scss";

type CurrencyInputProps = {
  onChange: (prop: string, item: any) => void;
  stateItem: string;
};

const currencyMap = [
  {
    code: "EUR",
    symbol: "€",
    name: "Euro",
  },
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
  },
];

export function CurrencyInput({ onChange, stateItem }: CurrencyInputProps) {
  const currency = useTypedSelector((state) =>
    _.get(state, `${stateItem}.currency`)
  );
  const selectedCurrency = _.find(currencyMap, { code: currency });

  return (
    <InputGroup size="lg" style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Form.Label>Currency</Form.Label>
      </div>
      <div className={styles.currencyInput}>
        <DropdownButton title={"Select a currency"}>
          {_.map(currencyMap, (currency) => {
            return (
              <Dropdown.Item
                key={currency.code}
                href="#"
                onClick={() => onChange("currency", currency.code)}
                style={{ width: 120 }}
              >
                {currency.name} {currency.symbol}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        {selectedCurrency?.name}
      </div>
    </InputGroup>
  );
}
