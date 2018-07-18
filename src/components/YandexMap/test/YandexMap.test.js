import React from 'react';
import { shallow } from 'enzyme';
import YandexMap from '../index';

describe('YandexMap component', () => {

  describe('snapshot', () => {
    test('snapshot', () => {
      expect(shallow(<YandexMap/>)).toMatchSnapshot();
    });
  });
});
