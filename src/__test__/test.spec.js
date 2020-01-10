/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';
import App from '../components/index';

describe('Not Found', () => {
  it('Shoud display Not found', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual('Welcome to BareFootNomad');
  });
});
