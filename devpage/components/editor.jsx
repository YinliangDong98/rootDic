// 编辑器切换组件
import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ConRoot from '../containers/conRoot';
import ConWord from '../containers/conWord';

function Header({ now, onChangeType }) {
  return (
    <Row>
      <Col md={{ span: 4, offset: 0 }}><h1>Develop Page</h1></Col>
      <Col md={{ span: 2, offset: 6 }}><button type="button" name="change" id="change" value={now} onClick={onChangeType}>{now}</button></Col>
    </Row>
  );
}
Header.propTypes = {
  now: PropTypes.string,
  onChangeType: PropTypes.func.isRequired,
};
Header.defaultProps = {
  now: 'ROOT',
};
function Editor({
  now, onChangeType,
}) {
  if (now === 'ROOT') {
    return (
      <Row>
        <Col>
          <Header now={now} onChangeType={onChangeType} />
          <ConRoot />
        </Col>
      </Row>
    );
  } if (now === 'WORD') {
    return (
      <Row>
        <Col>
          <Header now={now} onChangeType={onChangeType} />
          <ConWord />
        </Col>
      </Row>
    );
  }
  return (
    <div>ERROR</div>
  );
}
Editor.propTypes = {
  now: PropTypes.oneOf(['ROOT', 'WORD']).isRequired,
  onChangeType: PropTypes.func.isRequired,
};
export default Editor;
