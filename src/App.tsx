import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Col, Container, Row } from "reactstrap";

import data from "./api/data.json";
import logo from "./archipro_dev.webp";
import ContactTable from "./components/ContactTable";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-content">
        <Container>
          <Row>
            <Col>
              <ContactTable data={data} />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default App;
