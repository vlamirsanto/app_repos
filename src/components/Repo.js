import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Repo extends Component {
  render() {
    return (
      <View style={ styles.repo }>
      	<Image 
      		style={ styles.repoImage }
      		source={{ uri: this.props.repo.thumbnail }}
      	/>
      	<View style={ styles.repoInfo }>
      		<Text style={ styles.repoTitle }>{ this.props.repo.title }</Text>
      		<Text style={ styles.reporAuthor }>{ this.props.repo.author }</Text>
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	repo: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  repoImage: {
  	width: 50,
  	height: 50,
  	borderRadius: 25
  },
  repoInfo: {
  	marginLeft: 10
  },
  repoTitle: {
  	fontWeight: 'bold',
  	color: '#333'
  },
  reporAuthor: {
  	fontSize: 12,
  	color: '#999'
  }
});
