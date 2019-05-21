import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import User from '../User';
import styles from '../constants/styles';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title:'Profile'
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Text style={{fontSize:20}}>
                    {User.phone}
                </Text>
                <Text style={{fontSize:20}}>
                {User.name}
                </Text>
            </SafeAreaView>
        )
    }
}