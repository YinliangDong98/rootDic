const initalState = [];
const allpart = (state = initalState, action) => {
  switch (action.type) {
    case 'SEARCH_PART':
      return [{ name: ['q'], mean: 'w' }, { name: ['qa'], mean: 'w' }, { name: ['qx'], mean: 'w' }];
    case 'CLEAN_PART':
      return initalState;
    default:
      return state;
  }
};
export default allpart;
