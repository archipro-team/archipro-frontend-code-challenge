import React, { Component } from 'react';
import { Container, Row, Col, Table, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';

class App extends Component {

  state={
    search : "",
    data : data
  }

  setSearch = (event) => {
    this.setState({search:event.target.value.toLowerCase()});
  }

  getTable() {
    return (
      <Table className="App-table">
        <thead>
          <tr>
            {/* Heading */}
            <th>USERS</th>
            <th colSpan="2">
            {/*Search Input box*/}
              <InputGroup style={{maxWidth:"450px", float:"right"}}>
                <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                <Input placeholder="Name..." onChange={this.setSearch}/>{/*Search Input box*/}
              </InputGroup>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <TransitionGroup component="tbody">
          {this.getRow()}
        </TransitionGroup>
      </Table>
    );
  }

  getRow() {
    // search filter
    let filteredData = this.state.data.filter(data => data.name.toLowerCase().indexOf(this.state.search)!==-1);
    
    //return filtered results
    return filteredData.map(
      ({ _id, name, email, phone }) => (
        <CSSTransition
            key={_id} 
            timeout={350}
            classNames="fade"
        >
        <tr className="personNode">
        <td><div>{name}</div></td>
        <td><div>{email}</div></td>
        <td><div>{phone}</div></td>
        </tr>
        </CSSTransition>
      )
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <Container>
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
