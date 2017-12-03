/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';

import Repo from './src/components/Repo';
import NewRepoModal from './src/components/NewRepoModal';

export default class App extends Component {

  state = {
    modalVisible: false,
    repos: []
  };

  async componentDidMount() {
    const repos = JSON.parse(await AsyncStorage.getItem('@Repositoriosfavoritos:repositories')) || [];

    this.setState({ repos });
  }

  _addRepository = async (newRepoText) => {
    const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login
    }

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository
      ]
    });

    await AsyncStorage.setItem('@Repositoriosfavoritos:repositories', JSON.stringify(this.state.repos));
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>Repositórios favoritos</Text>
          <TouchableOpacity onPress={ () => { this.setState({ modalVisible: true }) } }>
            <Text style={ styles.headerButton }>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={ styles.repoList }>
          { this.state.repos.map((repo, key) => <Repo key={ key } repo={ repo } /> )}
        </ScrollView>
        <NewRepoModal 
          onCancel={ () => this.setState({ modalVisible: false }) } 
          onAdd={ this._addRepository }
          visible={ this.state.modalVisible } 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  headerButton: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  repoList: {
    padding: 20
  }
});
