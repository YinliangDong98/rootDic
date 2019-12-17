/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// 无状态组件在这个airbnb规则下必须写为函数形式，新加的注释意味着在生产环境会被删掉
// 函数式组件的参数不能用this.props而是props因为props作为对象被传入了参数

// 列表项组件，一个开始
function Item({ query, onFill }) {
  return ( // 必须这么写，否则函数会在渲染时直接调用，光写函数名的话无法传参
    <ListGroup.Item md={{ span: 8, offset: 2 }} as={Col} action className="items" onClick={() => onFill(query)}>{query}</ListGroup.Item>
  );
}
Item.propTypes = {
  query: PropTypes.string.isRequired,
  onFill: PropTypes.func.isRequired,
};
// 列表组件
function List({ unexists, onFill }) {
  if (!unexists) {
    return (<ListGroup as={Row}><ListGroup.Item md={{ span: 8, offset: 2 }} as={Col} disabled className="items">ERROR</ListGroup.Item></ListGroup>);
  } if (unexists.length === 0) {
    return (<ListGroup as={Row}><ListGroup.Item md={{ span: 8, offset: 2 }} as={Col} disabled className="items">没有新单词</ListGroup.Item></ListGroup>);
  }
  const items = unexists.map((v) => <Item key={v.id} query={v.query} onFill={onFill} />);
  return (
    <ListGroup as={Row}>
      {items}
    </ListGroup>
  );
}
List.propTypes = {
  unexists: PropTypes.arrayOf(PropTypes.shape({
    query: PropTypes.string,
    id: PropTypes.string, // 获取的时候看看id在不在对象上面
  })),
  onFill: PropTypes.func.isRequired,
};
List.defaultProps = {
  unexists: [],
}; // 终于几把弄完了-_-||，这都没人知道我也可以写教程了
export default List;
