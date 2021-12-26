import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login'
import Register from '../screens/Register'
import Users from '../screens/Users'
import Details from '../screens/Details'
import AddLocation from '../screens/AddLocation'
import AddUser from '../screens/AddUser'

const Stack = createStackNavigator();

export default function App() {

  return (

    <Stack.Navigator
      initialRouteName={"Login"}
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="AddLocation" component={AddLocation} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator >

  );
}
