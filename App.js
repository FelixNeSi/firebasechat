
import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Phone number"
          style={styles.input}
        />
        <TextInput 
          placeholder="Name"
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input :{
    padding: 10,
    borderWidth:1,
    borderColor:'#ccc',
    width:'90%'
  }
});
