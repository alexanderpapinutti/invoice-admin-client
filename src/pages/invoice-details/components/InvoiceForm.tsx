import _ from "lodash";
import React, { ChangeEvent } from "react";
import Col from "react-bootstrap/Col";

import { setAlert, updateInvoice } from "my-store";
import { MainForm } from "my-components";
import { IFormText } from "my-components/inputs";
import { useTypedDispatch, useTypedSelector } from "my-hooks";

import styles from "./InvoiceForm.module.scss";
import { postEntity } from "../../../utils";

export function InvoiceForm() {
  const invoice = useTypedSelector((state) => state.invoiceDetails.invoice);
  const dispatch = useTypedDispatch();
  function updateFormItem(prop: string, event: ChangeEvent<any>) {
    const value = _.get(event, "target.value", event);

    const reg = /^\d+$/;
    const test = new RegExp(reg);
    console.log(test.test(value));

    dispatch(updateInvoice({ prop, value }));
  }

  async function saveInvoice() {
    try {
      await postEntity({ entity: invoice, collection: "invoices" });
      const message = !invoice._id
        ? "Invoice successfully added"
        : "Invoice successfully edited";

      dispatch(setAlert({ type: "success", message }));
    } catch (e) {
      dispatch(setAlert({ type: "error", message: "Some error occured" }));
    }
  }

  return (
    <MainForm handleConfirm={saveInvoice} size={10}>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"tax"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"name"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Address"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"address"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Postal Code"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"postCode"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Tax ID"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"taxId"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Contact Name"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"contact.name"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Contact Email"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"contact.email"}
        />
      </Col>
      <Col xs={12} lg={6} className={styles.formCol}>
        <IFormText
          label={"Contact Phone"}
          onChange={updateFormItem}
          stateItem={"invoiceDetails.invoice"}
          prop={"contact.phone"}
        />
      </Col>
    </MainForm>
  );
}
