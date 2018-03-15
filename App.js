import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import { Constants } from 'expo';
import {Card, CardItem} from 'native-base'
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  
  state = {
    data : []
  }
  
  componentWillMount () {
    console.log('wow')
    this.fetchData() 
  }
  
  fetchData = async () => {
    // const response  = await fetch('https://randomuser.me/api?results=5')
    // const response  = await fetch('https://api.github.com/search/repositories?q=react%20native&sort=stars&order=desc')
    const response  = await fetch('http://api.icndb.com/jokes/random/5')    
    const json      = await response.json()
    this.setState({
      data: json.value
    })
    console.log(json)
   }
  
  render() {
    return (
      <View style={styles.container}>

        <Card title="Local Modules">
        <FlatList
          data={this.state.data}
          keyExtractor={(x,i) => i}
          renderItem={({item}) => 
            <CardItem>
            <Text> - {item.joke} -</Text>
            </CardItem>
            
          }
        />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

});
