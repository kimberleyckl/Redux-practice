import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreators from "../../store/actions/index";

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
		onIncrementCounter: () => dispatch(actionCreators.increment()),
		onDecrementCounter: () => dispatch(actionCreators.decrement()),
		onAddFiveCounter: () => dispatch(actionCreators.add(5)),
		onSubFiveCounter: () => dispatch(actionCreators.sub(5)),
		onStoreResult: (result) => dispatch(actionCreators.store_result(result)),
		onDeleteResult: (id) => dispatch(actionCreators.delete_result(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// if no store needed can do  [... connect( "null" , mapDispatchToProps ) ...]
