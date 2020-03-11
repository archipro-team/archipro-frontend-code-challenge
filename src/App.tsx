import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import SearchBox from "./components/SearchBox";
import data from "./api/data.json";
import logo from "./archipro_dev.webp";
import ContactTable from "./components/ContactTable";
import styled from "styled-components";

const StyledSearchBox = styled(SearchBox)`
  width: 100%;
  margin-bottom: 15px;
`;

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
              <StyledSearchBox
                placeholder="Search"
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
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
