import axios from 'axios';
// 这里将action按store的结构分类暴露
export const removeList = (name) => ({ // 提交后的清理工作
  type: 'REMOVE_LIST',
  name,
});

export const changeType = () => ({
  type: 'CHANGE_NOW',
});

export const inputRoot = { // UI部分的action必须和网络部分的分开，否则会出现各种情况
  fillRoot: (query) => ({ type: 'FILL_ROOT', query }),
  nameRoot: (event) => ({ type: 'NAME_ROOT', event }),
  meanRoot: (event) => ({ type: 'MEAN_ROOT', event }),
  detailRoot: (event) => ({ type: 'DETAIL_ROOT', event }),
  searchBelong: () => ({ type: 'SEARCH_BELONG' }),
  checkBelong: (value) => ({ type: 'CHECK_BELONG', value }),
  loadingSubmit: () => ({ type: 'LOADING_SUBMIT' }),
  resolveRoot: () => ({ type: 'RESOLVE_ROOT' }),
};

export const inputWord = {
  fillWord: (query) => ({ type: 'FILL_WORD', query }),
  nameWord: (event) => ({ type: 'NAME_WORD', event }),
  propWord: (event) => ({ type: 'PROP_WORD', event }),
  meanWord: (event) => ({ type: 'MEAN_WORD', event }),
  combineWord: (event) => ({ type: 'COMBINE_WORD', event }),
  detailWord: (event) => ({ type: 'DETAIL_WORD', event }),
  checkPart: (value) => ({ type: 'CHECK_PART', value }),
  submitWord: () => ({ type: 'SUBMIT_WORD' }),
};

export const allBelong = {
  resolveAllBelong: (res) => ({ type: 'RESOLVE_All_BELONG', res }),
  rejectAllBelong: () => ({ type: 'REJECT_All_BELONG' }),
  cleanAllBelong: () => ({ type: 'CLEAN_All_BELONG' }), // 提交的时候清除掉选项
};


export const allPart = {
  searchPart: (name) => ({ type: 'SEARCH_PART', name }),
  cleanPart: () => ({ type: 'CLEAN_PART' }),
};

export function submitRoot(root) { // 使用thunk的函数必须放在最后因为他们使用了const的变量，放在前面引用不到
  return (dispatch) => {
    dispatch(inputRoot.loadingSubmit());
    return axios.post('/root/submit', root)
      .then((response) => {
        dispatch(inputRoot.loadingSubmit());
        dispatch(inputRoot.resolveRoot());
        dispatch(allBelong.cleanAllBelong());
        dispatch(removeList(response.data.name));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function requestAllBelong(name) {
  return (dispatch) => {
    dispatch(inputRoot.searchBelong());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name || name.length === 0) {
          reject();
        }
        dispatch(inputRoot.searchBelong());
        resolve([{ name: 'q', mean: 'w' }, { name: 'qa', mean: 'w' }, { name: 'qx', mean: 'w' }]);
      }, 2000);
    }).then(
      (res) => dispatch(allBelong.resolveAllBelong(res)), // 中间件不管怎样，最后dispatch的必须是正常对象
      () => dispatch(allBelong.rejectAllBelong()),
    );
  };
}
