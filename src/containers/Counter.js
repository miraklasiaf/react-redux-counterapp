import React, { Component } from 'react'
import { connect } from 'react-redux';
import CounterOutput from '../components/CounterOutput'
import CounterControl from '../components/CounterControl'
import * as actionCreators from '../store/actions'

class Counter extends Component {
    render() {
        return (
          <div>
            <CounterOutput value={this.props.counter} />
            <CounterControl label="Increment" clicked={this.props.increment} />
            <CounterControl label="Decrement" clicked={this.props.decrement} />
            <CounterControl label="Add 5" clicked={this.props.adder} />
            <CounterControl label="Subtract 5" clicked={this.props.substract} />
            <hr />
            <button onClick={() => this.props.addResult(this.props.counter)}>Store Result</button>
            <ul>
              {this.props.results.map(result => (
                  <li onClick={() => this.props.deleteResult(result.id)} key={result.id} >
                      {result.value}
                  </li>
              ))}
            </ul>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.ctr.counter,
    results: state.res.results,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actionCreators.increment()),
  decrement: () => dispatch(actionCreators.decrement()),
  adder: () => dispatch(actionCreators.adder(5)),
  substract: () => dispatch(actionCreators.substract(5)),
  addResult: res => dispatch(actionCreators.addResult(res)),
  deleteResult: id => dispatch(actionCreators.deleteResult(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);