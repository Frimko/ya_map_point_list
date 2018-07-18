import React from 'react';
import { shallow } from 'enzyme';
import { SortableList } from '../index';

describe('SortableList component', () => {

  let items = [
    {
      id: '6565656543',
      name: 'Это метка1',
    },
    {
      id: '6565656544',
      name: 'Это метка2',
    },
  ];

  describe('snapshot', () => {
    test('snapshot', () => {
      const onDelete = jest.fn().mockName('delete');
      const submit = jest.fn().mockName('submit');
      expect(shallow(<SortableList items={items} submit={submit} deleteMark={onDelete}/>)).toMatchSnapshot();
    });
  });
});
