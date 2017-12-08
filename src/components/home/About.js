import React from 'react'
import {View, TouchableOpacity, Text,StyleSheet,TextInput, Button,Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import email from 'react-native-email'
import { Component } from 'react'



class About extends Component{

constructor(props){
   super(props);
   this.state={bodyEm:'AAA', name:props.text,mail:props.email};
}


 goToHome = () => {
      updatePacient();
      Actions.list()
   }

    handleEmail = (text,to1) => {
           const to = [to1]
           email(to, {
               // Optional additional arguments
               cc: [],
               bcc: '',
               subject:text ,
               body: text
           }).catch(console.error)
       }


        removePacient= () =>{
         this.props.removePacientFromList(this.props.index);
         this.setState({
            bodyEm: '',
            name:'',
            mail:''
          })
       }

       removePacientD=()=>{
         Alert.alert(
           'Remove Pacient',
           'Are you sure?',
           [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => this.removePacient()},
          ],
        { cancelable: false }
)
       }


       updatePacient= () =>{
         const pacient={
           name:this.state.name,
           email:this.state.mail
         }
        this.props.updatePacientFromList(pacient,this.props.index);
      }


      updatePacientD=()=>{
        Alert.alert(
          'Update Pacient',
          'Are you sure?',
          [
           {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
           {text: 'OK', onPress: () => this.updatePacient()},
         ],
       { cancelable: false }
)
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
        <Text>'Body of email'</Text>
          <TextInput style = {styles.input}
                                  //underlineColorAndroid = "transparent"
                                  placeholder = {this.state.bodyEm}
                                  placeholderTextColor = "#9a73ef"
                                  autoCapitalize = "none"
                                  value={this.state.bodyEm}
                                  onChangeText={(bodyEm) => this.setState({bodyEm})}
                                 />
           <Button title="Send Mail" onPress={()=>this.handleEmail(this.state.bodyEm,this.props.email)} />
           <Button title="Remove this pacient" onPress={()=>this.removePacientD()} />
           <Button title="Update this pacient" onPress={()=>this.updatePacientD()} />

          </View>
         )
      }
      }

export default About

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
