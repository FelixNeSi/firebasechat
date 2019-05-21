
import React from 'react';
import {StyleSheet, Text, Alert, AsyncStorage, TouchableOpacity, TextInput, View} from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    phone: '',
    name: ''
  }

  handleChange = key => val => {
    this.setState({ [key]: val})
  }

  submitForm = async () => {
    if(this.state.phone.length < 10){
      Alert.alert('Error', 'Wrong phone number')
    }else if (this.state.name.length < 3){
      Alert.alert('Error', 'Wrong name')
    }else{
      //save user data
      await AsyncStorage.setItem('userPhone',this.state.phone)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder="Phone number"
          keyboardType="number-pad"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleChange('phone')}
        />
        <TextInput 
          placeholder="Name"
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleChange('name')}
        />
        <TouchableOpacity onPress={this.submitForm}>
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
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
    width:'90%',
    marginBottom:10,
    borderRadius:5
  },
  btnText: {
    color:'darkblue',
    fontSize:20
  }
});