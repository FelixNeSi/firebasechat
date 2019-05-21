import React from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import User from '../User';

export default class HomeScreen extends React.Component {

    _logout = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <View>
                <Text>
                    {User.phone}
                </Text>
                <TouchableOpacity onPress={this._logout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}