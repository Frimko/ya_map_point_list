import React from 'react';
import { List, Icon } from 'antd';
import { SortableElement } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

export class SortableItem extends React.PureComponent {

  deleteMark = () => {
    const { deleteMark, item: { id } } = this.props;
    deleteMark(id);
  };

  render() {
    const { item } = this.props;
    return (
      <List.Item actions={[<Icon key="close" type="close" onClick={this.deleteMark}/>]}>
        <div>{item.name}</div>
      </List.Item>
    );
  }
}

SortableItem.propTypes = {
  item: PropTypes.object,
  deleteMark: PropTypes.func,
};

export default SortableElement(SortableItem);
