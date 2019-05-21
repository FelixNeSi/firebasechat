import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../constants/styles'

export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name', null)
        }
    }

    state = {
        textMessage: ''
    }

    handleChange = key => val => {
        this.setState({ [key]: val })
    }

    sendMessage = async () => {
        
    }


    render() {
        return (
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    value={this.state.textMessage}
                    onChangeText={this.handleChange('textMessage')}
                />
                <TouchableOpacity onPress={this.sendMessage}>
                    <Text style={styles.btnText}>Send</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}