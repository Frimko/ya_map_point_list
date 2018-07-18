import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../index';

describe('Layout component ', () => {
    let container;

    beforeEach(() => {
      container = shallow(<Layout/>);
    });

    test('snapshot', () => {
      expect(container).toMatchSnapshot();
    });
});
