import { View, Text, TextInput } from "react-native";
import React from "react";
import className from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";

const SearchInput = () => {
  return (
    <View
      style={className`bg-gray-800 p-2 rounded-lg flex-row justify-start items-center px-3 gap-2`}
    >
      <AntDesign name="search1" size={24} color="white" />
      <TextInput
        placeholder="search"
        style={className`text-lg flex-1 p-3 text-gray-300 rounded-lg`}
      />
    </View>
  );
};

export default SearchInput;
