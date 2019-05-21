import React from 'react';
import { SafeAreaView, Text, TextInput } from 'react-native';
import User from '../User';
import styles from '../constants/styles';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile'
    }

    state = {
        name: User.name
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 20 }}>
                    {User.phone}
                </Text>
                <Text style={{ fontSize: 20 }}>
                    {User.name}
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={this.handleChange}
                />
            </SafeAreaView>
        )
    }
}