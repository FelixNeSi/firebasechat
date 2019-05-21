import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
import firebase from 'firebase';
import User from '../User';


export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBd5vFs_ABLiFT3UVeVVPFqXSrJrjvplX0",
      authDomain: "fir-chat-84be6.firebaseapp.com",
      databaseURL: "https://fir-chat-84be6.firebaseio.com",
      projectId: "fir-chat-84be6",
      storageBucket: "fir-chat-84be6.appspot.com",
      messagingSenderId: "1061049459762",
      appId: "1:1061049459762:web:6b899d5a7dd15a15"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.phone = await AsyncStorage.getItem('userPhone');
    this.props.navigation.navigate(User.phone ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}