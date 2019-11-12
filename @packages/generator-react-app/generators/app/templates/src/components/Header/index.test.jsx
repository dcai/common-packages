import React from 'react';
import enzyme from 'enzyme';
import Header from './index';

test('render a header', () => {
  const wrapper = enzyme.shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('Brand').dive()).toMatchSnapshot();
});
