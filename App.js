import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import GroupStack from './components/Group/GroupStack';
import ProfileStack from './components/Profile/ProfileStack';
import SettingsStack from './components/Settings/SettingsStack'
import Login from './components/Credentials/Login';
import SignUp from './components/Credentials/SignUp';
import ForgotCredentials from './components/Credentials/Forgot';

const stackNav = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ }) => ({
      title: "Login",
      header: null
    })
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: "Sign Up",
      header: null
    })
  },
  Forgot: {
    screen: ForgotCredentials,
    navigationOptions: () => ({
      title: "Forgot Password",
      header: null
    })
  }
})


const stackTabNav = createBottomTabNavigator({
  Home: GroupStack,
  Profile: ProfileStack,
  Settings: SettingsStack
},

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-cog${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
)


const TabNavigator = createSwitchNavigator({
  Login: {
    screen: stackNav,
    navigationOptions: { tabBarVisible: false }
  },
  TabBar: stackTabNav
},
  {
    initialRouteName: 'Login',
  }
)


export default App = () => <TabNavigator />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});