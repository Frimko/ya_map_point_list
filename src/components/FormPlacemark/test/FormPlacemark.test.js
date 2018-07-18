import React from 'react';
import { mount } from 'enzyme';
import FormPlacemark from '../index';

describe('FormPlacemark component', () => {
  describe('snapshots', () => {
    let container;

    beforeEach(() => {
      container = mount(<FormPlacemark/>);
    });

    test('with error', () => {
      const textarea = container.find('input');
      textarea.simulate('change', { target: { value: '1' } });
      expect(container).toMatchSnapshot();
    });

    test('without error', () => {
      const textarea = container.find('input');
      textarea.simulate('change', { target: { value: '133' } });
      expect(container).toMatchSnapshot();
    });
  });
});
