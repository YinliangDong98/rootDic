import { connect } from 'react-redux';
import WordEdi from '../components/wordEdi';
import {
  inputWord, removeList, allPart,
} from '../actions/index';

// 把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state) => ({
  wordedi: state.wordedi,
  allpart: state.allpart,
});
// 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法，通过执行action来进行操作
const mapDispatchToProps = (dispatch) => ({
  onNameWord: (event) => {
    dispatch(inputWord.nameWord(event));
  },
  onPropWord: (event) => {
    dispatch(inputWord.propWord(event));
  },
  onMeanWord: (event) => {
    dispatch(inputWord.meanWord(event));
  },
  onCombineWord: (event) => {
    dispatch(inputWord.combineWord(event));
  },
  onDetailWord: (event) => {
    dispatch(inputWord.detailWord(event));
  },
  onSearchPart: (name) => {
    dispatch(allPart.searchPart(name));
  },
  onCheckPart: (value) => {
    dispatch(inputWord.checkPart(value));
  },
  onSubmitWord: (name) => {
    dispatch(inputWord.submitWord());
    dispatch(allPart.cleanPart());
    dispatch(removeList(name));
  },
});

const ConWord = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WordEdi);

export default ConWord;
