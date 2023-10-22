import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  BackScreen,
  FirstScreen,
  MenuScreen,
  SecondScreen,
} from "../screens/index";

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="SecondScreen"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#73a1eb",
        },
      }}
    >
      <Tab.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "md-menu-sharp" : "md-menu-outline"}
                size={24}
                color="white"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "md-home-sharp" : "md-home-outline"}
                size={24}
                color="white"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="BackScreen"
        component={BackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={
                  focused ? "arrow-back-circle" : "arrow-back-circle-outline"
                }
                size={24}
                color="white"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
