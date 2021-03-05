import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

class Counter extends Component {
	state = {
		counter: 0,
	};

	counterChangedHandler = (action, value) => {
		switch (action) {
			case "inc":
				this.setState((prevState) => {
					return { counter: prevState.counter + 1 };
				});
				break;
			case "dec":
				this.setState((prevState) => {
					return { counter: prevState.counter - 1 };
				});
				break;
			case "add":
				this.setState((prevState) => {
					return { counter: prevState.counter + value };
				});
				break;
			case "sub":
				this.setState((prevState) => {
					return { counter: prevState.counter - value };
				});
				break;
		}
	};

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add 5" clicked={this.props.onAddFiveCounter} />
				<CounterControl label="Subtract 5" clicked={this.props.onSubFiveCounter} />
				<hr />
				<button onClick={() => this.props.onStoreResult(this.props.ctr)}>store result</button>
				<ul>
					{this.props.storedResult.map((strResult) => (
						<li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>
							{strResult.value}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.ctr.counter, //counter
		storedResult: state.res.results,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
		onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
		onAddFiveCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
		onSubFiveCounter: () => dispatch({ type: actionTypes.SUB, value: 5 }),
		onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
		onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// if no store needed can do  [... connect( "null" , mapDispatchToProps ) ...]
