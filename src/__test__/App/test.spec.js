import { shallow } from 'enzyme';
import React from 'react';
import App from '../../components/index';

describe('Not Found', () => {
  it('Shoud display Not found', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
