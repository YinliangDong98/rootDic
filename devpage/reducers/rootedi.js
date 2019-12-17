const initalState = {
  fetchSearch: false,
  fetchSubmit: false,
  root: {
    name: [],
    belong: [],
    mean: '',
    detail: '',
  },
};
const rootedi = (state = initalState, action) => {
  switch (action.type) {
    case 'FILL_ROOT':
      return {
        fetchSearch: false,
        fetchSubmit: false,
        root: {
          name: [action.query],
          belong: [],
          mean: '',
          detail: '',
        },
      };
    case 'NAME_ROOT':
      return { ...state, root: { ...state.root, name: action.event.target.value.split(',') } };
    case 'MEAN_ROOT':
      return { ...state, root: { ...state.root, mean: action.event.target.value } };
    case 'DETAIL_ROOT':
      return { ...state, root: { ...state.root, detail: action.event.target.value } };
    case 'SEARCH_BELONG':
      return { ...state, fetchSearch: !state.fetchSearch };
    case 'CHECK_BELONG':
      if (state.root.belong.includes(action.value)) {
        return {
          ...state,
          root: {
            ...state.root,
            belong: state.root.belong.filter((v) => !(v === action.value)),
          },
        };
      }
      return {
        ...state,
        root: {
          ...state.root,
          belong: [...state.belong, action.value],
        },
      };
    case 'RESOLVE_ROOT':
      return initalState;
    case 'LOADING_SUBMIT':
      return { ...state, fetchSubmit: !state.fetchSubmit };
    default:
      return state;
  }
};

export default rootedi;
