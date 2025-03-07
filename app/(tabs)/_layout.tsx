import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import className from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Layout = () => {
  return (
    <View style={className`flex-1 p-5 bg-black`}>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
            borderWidth: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 40,
            color: "#fff",
          },
          tabBarStyle: {
            backgroundColor: "rgba(55,55,255,0.5)",
            height: 70,
            padding: 10,
            margin: 10,
            borderWidth: 0,
            borderColor: "transparent",
            borderRadius: 20,
          },
          tabBarLabelStyle: {
            color: "#fff",
          },
          tabBarInactiveTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="favourites"
          options={{
            tabBarIcon: () => (
              <AntDesign name="heart" size={24} color="white" />
            ),
            headerTitle: "Favourites",
            tabBarLabel: "Favourites",
          }}
        />
        <Tabs.Screen
          name="playlists"
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="playlist-add" size={24} color="white" />
            ),
            headerTitle: "Playlists",
            tabBarLabel: "Playlists",
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => <Feather name="music" size={24} color="white" />,
            headerTitle: "Songs",
            tabBarLabel: "Songs",
          }}
        />
        <Tabs.Screen
          name="artists"
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="human-child"
                size={24}
                color="white"
              />
            ),
            headerTitle: "Artists",
            tabBarLabel: "Artists",
          }}
        />
      </Tabs>
    </View>
  );
};

export default Layout;
