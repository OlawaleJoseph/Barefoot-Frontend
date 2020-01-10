import { shallow } from 'enzyme';
import React from 'react';
import Navbar from '../../components/navbar';
import Login from '../../components/login';

describe('Landing Page Navbar', () => {
  const wrapper = shallow(<Navbar />);
  describe('Brand', () => {
    it('Should render properly', () => {
      const brand = wrapper.find('.navbar-brand');
      expect(brand).toHaveLength(1);
      expect(brand.text()).toEqual(' BareFoot ');
    });
  });

  describe('Navigation Links', () => {
    const navLinks = wrapper.find('.nav-link');
    it('Should render properly', () => {
      const navList = wrapper.find('.navbar-collapse');
      expect(navList).toHaveLength(1);
      expect(navLinks).toHaveLength(4);
    });
    it('Should render Login Button', () => {
      const loginBtn = wrapper.find('.login-btn');
      const login = shallow(<Login />);
      expect(loginBtn).toHaveLength(1);
      expect(loginBtn.text()).toEqual('LOGIN');
      expect(login).toMatchSnapshot();
    });
  });
});
