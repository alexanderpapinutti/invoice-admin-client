import React from "react";
import _ from "lodash";
import styles from "./SideMenu.module.scss";
import { Link } from "react-router-dom";
import { useFetchCollectionQuery } from "my-store";
export function SideMenu() {
  const { data = {} } = useFetchCollectionQuery("customers");
  const customers = _.get(data, "data");
  return (
    <div className={styles.menuContainer}>
      <div className={styles.listHeader}>
        <div className={styles.title}>Customers:</div>
        <Link className={styles.addButton} to={`/customer/new`}>
          Add Customer
        </Link>
      </div>
      <div className={styles.list}>
        {_.map(customers, (customer) => (
          <Link
            key={customer._id}
            className={styles.item}
            to={`/customer/${customer._id}`}
          >
            {customer.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
