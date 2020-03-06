import React, { Component } from 'react'
import { connect } from 'react-redux';
import CounterOutput from '../components/CounterOutput'
import CounterControl from '../components/CounterControl'
import * as types from '../store/actions';

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

const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        results: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: types.INCREMENT }),
        decrement: () => dispatch({ type: types.DECREMENT }),
        adder:  () => dispatch({ type: types.ADDER, payload: 5 }),
        substract: () => dispatch({ type: types.SUBSTRACT, payload: 5 }),
        addResult: (res) => dispatch({ type: types.ADD_RESULT, result: res }),
        deleteResult: (id) => dispatch({ type: types.DELETE_RESULT, id: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);