import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: "",
      text2: "",
      text3: ""
    }
  }
  
  render() {
      return(
        <View>
          <Header
            backgroundColor={'pink'}
            centerComponent={{
              text: 'Story Hub',
              style: { color: 'black', fontSize: 20 },
            }}
          />


          
          <TextInput
            style={styles.inputBox}
            onChangeText={(text1) => {
              this.setState({
                text1: text1,
              });
            }}
            value = {this.state.text1}
            placeholder = "Title of the Story"
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(text2) => {
              this.setState({
                text2: text2,
              });
            }}
            value = {this.state.text2}
            placeholder = "Author of The Story"
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={(text3) => {
              this.setState({
                text3: text3,
              });
            }}
            value = {this.state.text3}
            multiline = {true}
            placeholder = "Write Story"
          />

          <TouchableOpacity
            onPress = {() => {
              this.setState({
                text1: "",
                text2: "",
                text3: ""
              })
            }}
          ><Text>Submit</Text></TouchableOpacity>
        </View>
      )
  }
}

const styles = StyleSheet.create({
});