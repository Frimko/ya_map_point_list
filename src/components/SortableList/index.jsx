import React from 'react';
import { List } from 'antd';
import { SortableContainer } from 'react-sortable-hoc';
import PropTypes from 'prop-types';
import FormPlacemark from 'components/FormPlacemark';
import SortableItem from 'components/SortableItem';

export const SortableList = ({ items, submit, deleteMark }) => (
  <List
    size="small"
    bordered
    header={<FormPlacemark submit={submit}/>}
    dataSource={items}
    renderItem={(item, key) => (
      <SortableItem
        key={item.id}
        item={item}
        deleteMark={deleteMark}
        index={key}
      />
    )}
  />
);

SortableList.propTypes = {
  items: PropTypes.array,
  submit: PropTypes.func,
  deleteMark: PropTypes.func,
};

export default SortableContainer(SortableList);
