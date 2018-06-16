import React from 'react';
import { View, TextInput,Text, StyleSheet, Button } from 'react-native';
import FormRow from'../components/FormRow';

export default class PrimaryLoginPage extends React.Component {    
    render(){
        return(
            <View style= { styles.container }>
					
					<FormRow first>
						
						
							
							<TextInput 
								style={ styles.input }
								placeholder= "Nome"
								
								

							/>
					
					</FormRow>

					<FormRow last>
		
							<TextInput 
								style={ styles.input}
								placeholder= "*******"
								secureTextEntry 
								
								
							/>
					
					</FormRow>

					<Button 
						title = "Entrar"
						onPress={() => this.tryLogin()}
					 />

				</View>	
        )
    }

}

const styles = StyleSheet.create({
	container:{
		paddingLeft: 10,
		paddingRight: 10
	},
	
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5
	}
	

})

