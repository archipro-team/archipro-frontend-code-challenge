import React, { Component } from 'react';
// import { Container, Row, Col, Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Grid} from '@material-ui/core'

import './App.css';
import data from './api/data.json';
import logo from './archipro_dev.webp';
import UserTable from './components/userTable/userTable';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tableColumns: ['name', 'email', 'phone']
    }
    this.handleFilterChecked = this.handleFilterChecked.bind(this)
    this.tableCloumnExists = this.tableCloumnExists.bind(this)
  }

  handleFilterChecked(event) {
    console.log(event.target.value)
    if (this.tableCloumnExists(event.target.name)) {
      var array = [...this.state.tableColumns]
      var index = array.indexOf(event.target.name)
      array.splice(index, 1);
      this.setState({tableColumns: array})
    } else {
      this.setState({tableColumns: this.state.tableColumns.concat([event.target.name])})
    }
  }

  tableCloumnExists(colName) {
    if (this.state.tableColumns.includes(colName)) {
      return true
    }
    return false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <form>
            <h3>select table columns:</h3>
            <label>
              name:
              <input
              name="name"
              type="checkbox"
              checked={this.tableCloumnExists('name')}
              onChange={this.handleFilterChecked} />
            </label>
            <label>
              email:
              <input
              name="email"
              type="checkbox"
              checked={this.tableCloumnExists('email')}
              onChange={this.handleFilterChecked} />
            </label>
            <label>
              phone:
              <input
              name="phone"
              type="checkbox"
              checked={this.tableCloumnExists('phone')}
              onChange={this.handleFilterChecked} />
            </label>
            <label>
              balance:
              <input
              name="balance"
              type="checkbox"
              checked={this.tableCloumnExists('balance')}
              onChange={this.handleFilterChecked} />
            </label>
          </form>
          <Grid container justify="center">
            <Grid item xs={11}>
              <UserTable data={data} tableColumns={this.state.tableColumns}/>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default App;
