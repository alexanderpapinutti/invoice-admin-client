import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IAlert, SideMenu } from "./components";
import styles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import { Home, CustomerDetails, InvoiceDetails } from "./pages";

function App() {
  return (
    <Container fluid>
      <IAlert />
      <Row className={styles.container}>
        <Col xs={2} className={styles.sideMenu}>
          <SideMenu />
        </Col>

        <Col xs={8}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer/:id" element={<CustomerDetails />} />
            <Route
              path="/customer/:id/:invoiceId"
              element={<InvoiceDetails />}
            />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
