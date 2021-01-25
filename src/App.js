import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';
import Search from './components/Search';

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

  getTable() {
    return (
      <Table className="App-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {this.getRow()}
        </tbody>
      </Table>
    );
  }

  getTableData = () => {
    const {searchQuery, searchBy} = this.state;
    let tableData = [...data];
    if(searchQuery) {
      tableData = data.filter(item => item[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase()));
    }
    return tableData;
  }

  getRow() {
    const tableData = this.getTableData();

    if(tableData.length === 0) return <tr><td colSpan="3">No Records Found</td></tr>

    return tableData.map(
      ({ _id, name, email, phone }) => (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      )
    )
  }

  render() {
    const {searchQuery, searchBy} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <Container>
            <Search onSearchQueryChange={this.handleSearchQueryChange} onSearchByChange={this.handleSearchByChange} searchQuery={searchQuery} searchBy={searchBy} />
            <Row>
              <Col>
              {this.getTable()}
              </Col>
            </Row>
          </Container>

        </main>
      </div>
    );
  }
}

export default App;
