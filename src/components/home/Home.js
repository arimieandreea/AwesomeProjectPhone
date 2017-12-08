import React from 'react'
import ListPa from './list/ListPa.js'
import { Actions } from 'react-native-router-flux'
import { Component } from 'react'
import {View,Button,TouchableOpacity,Text} from 'react-native'
import AddComp from './AddComp.js'
import DoctorProgramPicker from './dp/DoctorProgramPicker.js'
import Glichart from './charts/Glichart.js'

class Home extends Component{

goToPacients=()=>{
  Actions.list();
}

goToProgram=()=>{
  Actions.doctorprog();
}

goToChart=()=>{
  Actions.chart();
}

render() {
      return (
            <View>
            <Button title="Go to pacients" onPress={()=>this.goToPacients()} />
            <Button title="Go to program" onPress={()=>this.goToProgram()} />
            </View>

      )}
      }
export default Home
