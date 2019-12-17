import { connect } from 'react-redux';
import Editor from '../components/editor'; // 导入默认值不需要加大括号
import { changeType } from '../actions/index'; // 导入非默认值必须要加大括号，否则就是undefined

// 把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state) => ({
  now: state.now,
});
// 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法，通过执行action来进行操作
const mapDispatchToProps = (dispatch) => ({
  onChangeType: () => {
    dispatch(changeType());
  },
});

const ConEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Editor);

export default ConEditor;
