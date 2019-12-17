import { connect } from 'react-redux';
import RootEdi from '../components/rootEdi';
import {
  inputRoot, submitRoot, requestAllBelong,
} from '../actions/index';

// 把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state) => ({
  rootedi: state.rootedi,
  allbelong: state.allbelong,
});
// 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法，通过执行action来进行操作
const mapDispatchToProps = (dispatch) => ({
  onNameRoot: (event) => {
    dispatch(inputRoot.nameRoot(event));
  },
  onMeanRoot: (event) => {
    dispatch(inputRoot.meanRoot(event));
  },
  onDetailRoot: (event) => {
    dispatch(inputRoot.detailRoot(event));
  },
  onSearchBelong: (name) => {
    dispatch(requestAllBelong(name));
  },
  onCheckBelong: (value) => {
    dispatch(inputRoot.checkBelong(value));
  },
  onSubmitRoot: (root) => {
    if (root.name && root.name.length !== 0) {
      dispatch(submitRoot(root));
    } else {
      alert("'name'不能为空！");
    }
  },
});

const ConRoot = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootEdi);

export default ConRoot;
