import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from "./MainForm.module.scss";

type MainFormProp = {
  handleConfirm: () => void;
  size?: number;
  children: React.ReactNode;
};

export function MainForm({ handleConfirm, size = 12, children }: MainFormProp) {
  return (
    <Col xs={size} className={styles.formContainer}>
      <Row>{children}</Row>
      <Button onClick={handleConfirm}>Save Customer</Button>
    </Col>
  );
}
