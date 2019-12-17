const initalState = [];
const unexists = (state = initalState, action) => {
  switch (action.type) {
    case 'REMOVE_LIST':
      return state.filter((v) => {
        if (typeof action.name === 'string') {
          if (action.name === v.query) {
            return false;
          }
          return true;
        } if (Array.isArray(action.name)) {
          for (let i = 0; i < action.name.length; i += 1) {
            if (action.name[i] === v.query) {
              return false;
            }
          }
          return true;
        }
        return true; // 一定要在箭头函数最后返回一个值
      });
    default:
      return state;
  }
};

export default unexists;
