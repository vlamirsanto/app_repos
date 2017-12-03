import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default class NewRepoModal extends Component {
	state = {
		newRepoText: ''
	}

	render() {
		return (
			<Modal animationType="fade" transparent visible={ this.props.visible }>
				<View style={ styles.modalContainer }>
					<View style={ styles.boxContainer }>
						<Text style={ styles.boxTitle }>Adicionar repositório</Text>
						<TextInput 
							autoFocus 
							autoCapitalize="none" 
							style={ styles.boxInput } 
							underlineColorAndroid="rgba(0,0,0,0)"
							placeholder="organização/repositório"
							value={ this.state.newRepoText }
							onChangeText={ newRepoText => this.setState({ newRepoText }) }
						/>
						<View style={ styles.buttonContainer }>
							<TouchableOpacity 
								style={[styles.button, styles.cancelButton]} 
								onPress={ () => { this.props.onCancel() } }
							>
								<Text style={ styles.buttonText }>Cancelar</Text>
							</TouchableOpacity>
							<TouchableOpacity 
								style={[styles.button, styles.saveButton]} 
								onPress={ () => { this.props.onAdd(this.state.newRepoText) } }
							>
								<Text style={ styles.buttonText }>Salvar</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>
		);
	};
}

const styles = StyleSheet.create({
  modalContainer: {
  	flex: 1,
  	backgroundColor: 'rgba(0,0,0,0.7)',
  	alignItems: 'center',
  	justifyContent: 'center'
  },
  boxContainer: {
  	padding: 20,
  	backgroundColor: '#fff',
  	borderRadius: 10,
  	alignItems: 'center',
  	width: 280,
  },
  boxTitle: {
  	fontSize: 16,
  	fontWeight: 'bold'
  },
  boxInput: {
  	alignSelf: 'stretch',
  	marginTop: 10,
  	paddingVertical: 0,
  	paddingHorizontal: 20,
  	borderColor: '#ddd',
  	height: 40,
  	borderRadius: 3,
  	borderWidth: 1
  },
  buttonContainer: {
  	marginTop: 10,
  	height: 40,
  	flexDirection: 'row'
  },
  button: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderRadius: 3
  },
  buttonText: {
  	color: '#fff',
  	fontWeight: 'bold',
  	fontSize: 12
  },
  saveButton: {
  	backgroundColor: '#70bd85',
  	marginLeft: 5
  },
  cancelButton: {
  	backgroundColor: '#e25f5f',
  	marginRight: 5
  }
});