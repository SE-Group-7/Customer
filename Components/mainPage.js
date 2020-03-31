//This is an example code to show image in a button//
import React, { Component } from 'react';
//import react in our code.

import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';
//import all the components we are going to use.
import {Ionicons } from '@expo/vector-icons'


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.MainContainer}>
        
        <TouchableOpacity onPress={() => console.log('Burgers selected')} style={styles.FacebookStyle} activeOpacity={0.5}>
          {}
          <Image
            
            source={require('../assets/burger.jpg')}
            
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Burgers </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Pizzas selected')} style={styles.GooglePlusStyle} activeOpacity={0.5}>
          <Image
            
            source={require('../assets/imagePizza.jpg')}
           
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Pizzas </Text>
        </TouchableOpacity>
       
        <TouchableOpacity  onPress={() => console.log('Takeaway')} style={styles.takeAway} >
                <Button
                    title='TakeAway'
                    color='#f04b48' 
                />
            </TouchableOpacity>  

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
  },
  GooglePlusStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 120,
    width: 130,
    borderRadius: 40,
    margin: 0,
  },
  FacebookStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 120,
    width: 130,
    borderRadius: 40,
    margin: 0,
  },
  
  takeAway: {
    flex:1,
    justifyContent:'flex-end',
    flexDirection: 'column',
    
    marginBottom: 20
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 100,
    width: 120,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#000',
    fontWeight: 'bold',
    flexDirection: 'row',
    marginBottom: 0,
    marginRight: 0,
  },
  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  
});
