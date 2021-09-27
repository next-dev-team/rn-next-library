import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { NText } from 'rn-next-dev';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <NText variant="header">Hello</NText>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
