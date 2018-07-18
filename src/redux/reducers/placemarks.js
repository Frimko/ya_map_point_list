import { createReducer } from 'redux-act';
import uniqid from 'uniqid';
import reject from 'lodash/reject';
import config from 'src/config';

import {
  setNewMark,
  deleteMark,
  changeSortMark,
  changeCoordinatesMark,
} from 'actions/map';

const initialState = [
  {
    id: uniqid(),
    coordinates: [
      55.796702547976345,
      37.782572021483865,
    ],
    name: 'Это метка1',
  },
  {
    id: uniqid(),
    coordinates: [
      55.67938453142209,
      37.47520507812455,
    ],
    name: 'Это метка2',
  },
  {
    id: uniqid(),
    coordinates: [
      55.84690514362938,
      37.62353544921852,
    ],
    name: 'Это метка3',
  },
  {
    id: uniqid(),
    coordinates: [
      55.68559165521214,
      37.764969482421186,
    ],
    name: 'Это метка4',
  },
  {
    id: uniqid(),
    coordinates: [
      55.79328258155638,
      37.46009887695268,
    ],
    name: 'Это метка5',
  },
  {
    id: uniqid(),
    coordinates: [
      55.795603556125,
      37.78007568359225,
    ],
    name: 'Это метка6',
  },
];

export default createReducer({
  [setNewMark]: (state, payload) => {
    return [
      ...state,
      {
        id: uniqid(),
        coordinates: config.mapCentrCoordinates,
        name: payload.name,
      },
    ];
  },

  [deleteMark]: (state, payload) => {
    return reject(state, ['id', payload.id]);
  },

  [changeSortMark]: (state, payload) => {
    return payload.data;
  },

  [changeCoordinatesMark]: (state, payload) => {
    const newState = [...state];
    newState[payload.id].coordinates = payload.coordinates;
    return newState;
  },
}, initialState);
