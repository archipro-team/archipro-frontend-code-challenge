//External Components
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
//Components
import Search from './components/Search';
import TableComponent from './components/TableComponent';
//Services
import data from './api/data.json';
import logo from './archipro_dev.webp';
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  state = {
      searchQuery: "",
      searchBy: "name",
      sortColumn: {columnName: "name", order:"asc"}
  };

  handleSearchQueryChange = (searchQuery) => {
    this.setState({searchQuery});
  }

  handleSearchByChange = (searchBy) => {
    this.setState({searchBy});
  }

  handleSort = (sortColumn) => {
    console.log(sortColumn);
    this.setState({sortColumn});
  }

  getTableData = () => {
    const {searchQuery, searchBy, sortColumn} = this.state;
    let tableData = [...data];
    if(searchQuery) {
      tableData = data.filter(item => item[searchBy].toLowerCase().startsWith(searchQuery.toLowerCase()));
    }
    tableData = _.orderBy(tableData, sortColumn.columnName, sortColumn.order);
    return tableData;
  }

  render() {
    const {searchQuery, searchBy, sortColumn} = this.state;
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
              <TableComponent tableData={tableData} sortColumn={sortColumn} onSort={this.handleSort} />
              </Col>
            </Row>
          </Container>

        </main>
      </div>
    );
  }
}

export default App;
