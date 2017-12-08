import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,AsyncStorage ,Button} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { List, ListItem } from 'react-native-elements'
import AddComp from '../AddComp.js'



class ListPa extends Component {
  constructor(props){
    super(props)
    this.state = {
      pacients: [
        {
            name: 'Arimie Andreea',
            email: 'arimie_andreea@yahoo.com'
         },
         {
            name: 'Marginean Madalina',
            email: 'arimie_andreea@yahoo.com'
         },
         {
            name: 'Raul Oproiu',
            email: 'arimie_andreea@yahoo.com'
         },
         {
            name: 'Iovan Irina',
            email: 'arimie_andreea@yahoo.com'
         }
       ]
      }


    // AsyncStorage.removeItem("database_p");
  AsyncStorage.getItem('database_p', (err, result) => {
    const pacients1 =this.state.pacients ;
    if (result !== null) {
      //console.log('Data Found', result);
      this.setState({
         pacients: JSON.parse(result)
       })
    } else {
      console.log('Data Not Found');
      AsyncStorage.setItem('database_p', JSON.stringify(pacients1));
    }
  });
}


addPacientToList=(pacient)=> {

  AsyncStorage.getItem("database_p").then((result) => {
      //console.log('Data Found', result);
      const array= JSON.parse(result)
      array.push(pacient)
      this.setState({
         pacients: array
       });
       AsyncStorage.setItem('database_p', JSON.stringify(array));

  }).done();
}

removePacientFromList=(index)=>{
  AsyncStorage.getItem("database_p").then((result)=>{
    const array=JSON.parse(result);
    const newArray=[];
    for (var i=0; i < array.length; i++){
      if(i!==index){
        newArray.push(array[i]);
      }
    }
    this.setState({
       pacients: newArray
     });
     AsyncStorage.setItem('database_p', JSON.stringify(newArray));

}).done();

}

updatePacientFromList=(pacient,index)=>{
  AsyncStorage.getItem("database_p").then((result)=>{
    const array=JSON.parse(result);
    const newArray=[];
    for (var i=0; i < array.length; i++){
      if(i!==index){
        newArray.push(array[i]);
      }
      if(i===index){
        newArray.push(pacient);
      }
    }
    this.setState({
       pacients: newArray
     });
     AsyncStorage.setItem('database_p', JSON.stringify(newArray));

}).done();
}




goToAbout = (name,mail,removePacientFromList1,i,updatePacientFromList1) => {
          Actions.about({text: name,email:mail,removePacientFromList:removePacientFromList1,index:i,updatePacientFromList:updatePacientFromList1})
          }


addPacient = (a,b) => {
          Actions.add(a,b)
          }

    render() {

      return (
        <View>
          <List>
          {
              this.state.pacients.map((item, i) => (
              <ListItem
              key={i}
              title={item.name}
              onPress = {() => this.goToAbout(item.name,item.email,this.removePacientFromList,i,this.updatePacientFromList)} />

  ))
}
          </List>
          <Button title="Add pacient" onPress={()=>this.addPacient({pacients:this.state.pacients,addPacientToList:this.addPacientToList})} />
          </View>


)
}
}

export default ListPa

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})







// import React, { Component } from 'react'
// import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
// import { Actions } from 'react-native-router-flux'
//
// class ListPa extends Component {
//    state = {
//       names: [
//          {
//             id: 0,
//             name: 'Arimie Andreea',
//          },
//          {
//             id: 1,
//             name: 'Marginean Madalina',
//          },
//          {
//             id: 2,
//             name: 'Raul Oproiu',
//          },
//          {
//             id: 3,
//             name: 'Iovan Irina',
//          }
//       ]
//    }
//      goToAbout = (name) => {
//           console.log("shxujh");
//           Actions.about({text: name})
//           }
//    render() {
//       return (
//          <View>
//             {
//                this.state.names.map((item, index) => (
//                   <TouchableOpacity
//                      key = {index}
//                      style = {styles.container}
//                      onPress = {() => this.goToAbout(item.name)}
//                    >
//
//                      <Text style = {styles.text}>
//                         {item.name}
//                      </Text>
//                   </TouchableOpacity>
//                ))
//             }
//          </View>
//       )
//    }
// }
// export default ListPa
//
// const styles = StyleSheet.create ({
//    container: {
//       padding: 10,
//       marginTop: 3,
//       backgroundColor: '#d9f9b1',
//       alignItems: 'center',
//    },
//    text: {
//       color: '#4f603c'
//    }
// })
