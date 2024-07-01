import React from "react";

import { StyleSheet, Text, View, Button } from 'react-native';

export default function LightSpeed(){
    return ( 
        <View style={styles.container}> 
  
          
          
  
          <Text style={styles.response}>Light Speed GO!</Text>
           
        </View> 
    );

    
  }


const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#fff',
      alignItems: 'center', 
      justifyContent: 'center',
      flex: 1
    }, 
    response: { 
        color: '#000',
        fontSize: 30,  
        alignItems: 'center',
        justifyContent: 'center', 
      }
})