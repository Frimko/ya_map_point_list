import React from 'react';
import { Placemark, Polyline } from 'react-yandex-maps';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCoordinatesMark } from 'actions/map';

class Placemarks extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      lineCoordinates: this.getLineCoordinates(),
    };
  }

  updateLine = () => {
    this.setState({ lineCoordinates: this.getLineCoordinates() });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.placemarks !== this.props.placemarks) {
      this.updateLine();
    }
  }

  onDragEnd = (event, key) => {
    const { changeCoordinatesMark } = this.props;

    const markerCoordinates = event.originalEvent.target.geometry._coordinates;
    changeCoordinatesMark(key, markerCoordinates);
  };

  onChangeLine = (event, key) => {
    const { placemarks } = this.props;

    const markerCoordinates = event._sourceEvent.originalEvent.target.geometry._coordinates;
    const newStatePlacemarks = placemarks;
    newStatePlacemarks[key].coordinates = markerCoordinates;
    this.setState({ lineCoordinates: this.getLineCoordinates(newStatePlacemarks) });
  };

  getPlacemark = () => {
    const { placemarks } = this.props;

    return placemarks.map((item, key) => (
      <Placemark
        key={item.id}
        geometry={{
          coordinates: item.coordinates,
        }}
        properties={{
          balloonContent: item.name,
        }}
        options={{
          draggable: true,
        }}
        onDragEnd={(e) => this.onDragEnd(e, key)}
        onDrag={(e) => this.onChangeLine(e, key)}
      />
    ));

  };

  getLineCoordinates = (placemarks = false) => {
    if (placemarks) {
      return placemarks.map((item) => (item.coordinates));
    } else {
      return this.props.placemarks.map((item) => (item.coordinates));
    }
  };

  getLine = () => {
    return (
      <Polyline
        geometry={{
          coordinates: this.state.lineCoordinates,
        }}
        options={{
          strokeWidth: 4,
        }}
      />
    );
  };

  render() {
    const { placemarks } = this.props;
    if (placemarks) {
      return (
        <React.Fragment>
          {this.getPlacemark()}
          {this.getLine()}
        </React.Fragment>
      );
    } else {
      return null;
    }

  }
}

Placemarks.propTypes = {
  placemarks: PropTypes.array,
  changeCoordinatesMark: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    placemarks: state.placemarks,
  };
};

export default connect(mapStateToProps, { changeCoordinatesMark })(Placemarks);
