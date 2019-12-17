const initalState = [];
const allbelong = (state = initalState, action) => {
  switch (action.type) {
    case 'REJECT_All_BELONG':
      return initalState;
    case 'RESOLVE_All_BELONG':
      return action.res;
    case 'CLEAN_ALL_BELONG':
      return initalState;
    default:
      return state;
  }
};
export default allbelong;
