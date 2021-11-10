import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function ListingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Listings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const homeScreen = "Home"
const settingScreen = "Settings"
const listingScreen = "Listings"

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeScreen}
        screenOptions={({route})  => ({
          tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeScreen) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === settingScreen) {
                iconName = focused ? 'settings' : 'settings-outline';  
              } else if (rn === listingScreen) {
                iconName = focused ? 'list' : 'list-outline';
              }
          return <Ionicons name={iconName} size={size} color={color} />
        },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelstyle: { paddingBottom: 10, fontsize: 10 },
          style: {padding: 10, height: 70}
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Listings" component={ListingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}