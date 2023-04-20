import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/views/Login';
import HomeScreen from './src/views/Home';
import AboutScreen from './src/views/About';
import Main from './src/views/Main/Main';
import Feed from './src/views/Feed/Feed';
import Detail from './src/views/Detail/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
