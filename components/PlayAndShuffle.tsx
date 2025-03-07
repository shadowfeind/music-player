import { View, Text, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const PlayAndShuffle = () => {
  return (
    <View style={className`flex-row justify-between items-center`}>
      <Pressable
        style={className`flex-row justify-center items-center gap-2 bg-gray-800 rounded-lg p-3 w-45`}
      >
        <AntDesign name="play" size={24} color="white" />
        <Text style={className`text-lg font-semibold text-white`}>Play</Text>
      </Pressable>
      <Pressable
        style={className`flex-row justify-center items-center gap-2 bg-gray-800 rounded-lg p-3 w-45`}
      >
        <Entypo name="shuffle" size={24} color="white" />
        <Text style={className`text-lg font-semibold text-white`}>Shuffle</Text>
      </Pressable>
    </View>
  );
};

export default PlayAndShuffle;
