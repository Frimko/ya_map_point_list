export const createStateTransitionTesterReducers = ({ reducer, initialState }) => {
  return (testCaseName, data = { modifiedState: initialState, action: { type: '' } }) => {
    const { modifiedState, action } = data;
    test(testCaseName, () => {
      if (!action) {
        expect(modifiedState).toMatchSnapshot();
      } else {
        expect(reducer(modifiedState, action)).toMatchSnapshot();
      }
    });
  };
};
