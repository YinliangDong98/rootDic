const initalState = 'ROOT';
const now = (state = initalState, action) => {
  switch (action.type) {
    case 'CHANGE_NOW':
      return (state === 'ROOT' ? 'WORD' : 'ROOT');
    default:
      return state;
  }
};

export default now;
