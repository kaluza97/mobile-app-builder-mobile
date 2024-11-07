import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {NavigationContext} from '../../context/Navigation';
import {Colors} from '../../variables/Colors';
import HomeScreen from '../../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const {navigationData} = useContext(NavigationContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.blue,
          tabBarInactiveTintColor: Colors.black,
        }}>
        {navigationData.map(singleNav => (
          <Tab.Screen
            key={singleNav._id}
            name={singleNav.name}
            component={HomeScreen}
            options={{
              tabBarIcon: () => (
                <FontAwesomeIcon
                  icon={singleNav.icon as IconProp}
                  color={Colors.black}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
