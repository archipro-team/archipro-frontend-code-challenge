import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders propertly with given data', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('tbody > tr')).toHaveLength(8);
});

xit('renders propertly with filter', () => {
  const wrapper = shallow(<App />);
  // TODO mimic input 
});