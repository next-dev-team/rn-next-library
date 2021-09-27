import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from 'rn-next-dev';

export default class ButtonDemo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>按钮类型</Text>
        <Button>11</Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  textStyle: {
    color: '#d3d3d3',
    fontSize: 16,
    marginVertical: 10,
  },
});
