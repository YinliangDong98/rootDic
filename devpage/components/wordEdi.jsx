// 单词编辑页面
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// 所属单词选择组件
function Rootchecks({ word, allpart, onCheckPart }) {
  if (!allpart) {
    return (<span>ERROR</span>);
  }
  if (allpart.length === 0) {
    return (<Form.Check disabled inline type="checkbox" label="暂无可选项！" />);
  }
  const parts = allpart.map((v) => {
    const names = v.name.join();
    return (
      <Form.Check
        inline
        column
        type="checkbox"
        key={names}
        label={`${names}:${v.mean}`}
        checked={word.part.includes(v)}
        onChange={() => onCheckPart(v)}
      />
    );
  });
  return parts;
}
Rootchecks.propTypes = {
  word: PropTypes.shape({
    name: PropTypes.string,
    prop: PropTypes.string,
    mean: PropTypes.string,
    combine: PropTypes.string,
    detail: PropTypes.string,
    part: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.arrayOf(PropTypes.string),
      mean: PropTypes.string,
    })),
  }),
  onCheckPart: PropTypes.func.isRequired,
  allpart: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.arrayOf(PropTypes.string),
    mean: PropTypes.string,
  })),
};
Rootchecks.defaultProps = {
  word: null,
  allpart: [],
};
// 词根编辑组件
function WordEdi({
  wordedi,
  allpart,
  onNameWord,
  onPropWord,
  onMeanWord,
  onCombineWord,
  onDetailWord,
  onSearchPart,
  onCheckPart,
  onSubmitWord,
}) {
  return (
    <Row>
      <Col md={{ span: 8, offset: 2 }}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>name:</Form.Label>
              <Form.Control type="text" placeholder="name" value={wordedi.word.name} onChange={onNameWord} />
            </Form.Group>
            <Form.Group as={Col} controlId="prop">
              <Form.Label>prop:</Form.Label>
              <Form.Control type="text" placeholder="prop" value={wordedi.word.prop} onChange={onPropWord} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="mean">
              <Form.Label>mean:</Form.Label>
              <Form.Control type="text" placeholder="mean" value={wordedi.word.mean} onChange={onMeanWord} />
            </Form.Group>
            <Form.Group as={Col} controlId="combine">
              <Form.Label>combine:</Form.Label>
              <Form.Control type="text" placeholder="combine" value={wordedi.word.combine} onChange={onCombineWord} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md={{ span: 6, offset: 0 }} controlId="detail">
              <Form.Label>detail:</Form.Label>
              <Form.Control type="text" placeholder="detail" value={wordedi.word.detail} onChange={onDetailWord} />
            </Form.Group>
            <Col md={{ span: 1, offset: 2 }}>
              <Button type="button" onClick={() => onSearchPart(wordedi.word.name)}>SEARCH</Button>
            </Col>
          </Form.Row>
          <Form.Group as={Row}>
            <Rootchecks word={wordedi.word} onCheckPart={onCheckPart} allpart={allpart} />
          </Form.Group>
          <Button type="button" onClick={() => onSubmitWord(wordedi.word.name)}>SUBMIT</Button>
        </Form>
      </Col>
    </Row>
  );
}
WordEdi.propTypes = {
  wordedi: PropTypes.shape({
    fetchSearch: PropTypes.bool,
    fetchSubmit: PropTypes.bool,
    word: PropTypes.shape({
      name: PropTypes.string,
      prop: PropTypes.string,
      mean: PropTypes.string,
      combine: PropTypes.string,
      detail: PropTypes.string,
      part: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.arrayOf(PropTypes.string),
        mean: PropTypes.string,
      })),
    }),
  }),
  allpart: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.arrayOf(PropTypes.string),
    mean: PropTypes.string,
  })),
  onNameWord: PropTypes.func.isRequired,
  onPropWord: PropTypes.func.isRequired,
  onMeanWord: PropTypes.func.isRequired,
  onCombineWord: PropTypes.func.isRequired,
  onDetailWord: PropTypes.func.isRequired,
  onSearchPart: PropTypes.func.isRequired,
  onCheckPart: PropTypes.func.isRequired,
  onSubmitWord: PropTypes.func.isRequired,
};
WordEdi.defaultProps = {
  wordedi: {
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
  },
  allpart: [],
};
export default WordEdi;
