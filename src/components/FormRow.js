import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormRow = props => {

	const { children} = props;

		return(
			
			<View style={styles.senha}  > 

				{ children }

			</View>
		
		)
};
const styles = StyleSheet.create({
senha: {
	    paddingTop: 13,
        paddingBottom: 12,
        borderRadius: 4,
        backgroundColor: 'white',
        justifyContent:'center'
         }
})

export default FormRow;