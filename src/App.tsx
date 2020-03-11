import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import SearchBox from "./components/SearchBox";
import data from "./api/data.json";
import logo from "./archipro_dev.webp";
import ContactTable from "./components/ContactTable";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-content">
        <Container>
          <Row>
            <Col>
              <SearchBox value={searchQuery} onValueChange={setSearchQuery} />
            </Col>
          </Row>
          <Row>
            <Col>
              <ContactTable data={data} searchQuery={searchQuery} />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default App;
