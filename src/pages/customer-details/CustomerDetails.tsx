import _ from "lodash";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { setCustomer, useFetchCollectionQuery } from "my-store";
import { useTypedDispatch } from "my-hooks";
import { PageContainer } from "my-components";
import Customer from "my-interfaces/Customer";
import styles from "./CustomerDetails.module.scss";
import { CustomerForm } from "./components/customer-form/";

const initialState: Customer = {
  name: "",
  address: "",
  postCode: "",
  currency: "",
  country: "",
  taxId: "",
  contact: {
    email: "",
    name: "",
    phone: "",
  },
};

export function CustomerDetails() {
  const { id } = useParams();
  const dispatch = useTypedDispatch();

  const { data = {} } = useFetchCollectionQuery(`customers/${id}`);
  const customer = id === "new" ? initialState : _.get(data, "data");

  useEffect(() => {
    dispatch(setCustomer(customer));
  }, [id, customer]);

  return (
    <PageContainer
      header={<CustomerDetailsHeader customerId={customer?._id} />}
    >
      <CustomerForm />
    </PageContainer>
  );
}

function CustomerDetailsHeader({ customerId }: { customerId?: string }) {
  return (
    <Col xs={2} className={styles.header}>
      <Link to={`/customer/${customerId}/new`}>
        <Button>Add Invoice</Button>
      </Link>
    </Col>
  );
}
