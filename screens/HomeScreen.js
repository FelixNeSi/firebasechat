import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import User from '../User';
import styles from '../constants/styles'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Chats'
    }

    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text >
                    {User.phone}
                </Text>
                <TouchableOpacity onPress={this._logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}