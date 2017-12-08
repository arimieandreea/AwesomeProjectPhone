import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class DoctorProgramPicker extends Component {
   state = {program: ''}

   updateProgram = (program) => {
      this.setState({ program: program })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.program} onValueChange = {this.updateProgram}>
               <Picker.Item label = "Luni 12:00-17:00" value = "Luni 12:00-17:00" />
               <Picker.Item label = "Marti 08:00-14:00" value = "Marti 08:00-14:00" />
               <Picker.Item label = "Miercuri 13:00-18:00" value = "Miercuri 13:00-18:00" />
            </Picker>
            <Text style = {styles.text}>{this.state.program}</Text>
         </View>
      )
   }
}
export default DoctorProgramPicker

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})
