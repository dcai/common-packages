import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import { counterActions } from '../../redux/actions';
import { Row, Col, Card, CardHeader, CardContent, CardFooter } from '../Grid';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const { increment, decrement } = counterActions;
  return (
    <Card>
      <CardHeader>
        <p className="card-header-title">Counter</p>
      </CardHeader>
      <CardContent>
        <p className="is-size-1 has-text-centered">{counter}</p>
      </CardContent>
      <CardFooter>
        <a className="card-footer-item" onClick={() => dispatch(increment())}>
          +
        </a>
        <a className="card-footer-item" onClick={() => dispatch(decrement())}>
          -
        </a>
      </CardFooter>
    </Card>
  );
};

const Page = () => {
  return (
    <div>
      <Header />
      <Row style={{ marginTop: '2em' }}>
        <Col />
        <Col className="column is-half">
          <Counter />
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default Page;
