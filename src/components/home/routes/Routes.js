import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Home';
import About from '../About';
import AddComp from '../AddComp';
import ListPa from '../list/ListPa';
import { Component } from 'react';
import DoctorProgramPicker from '../dp/DoctorProgramPicker.js'
import Glichart from '../charts/Glichart.js'


const Routes = () => (
                   <Router>
                      <Scene key = "root">
                         <Scene key = "about" component = {About} title = "About" />
                         <Scene key = "doctorprog" component = {DoctorProgramPicker} title = "Program"  />
                          <Scene key = "list" component = {ListPa} title = "List"  />
                          <Scene key = "add" component = {AddComp} title = "AddPacient" />
                          <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                          <Scene key = "chart" component = {Glichart} title = "Glichart" />
                      </Scene>
                   </Router>
                )

export default Routes
