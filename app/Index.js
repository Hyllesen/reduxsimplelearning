import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Index extends Component {
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
    this.setState({
      count: this.state.count + 1
    });
  }

  onPressDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    const { countViewStyle, container, welcome } = styles;
    return (
      <View style={container}>
        <View style={countViewStyle}>
          <Button onPress={this.onPressIncrement} title="+" color="#008000" />
          <Text style={welcome}>
            {this.state.count}
          </Text>
          <Button onPress={this.onPressDecrement} title="-" color="#841584" />
        </View>
        <Button onPress={this.clearNumber} title="Clear" color="#030303" />
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
