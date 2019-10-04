import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { increment, decrement } from '../../redux/actions';

const Page = ({ counter, dispatch }) => (
  <div>
    <Header />
    <div className="columns" style={{ marginTop: '2em' }}>
      <div className="column" />
      <div className="column is-half has-text-centered">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Counter</p>
          </header>
          <div className="card-content">
            <div className="content">
              <p className="is-size-1">{counter}</p>
            </div>
          </div>
          <footer className="card-footer">
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
          </footer>
        </div>
      </div>
      <div className="column" />
    </div>
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
