import React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SortableList from 'components/SortableList';
import { setNewMark, deleteMark, changeSortMark } from 'actions/map';

import { MarkListWrap, draggable } from './styled';


export class DraggableListPlacemark extends React.PureComponent {

  onSortEnd = ({ oldIndex, newIndex }) => this.props.changeSortMark(arrayMove(this.props.placemarks, oldIndex, newIndex));

  handleSubmit = (value) => this.props.setNewMark(value);

  deleteMark = (id) => this.props.deleteMark(id);

  render() {
    return (
      <MarkListWrap>
        <SortableList
          axis='y'
          lockAxis='y'
          onSortEnd={this.onSortEnd}
          helperClass={draggable}
          distance={5}
          items={this.props.placemarks}
          submit={this.handleSubmit}
          deleteMark={this.deleteMark}
        />
      </MarkListWrap>
    );
  }
}

DraggableListPlacemark.propTypes = {
  placemarks: PropTypes.array,
  changeSortMark: PropTypes.func,
  deleteMark: PropTypes.func,
  setNewMark: PropTypes.func,
};

const mapStateToProps = ({ placemarks }) => ({ placemarks });

export default connect(mapStateToProps, { setNewMark, deleteMark, changeSortMark })(DraggableListPlacemark);
