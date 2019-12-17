import { hot } from 'react-hot-loader/root';
import React from 'react';
// 引入样式部分
import Container from 'react-bootstrap/Container';
// 引人子组件
import ConList from '../containers/conList';
import ConEditor from '../containers/conEditor';

// 通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event]
// on[Event]={() => this.handle[Event]}
// 永远不要修改state中的数据而是用this.setState()替换state中的数据，形成单向数据流
// 创建动态列表时需要为列表项创建一个同级唯一的key属性，否则react将会无法识别
// 有多个子组件时最好把共同的数据和功能都由父组件分发
const App = () => ( // 我何必在这里加行和单元格呢？JSXELEMENT并不是真实存在的
  <Container fluid>
    <ConEditor />
    <ConList />
  </Container>
);
export default hot(App);
