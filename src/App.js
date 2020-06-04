import React, { Component } from "react";
import { connect } from "react-redux";
import { incremented, reduced } from "../src/redux/action/rootAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: null,
    };
  }
  handleClickInc = () => {
    this.setState({
      counterValue: this.state.counterValue + 1,
    });

    this.props.incremented(this.state.counterValue);
  };

  handleClickReduce = () => {
    this.setState({
      counterValue: this.state.counterValue - 1,
    });
    this.props.reduced(this.state.counterValue);
  };
  render() {
    return (
      <div>
        click here for increment the value
        <button onClick={() => this.handleClickInc()}>inc</button>
        {this.props.count}
        clicl here for reduce the value
        <button onClick={() => this.handleClickReduce()}>reduce</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incremented: (data) => dispatch(incremented(data)),
    reduced: (data) => dispatch(reduced(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
