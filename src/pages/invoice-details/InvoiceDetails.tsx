import _ from "lodash";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setInvoice, useFetchCollectionQuery } from "my-store";
import { useTypedDispatch } from "my-hooks";
import { PageContainer } from "my-components";
import Invoice from "my-interfaces/Invoice";
import { InvoiceForm } from "./components/InvoiceForm";

const initialState: Invoice = {
  invoiceNumber: "",
  customerId: "",
  tax: 0,
  total: 0,
  date: "",
  paid: false,
};

export function InvoiceDetails() {
  const { invoiceId } = useParams();
  const dispatch = useTypedDispatch();

  const { data = {} } = useFetchCollectionQuery(`invoices/${invoiceId}`);
  const invoice = invoiceId === "new" ? initialState : _.get(data, "data");

  useEffect(() => {
    dispatch(setInvoice(invoice));
  }, [invoiceId, invoice]);

  return (
    <PageContainer>
      <InvoiceForm />
    </PageContainer>
  );
}
