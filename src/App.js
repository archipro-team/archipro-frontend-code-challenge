import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';
import Search from './components/Search';
import TableComponent from './components/TableComponent';

class App extends Component {
  state = {
      searchQuery: "",
      searchBy: "name"
  };

  handleSearchQueryChange = (searchQuery) => {
    this.setState({searchQuery});
  }

  handleSearchByChange = (searchBy) => {
    this.setState({searchBy});
  }

  getTableData = () => {
    const {searchQuery, searchBy} = this.state;
    let tableData = [...data];
    if(searchQuery) {
      tableData = data.filter(item => item[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase()));
    }
    return tableData;
  }

  render() {
    const {searchQuery, searchBy} = this.state;
    const tableData = this.getTableData();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <Container>
            <Search onSearchQueryChange={this.handleSearchQueryChange} 
              onSearchByChange={this.handleSearchByChange} 
              searchQuery={searchQuery} 
              searchBy={searchBy} />
            <Row>
              <Col>
              <TableComponent tableData={tableData} />
              </Col>
            </Row>
          </Container>

        </main>
      </div>
    );
  }
}

export default App;
