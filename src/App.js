import React, { Component } from 'react';
import { Container, Row, Col, Table, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';
import clientFilter from './common/filter';

class App extends Component {
  state = {
    filters: {},
    results: data
  };

  getTable = () => (
    <Table className="App-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        {this.getSearchRow()}
        {this.getDataRow()}
      </tbody>
    </Table>
  );

  getSearchRow = () => (
    <tr>
      <td>
        <Input
          type="search"
          name="name"
          placeholder="filter by name"
          onChange={this.handleChange}
        />
      </td>
      <td>
        <Input
          type="email"
          name="email"
          placeholder="filter by email"
          onChange={this.handleChange}
        />
      </td>
      <td>
        <Input
          type="search"
          name="phone"
          placeholder="filter by phone"
          onChange={this.handleChange}
        />
      </td>
    </tr>
  );

  getDataRow = () => {
    if (!this.state.results || !this.state.results.length)
      return (
        <tr>
          <td colSpan="3">no data</td>
        </tr>
      );
    return this.state.results.map(({ _id, name, email, phone }) => (
      <tr key={_id}>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    ));
  };

  handleChange = event => {
    const filters = {
      ...this.state.filters,
      [event.target.name]: event.target.value
    };
    const results = clientFilter(data, filters);
    this.setState({ filters, results });
  };

  render = () => (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-content">
        <Container>
          <Row>
            <Col>{this.getTable()}</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
