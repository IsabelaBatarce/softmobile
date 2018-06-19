import React from 'react';
import { View, TextInput,Text, StyleSheet,  Alert } from 'react-native';
import FormRow from'../components/FormRow';
import Picker from'../components/Picker';
import Button from'../components/Button';


export default class PrimaryLoginPage extends React.Component {    
    

    render(){
        return(
      
      <View style={styles.container}>
        <Picker />
              
        <FormRow >
    
            <TextInput 
                style={styles.texto}
                placeholder= "Digite a senha"
                secureTextEntry    
            />
          
        </FormRow>

        <Button style = {styles.button}/>

 </View>
        );
    }
}

        
const styles = StyleSheet.create({
    container: {
            display: 'flex',
            paddingTop:10,
            flex: 1,
            backgroundColor: '#fff',  
        },
    texto:{
        
        fontSize: 16,
        paddingTop: 13,
        paddingBottom: 18,
        paddingLeft:12,
        paddingVertical: 5,
        
    },
    button:{
        
        
    }

    

});


  

  
  




