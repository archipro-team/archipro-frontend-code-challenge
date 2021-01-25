import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import data from "./api/data.json";


configure({adapter: new Adapter()});

it('renders without crashing', () => {
  // shallow(<App />);
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should set the state value for searchQuery to undefined during initializatoin', () => {
  const appComponent = shallow(<App />);
  expect(appComponent.instance().state.searchQuery).toEqual("");
});


it('should set the state value for searchBy to name during initializatoin', () => {
  const appComponent = shallow(<App />);
  expect(appComponent.instance().state.searchBy).toEqual("name");
});

it('should update the value of searchQuery state when handleSearchQueryChange function is called', ()=>{
  const appComponent = shallow(<App />);
  const instance = appComponent.instance();
  expect(instance.state.searchQuery).toEqual("");
  instance.handleSearchQueryChange("Search Query");
  expect(instance.state.searchQuery).toEqual("Search Query");
});

it('should update the value of searchBy state when handleSearchByChange function is called', ()=>{
  const appComponent = shallow(<App />);
  const instance = appComponent.instance();
  expect(instance.state.searchBy).toEqual("name");
  instance.handleSearchQueryChange("Email");
  expect(instance.state.searchQuery).toEqual("Email");
});

it('should return the entire data when search query is not given', () => {
  const appComponent = mount(<App />);
  const instance = appComponent.instance();
  const expectedDataLength = data.length;
  const recievedDataLength = instance.getTableData().length;
  expect(recievedDataLength).toEqual(expectedDataLength);
});

it('should filter the data when search query is given', ()=>{
  const appComponent = shallow(<App />);
  const instance = appComponent.instance();
  instance.setState({searchQuery: "d"});
  const recievedDataLength = instance.getTableData().length;
  const expectedDataLength = data.length;
  expect(recievedDataLength).toBeLessThan(expectedDataLength);
});

it('should not filter the data if data not found', ()=>{
  const appComponent = shallow(<App />);
  const instance = appComponent.instance();
  instance.setState({searchQuery:"xyz"});
  const recievedDataLength = instance.getTableData().length;
  expect(recievedDataLength).toEqual(0);
});

it('should return the table row data', ()=>{
  const appComponent = shallow(<App />);
  const instance = appComponent.instance();
  const value = instance.getRow();
  expect(value.length).toBeGreaterThan(0);
});