
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { AsyncStorage } from "react-native";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this._retrieveData}>
         <text>zapisz</text>
       </TouchableOpacity>
          <TouchableOpacity onPress={this._storeData}>
              <text>zaladuj</text>
          </TouchableOpacity>
      </View>
    );
  }
}

_storeData = async () => {
    try {
        let regulamin = 'regulamin';
        AsyncStorage.setItem('regulamin',regulamin);
    } catch (error) {

    }
}
_retrieveData = async () => {
    try {
      let regulamin = await  AsyncStorage.getItem('regulamin');
      alert(regulamin);
        }
    } catch (error) {

    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
