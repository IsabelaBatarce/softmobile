import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Button extends React.Component {    

	render() {
	   return (
	     <View style={{width: 100}}>
	       <TouchableOpacity
	         style={styles.button}

	         onPress={this.onPress}
	       >
	         <Text style = {styles.texto}> SALVAR </Text>
	       </TouchableOpacity>
	      </View>
 		)
 	}
}

const styles = StyleSheet.create ({
 
 button: {
  
    flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    backgroundColor: '#8e44ad',
    padding: 10,
    
    
  },
  texto:{
  	color:'white'
  }

})