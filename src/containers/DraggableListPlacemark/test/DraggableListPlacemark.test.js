import React from 'react';
import { shallow, mount } from 'enzyme';
import { List, Icon, Input, Form } from 'antd';

import { DraggableListPlacemark } from '../index';

describe('test DraggableListPlacemark component', () => {


  const props = {
    placemarks: [
      {
        id: 111,
        coordinates: [
          55.796702547976345,
          37.782572021483865,
        ],
        name: 'Это метка1',
      },
      {
        id: 222,
        coordinates: [
          55.67938453142209,
          37.47520507812455,
        ],
        name: 'Это метка2',
      },
      {
        id: 333,
        coordinates: [
          55.84690514362938,
          37.62353544921852,
        ],
        name: 'Это метка3',
      },
      {
        id: 444,
        coordinates: [
          55.68559165521214,
          37.764969482421186,
        ],
        name: 'Это метка4',
      },
      {
        id: 555,
        coordinates: [
          55.79328258155638,
          37.46009887695268,
        ],
        name: 'Это метка5',
      },
      {
        id: 666,
        coordinates: [
          55.795603556125,
          37.78007568359225,
        ],
        name: 'Это метка6',
      },
    ],
    setNewMark: jest.fn().mockName('setNewMark'),
    deleteMark: jest.fn().mockName('deleteMark'),
    changeSortMark: jest.fn().mockName('changeSortMark'),
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <DraggableListPlacemark {...props}/>,
    );
  });

  test('snapshot', () => {
    expect(shallow(
      <DraggableListPlacemark {...props}/>,
    )).toMatchSnapshot();
  });

  test('delete item', () => {
    wrapper.find(List.Item).find(Icon).forEach((node, index) => {
      node.simulate('click', { preventDefault: () => ({}) });
      expect(props.deleteMark).toBeCalledWith(props.placemarks[index].id);
    });
  });

  test('new item submit', () => {
    const text = 'test';
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: text } });
    wrapper.find(Form).simulate('submit', { preventDefault: () => ({}) });
    expect(props.setNewMark).toBeCalledWith(text);
  });

  test('new item error', () => {
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 1 } });
    wrapper.find(Form).simulate('submit', { preventDefault: () => ({}) });
    expect(props.setNewMark).not.toBeCalledWith(1);
  });

  test('drag item', () => {
    // к сожалению через энзим протестировать не выйдет, а юзать react-dom/test-utils то еще приключение
  });
});
