import React from 'react';
import { shallow } from 'enzyme';
import CartButton from './CartButton';

describe('Component CartButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartButton />);
    expect(component).toBeTruthy();
  });
});
