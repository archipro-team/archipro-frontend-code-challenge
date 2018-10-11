import React, { Component } from 'react';
import { Container, Row, Col, Table, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';
import ViewPerson from '../src/components/ViewPerson'

class App extends Component {

  state={
    search : "",
    data : data,
    sortAsc : true
  }

  setSearch = (event) => {
    this.setState({search:event.target.value.toLowerCase()});
  }


  comparefunction = (a,b) => {
    let i = this.state.sortAsc ? -1 : 1; 
      var x = a.name.toLowerCase(); 
      var y = b.name.toLowerCase(); 
      if (x < y)  return -1*i;
      if (x > y)  return 1*i;    
      return 0;
    }

  toggleSort = () => {
    let sortedData = this.state.data.slice().sort(this.comparefunction);
    this.setState(prevState=>({sortAsc : !prevState.sortAsc, data : sortedData}));
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
            <th onClick={this.toggleSort}>Name</th>
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
      ({ _id, name, email, phone, company, about, address, picture, isActive }) => (
        <CSSTransition
            key={_id} 
            timeout={350}
            classNames="fade"
        >
        <tr className="personNode">
        <td>
          <ViewPerson 
                  name={name} 
                  company={company} 
                  about={about} 
                  picture={picture}
                  address={address}
                  isActive={isActive}
          />
        </td>
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
