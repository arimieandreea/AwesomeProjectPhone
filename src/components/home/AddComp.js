import React from 'react'
import {View, TouchableOpacity, Text,StyleSheet,TextInput, Button,AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Component } from 'react'

class AddComp extends Component{

constructor(props){
   super(props);
   this.state={name:'',mail:''};
}


   addPacientToList1 = (name,email) =>{
     const pacient={
       name:name,
       email:email
     }
     this.props.addPacientToList(pacient);
   }



render() {
  return (
    <View>
    <Text>'Name'</Text>
    <TextInput style = {styles.input}
                            //underlineColorAndroid = "transparent"
                            placeholder = {this.state.name}
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            value={this.state.name}
                            onChangeText={(name) => this.setState({name})}
                           />
    <Text>'Email'</Text>
    <TextInput style = {styles.input}
                            //underlineColorAndroid = "transparent"
                            placeholder = {this.state.mail}
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            value={this.state.mail}
                            onChangeText={(mail) => this.setState({mail})}
                           />

                          <Button title="Save pacient" onPress={()=>this.addPacientToList1(this.state.name,this.state.mail)} />
   </View>
  )
}
}

export default AddComp
const styles = StyleSheet.create({
   container: {
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 5
}
})
