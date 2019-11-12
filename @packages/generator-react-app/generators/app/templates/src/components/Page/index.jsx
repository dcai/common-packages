import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { increment, decrement } from '../../redux/actions';
import { Row, Col, Card, CardHeader, CardContent, CardFooter } from '../Grid';

const Page = ({ counter, dispatch }) => (
  <div>
    <Header />
    <Row style={{ marginTop: '2em' }}>
      <Col />
      <Col className="column is-half has-text-centered">
        <Card>
          <CardHeader>
            <p className="card-header-title">Counter</p>
          </CardHeader>
          <CardContent>
            <p className="is-size-1">{counter}</p>
          </CardContent>
          <CardFooter>
            <a
              className="card-footer-item"
              onClick={() => dispatch(increment())}
            >
              +
            </a>
            <a
              className="card-footer-item"
              onClick={() => dispatch(decrement())}
            >
              -
            </a>
          </CardFooter>
        </Card>
      </Col>
      <Col />
    </Row>
  </div>
);

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
