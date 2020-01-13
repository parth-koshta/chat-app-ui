import React, {Component} from 'react';
import {Text, View} from 'react-native';
import * as firebase from 'firebase';
import {firebaseConfig} from '../../configs';

export default class AuthScreen extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Text> AuthScreen </Text>
      </View>
    );
  }
}
