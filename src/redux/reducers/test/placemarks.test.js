import { createStateTransitionTesterReducers } from 'jest_utils';
import reducer from '../placemarks';

const initialState = [
  {
    id: 'lllsss7',
    coordinates: [
      55.67938453142209,
      37.47520507812455,
    ],
    name: 'Это метка2',
  },
  {
    id: 'ggg88',
    coordinates: [
      55.796702547976345,
      37.782572021483865,
    ],
    name: 'Это метка1',
  },
];

describe('test auth reducer', () => {
  const testStateTransition = createStateTransitionTesterReducers({ reducer, initialState });

  describe('snapshots', () => {
    testStateTransition('initial state');

    testStateTransition('setNewMark', {
      action: {
        type: 'SET_NEW_MARK',
        payload: {
          name: 'новая метка 666',
        },
      },
      modifiedState: [
        ...initialState,
      ],
    });

    testStateTransition('deleteMark', {
      action: {
        type: 'DELETE_MARK',
        payload: {
          id: '5566f',
        },
      },
      modifiedState: [
        ...initialState,
        {
          id: '5566f',
          coordinates: [
            55.796702547976345,
            37.782572021483865,
          ],
          name: 'Это метка1',
        },
      ],
    });
    testStateTransition('changeSortMark', {
      action: {
        type: 'CHANGE_SORT_MARK',
        payload: {
          data: [
            {
              id: 'ggg88',
              coordinates: [
                55.796702547976345,
                37.782572021483865,
              ],
              name: 'Это метка1',
            },
            {
              id: 'lllsss7',
              coordinates: [
                55.67938453142209,
                37.47520507812455,
              ],
              name: 'Это метка2',
            },
          ],
        },
      },
      modifiedState: [
        {
          id: 'lllsss7',
          coordinates: [
            55.67938453142209,
            37.47520507812455,
          ],
          name: 'Это метка2',
        },
        {
          id: 'ggg88',
          coordinates: [
            55.796702547976345,
            37.782572021483865,
          ],
          name: 'Это метка1',
        },
      ],
    });

    testStateTransition('changeCoordinatesMark', {
      action: {
        type: 'CHANGE_SORT_MARK',
        payload: {
          id: 'lllsss7',
          coordinates: [
            666,
            777,
          ],
        },
      },
      modifiedState: [
        {
          id: 'lllsss7',
          coordinates: [
            55.67938453142209,
            37.47520507812455,
          ],
          name: 'Это метка2',
        },
        {
          id: 'ggg88',
          coordinates: [
            55.796702547976345,
            37.782572021483865,
          ],
          name: 'Это метка1',
        },
      ],
    });
  });
});
