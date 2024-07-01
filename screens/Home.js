 
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
export default function Home ({navigation}) {

  const [count, setCount] = useState(0);
  
  
  return ( 
      <View style={styles.container}>
        <Text style={styles.headline}>SPACEBALLS</Text>
        <Text style={styles.subhead}>THE APP</Text>

        <Text style={[styles.button, styles.ls]}
          onPress={() => navigation.navigate("LightSpeed")}
        >Light Speed</Text>
        
        <Text style={[styles.button, styles.rs]}
          onPress={() => alert("It's too slow, we have to go faster!")}
        >Ridiculous Speed</Text>
        
        <Text style={[styles.button, styles.lus]}
          onPress={() => navigation.navigate("LudicrousSpeed")}
        >ludicrous Speed</Text>
        <Text style={[styles.button, styles.schwartz]}
          onPress={() => setCount(count + 1)}
        >Use the Schwart!</Text>

        <Text style={styles.response}>You used the schwartz {count} times</Text>
         
      </View> 
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#000',
    alignItems: 'center', 
    paddingTop: 35,
    flex: 1
  },
  view2:{
    flex: 1,
    backgroundColor: '#fff'
  },
  headline: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    top: 50
  },
  subhead: { 
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    top: 50
  },
  button: {
    fontSize: 20, 
    padding: 10,
    borderBottomEndRadius: 15,
    backgroundColor: '#fff',
    color: '#F00',
    width: 200,
    textAlign: 'center'
  },
  ls:{
    top: 150
  },
  rs: {
    top: 160,
    color: 'red'
  },
  lus: {
   top: 170
  },
  schwartz: {
    top: 250
  },
  response: { 
    color: '#F00',
    fontSize: 15,  
    alignItems: 'center',
    justifyContent: 'center',
    top: 300
  }
});
