import _ from "lodash";
import React, { ChangeEvent } from "react";
import Col from "react-bootstrap/Col";

import { setAlert, updateCustomer } from "my-store";
import { MainForm } from "my-components";
import { IFormText } from "my-components/inputs";
import { useTypedDispatch, useTypedSelector } from "my-hooks";

import styles from "./CustomerForm.module.scss";
import { CurrencyInput, CountryInput } from "./inputs";
import { postEntity } from "../../../../utils";

export function CustomerForm() {
  const customer = useTypedSelector((state) => state.customerDetails.customer);
  const dispatch = useTypedDispatch();
  function updateFormItem(prop: string, event: ChangeEvent<any>) {
    const value = _.get(event, "target.value", event);

    dispatch(updateCustomer({ prop, value }));
  }

  async function saveCustomer() {
    try {
      await postEntity({ entity: customer, collection: "customers" });

      const message = !customer._id
        ? "Customer successfully added"
        : "Customer successfully edited";

      dispatch(setAlert({ type: "success", message }));
    } catch (e) {
      dispatch(setAlert({ type: "error", message: "Some error occurred" }));
    }
  }

  return (
    <MainForm handleConfirm={saveCustomer} size={10}>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Company Name"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"name"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Address"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"address"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <CountryInput />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Postal Code"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"postCode"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Tax ID"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"taxId"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <CurrencyInput
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Contact Name"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"contact.name"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Contact Email"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"contact.email"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Contact Phone"}
          onChange={updateFormItem}
          stateItem={"customerDetails.customer"}
          prop={"contact.phone"}
        />
      </Col>
    </MainForm>
  );
}
