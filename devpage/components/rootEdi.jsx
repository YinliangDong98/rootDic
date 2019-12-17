// 词根编辑页面
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// 所属单词选择组件
function Wordchecks({ root, allbelong, onCheckBelong }) { // 这两个check其实是可以复用的
  if (!allbelong) {
    return (<span>ERROR</span>);
  }
  if (allbelong.length === 0) {
    return (
      <Form.Check disabled inline type="checkbox" label="暂无可选项！" />
    );
  }
  const belongs = allbelong.map((v) => (
    <Form.Check
      inline
      type="checkbox"
      key={v.name}
      label={`${v.name}:${v.mean}`}
      checked={root.belong.includes(v)}
      onChange={() => onCheckBelong(v)}
    />
  )); // 这个数值验证居然连对象也可以传，这一路传过去都是址，如果我在reducer里换个址恐怕就要报错了
  return belongs;
}
Wordchecks.propTypes = {
  root: PropTypes.shape({
    name: PropTypes.arrayOf(PropTypes.string),
    belong: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      mean: PropTypes.string,
    })),
    mean: PropTypes.string,
    detail: PropTypes.string,
  }),
  onCheckBelong: PropTypes.func.isRequired,
  allbelong: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    mean: PropTypes.string,
  })),
};
Wordchecks.defaultProps = {
  root: null,
  allbelong: [],
};
// 词根编辑组件
function RootEdi({
  rootedi,
  allbelong,
  onNameRoot,
  onMeanRoot,
  onDetailRoot,
  onSearchBelong,
  onCheckBelong,
  onSubmitRoot,
}) {
  return ( // Row下面必须是Col否则虽然css不会报错但是会出各种问题
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>name:</Form.Label>
              <Form.Control type="text" placeholder="name" value={rootedi.root.name.join()} onChange={onNameRoot} />
            </Form.Group>
            <Form.Group as={Col} controlId="mean">
              <Form.Label>mean:</Form.Label>
              <Form.Control type="text" placeholder="mean" value={rootedi.root.mean} onChange={onMeanRoot} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 6, offset: 0 }} controlId="detail">
              <Form.Label>detail:</Form.Label>
              <Form.Control type="text" placeholder="detail" value={rootedi.root.detail} onChange={onDetailRoot} />
            </Form.Group>
            <Col md={{ span: 1, offset: 2 }}>
              {
                rootedi.fetchSearch ? <Button type="button" disabled>LOADING</Button> : <Button type="button" onClick={() => onSearchBelong(rootedi.root.name)}>SEARCH</Button>
              }
            </Col>
          </Form.Row>
          <Form.Group as={Row}>
            <Col>
              <Wordchecks root={rootedi.root} onCheckBelong={onCheckBelong} allbelong={allbelong} />
            </Col>
          </Form.Group>
          {rootedi.fetchSubmit ? <Button type="button" disabled>LOADING</Button> : <Button type="button" onClick={() => onSubmitRoot(rootedi.root)}>SUBMIT</Button>}
        </Form>
      </Col>
    </Row>
  );
}
RootEdi.propTypes = {
  rootedi: PropTypes.shape({
    fetchSearch: PropTypes.bool,
    fetchSubmit: PropTypes.bool,
    root: PropTypes.shape({
      name: PropTypes.arrayOf(PropTypes.string),
      belong: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        mean: PropTypes.string,
      })),
      mean: PropTypes.string,
      detail: PropTypes.string,
    }),
  }),
  allbelong: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    mean: PropTypes.string,
  })),
  onNameRoot: PropTypes.func.isRequired,
  onMeanRoot: PropTypes.func.isRequired,
  onDetailRoot: PropTypes.func.isRequired,
  onSearchBelong: PropTypes.func.isRequired,
  onCheckBelong: PropTypes.func.isRequired,
  onSubmitRoot: PropTypes.func.isRequired,
};
RootEdi.defaultProps = {
  rootedi: {
    fetchSearch: false,
    fetchSubmit: false,
    root: {
      name: [],
      belong: [],
      mean: '',
      detail: '',
    },
  },
  allbelong: [],
};
export default RootEdi;
