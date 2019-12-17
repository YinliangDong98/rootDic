const initalState = {
  fetchSearch: false,
  fetchSubmit: false,
  word: {
    name: '',
    prop: '',
    mean: '',
    combine: '',
    detail: '',
    part: [],
  },
};
const wordedi = (state = initalState, action) => {
  switch (action.type) {
    case 'FILL_WORD':
      return {
        fetchSearch: false,
        fetchSubmit: false,
        word: {
          name: action.query,
          prop: '',
          mean: '',
          combine: '',
          detail: '',
          part: [],
        },
      };
    case 'NAME_WORD':
      return { ...state, word: { ...state.word, name: action.event.target.value } };
    case 'PROP_WORD':
      return { ...state, word: { ...state.word, prop: action.event.target.value } };
    case 'MEAN_WORD':
      return { ...state, word: { ...state.word, mean: action.event.target.value } };
    case 'COMBINE_WORD':
      return { ...state, word: { ...state.word, combine: action.event.target.value } };
    case 'DETAIL_WORD':
      return { ...state, word: { ...state.word, detail: action.event.target.value } };
    case 'CHECK_PART':
      if (state.word.part.find(
        (value) => (action.value.name === value.name && action.value.mean === value.mean),
      )) {
        return {
          ...state, // 虽然这种是浅拷贝，但是我没有更改数组应该不会报错
          word: {
            ...state.word,
            part: state.part.filter(
              (value) => !(action.value.name === value.name && action.value.mean === value.mean),
            ),
          },
        };
      }
      return {
        ...state,
        word: {
          ...state.word,
          part: [...state.part, action.value],
        },
      };
    case 'SUBMIT_WORD':
      console.log(state);
      return initalState;
    default:
      return state;
  }
};

export default wordedi;
