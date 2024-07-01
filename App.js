import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/Home"
import LightSpeed from "./screens/LightSpeed"
import LudicrousSpeed from './screens/LudicrousSpeed';

const Stack = createNativeStackNavigator();


export default function App(){
  return (
    <NavigationContainer> 
        <Stack.Navigator initialRouteName='Home'> 
            <Stack.Screen name="Home" component={Home}
            options={{title: 'Spaceballs: The App'}}
            />
            <Stack.Screen name="LightSpeed" component={LightSpeed} />
            <Stack.Screen name="LudicrousSpeed" component={LudicrousSpeed} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};