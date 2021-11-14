import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import styles from "./PageContainer.module.scss";

type PageContainerProps = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export function PageContainer({ header, children }: PageContainerProps) {
  return (
    <Container fluid={"md"} className={styles.pageContainer}>
      {header && <Row className={styles.header}>{header}</Row>}
      <Row className={styles.container}>{children}</Row>
    </Container>
  );
}
