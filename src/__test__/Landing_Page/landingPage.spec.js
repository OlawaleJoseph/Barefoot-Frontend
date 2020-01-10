import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from '../../components/landingPage';
import Register from '../../components/register';

describe('Landing Page Message', () => {
  const wrapper = shallow(<LandingPage />);
  const signUpBtn = wrapper.find('button');
  it('Should render properly', () => {
    const messageWrapper = wrapper.find('.landing-message-div');
    const h3Message = wrapper.find('h3');
    const pMessage = wrapper.find('p');
    expect(messageWrapper).toHaveLength(1);
    expect(h3Message).toHaveLength(1);
    expect(h3Message.text()).toEqual('Travel made easy');
    expect(pMessage).toHaveLength(1);
    expect(pMessage.text()).toEqual('Travel easy. Travel fast. Travel smooth');
    expect(signUpBtn).toHaveLength(1);
    expect(signUpBtn.text()).toEqual('Travel Now!!!');
  });
  it('Sign up button', () => {
    const register = shallow(<Register />);
    signUpBtn.simulate('click');
    expect(register).toMatchSnapshot();
  });
});
