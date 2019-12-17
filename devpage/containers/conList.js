import { connect } from 'react-redux';
import List from '../components/list';
import { inputRoot, inputWord } from '../actions/index';

const mapStateToProps = (state) => ({
  unexists: state.unexists,
});

const mapDispatchToProps = (dispatch) => ({
  onFill: (query) => {
    dispatch(inputRoot.fillRoot(query));
    dispatch(inputWord.fillWord(query));
  },
});

const ConList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ConList;
