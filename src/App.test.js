import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import App from './App';
import data from './api/data.json';

configure({ adapter: new Adapter() });

describe("<App />", ()=> {

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it("Renders only searched users and nothing more", ()=> {
    const wrapper = shallow(<App />);
    wrapper.setState({
      search : "debb",
      data : data
    });
    expect(wrapper.find('tr.personNode')).toHaveLength(1);
    const output=wrapper.find('tr.personNode').html();
    expect(output.indexOf("Debbie Reeves") > -1).toEqual(true);
    expect(output.indexOf("Lang Harvey") === -1).toEqual(true);
  });
});

