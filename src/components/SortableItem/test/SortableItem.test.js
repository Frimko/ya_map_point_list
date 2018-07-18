import React from 'react';
import { mount, shallow } from 'enzyme';
import { SortableItem } from '../index';

describe('SortableItem component', () => {
  let item = {
    id: '6565656543',
    name: 'Это метка1',
  };

  describe('snapshot', () => {
    test('snapshot', () => {
      const onDelete = jest.fn().mockName('delete');
      expect(shallow(<SortableItem item={item} deleteMark={onDelete} />)).toMatchSnapshot();
    });
  });

  describe('functional test - click to delete icon', () => {
    test('onDelete', () => {
      const onDelete = jest.fn().mockName('delete');
      const container = mount(<SortableItem item={item} deleteMark={onDelete} />);

      const icon = container.find('i');
      icon.simulate('click');
      expect(onDelete).toBeCalledWith(item.id);
    });
  });
});
