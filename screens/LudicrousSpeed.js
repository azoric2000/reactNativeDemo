import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
 
export default function LudicrousSpeed({navigation}) {
  return ( 
    <View style={styles.container}>
        <ImageBackground style={styles.background} resizeMode="cover" source={require('../assets/plaid.png')} >
            <Text style={styles.text}>They've gone to plaid!</Text>
        </ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background:{
        flex: 1,
        justifyContent: 'center',
        alignItems:   'center'
    },
    text:{
        color:'#fff',
        fontSize: '40'
        
    }

})
