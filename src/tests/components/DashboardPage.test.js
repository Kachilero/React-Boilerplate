import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashboardPage';

test('should render ExpensesDashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage/>);
  expect(wrapper).toMatchSnapshot();
});
