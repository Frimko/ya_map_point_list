import { createAction } from 'redux-act';

export const setNewMark = createAction('SET_NEW_MARK', (name) => ({ name }));

export const deleteMark = createAction('DELETE_MARK', (id) => ({ id }));

export const changeSortMark = createAction('CHANGE_SORT_MARK', (data) => ({ data }));

export const changeCoordinatesMark = createAction('CHANGE_COORDINATES_MARK', (id, coordinates) => ({ id, coordinates }));

