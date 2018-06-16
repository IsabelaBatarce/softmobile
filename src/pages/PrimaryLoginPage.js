import React from 'react';
import { View, TextInput,Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import FormRow from'../components/FormRow';

import ListPopover from 'react-native-list-popover';

const items = ['Item 1', 'Item 2'];

export default class PrimaryLoginPage extends React.Component {    
    
    constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
//test
    render(){
        return(
      
      <View style = { styles.oi }>			
        
        <TouchableHighlight
          
          style={styles.button}
          onPress={() => this.setState({isVisible: true})}>
          
          <Text>{this.state.item || 'Select'}</Text>
        
        </TouchableHighlight>
        
        <ListPopover
          
          list={items}
          isVisible={this.state.isVisible}
          onClick={(item) => this.setState({item: item})}
          onClose={() => this.setState({isVisible: false})}/>
      	

            <View style= { styles.container }>

					      
        	
      	</View>

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
	},
	oi: {
 
    alignItems: 'center',
   
    justifyContent: 'center',
    marginTop: 50
  },
  button: {
    backgroundColor: '#b8c',
    borderRadius: 4,
   
    padding: 10,

  }
	

})

