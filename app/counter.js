import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onPressIncrement = this.onPressIncrement.bind(this);
    this.onPressDecrement = this.onPressDecrement.bind(this);
    this.clearNumber = this.clearNumber.bind(this);
  }

  clearNumber() {
    this.setState({
      count: 0
    });
  }

  onPressIncrement() {
    this.props.increment();
  }

  onPressDecrement() {
    this.props.decrement();
  }

  render() {
    const { increment, decrement, count, clear } = this.props;
    const { countViewStyle, container, welcome } = styles;
    return (
      <View style={container}>
        <View style={countViewStyle}>
          <Button onPress={increment} title="+" color="#008000" />
          <Text style={welcome}>
            {count}
          </Text>
          <Button onPress={decrement} title="-" color="#841584" />
        </View>
        <Button onPress={clear} title="Clear" color="#030303" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  }
});

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    count: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    clear: () => dispatch({ type: "CLEAR" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
