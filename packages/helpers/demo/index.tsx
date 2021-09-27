import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class ButtonDemo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>按钮类型</Text>
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
