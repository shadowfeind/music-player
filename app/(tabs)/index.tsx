import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import PlayAndShuffle from "@/components/PlayAndShuffle";
import SearchInput from "@/components/SearchInput";

const index = () => {
  return (
    <View style={className`bg-black flex-1 gap-2`}>
      <SearchInput />
      <PlayAndShuffle />
    </View>
  );
};

export default index;
