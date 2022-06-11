import * as React from 'react'
//!import tab bottom navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//!import vector icons
import { Ionicons } from "@expo/vector-icons"

//!import navigation Container
import { NavigationContainer } from '@react-navigation/native'

//!import Stack Navigation
import { createStackNavigator } from '@react-navigation/stack';

//!import Theme Native Base
import { useTheme } from 'native-base';

//import screen
import IndDec from './src/screen/inDec'
import FormNativeBase from './src/screen/FormNative'
import Hello from './src/screen/hello'


//create Stack Navigator
const Stack = createStackNavigator()

//create bottom stack 
const Tab = createBottomTabNavigator()

//create component bottom navigation
function MyTab() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Hello"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name == "Hello") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name == "Form") {
            iconName = focused ? "list" : "list-outline"
          } else if (route.name == "IncDec") {
            iconName = focused ? "calculator" : "calculator-outline"
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "black"
      })}
    >
      <Tab.Screen name="Hello" component={Hello} options={{ headerShown: false }} />
      <Tab.Screen name="Form" component={FormNativeBase} options={{ headerShown: false }} />
      <Tab.Screen name="IncDec" component={IndDec} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default function Container() {
  const theme = useTheme()
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.primary["300"] }
        }}
      >
        <Stack.Screen
          name='Home'
          component={MyTab}
          options={{
            title: "Hello Screen"
          }}
        />
        <Stack.Screen
          name='Number'
          component={IndDec}
          options={{
            title: "Increment Decrement Number Screen"
          }}
        />
        <Stack.Screen
          name='FormLogin'
          component={FormNativeBase}
          options={{
            title: "Form Login with nativeBase"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
