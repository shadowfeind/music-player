import { View, Text } from "react-native";
import React from "react";
import className from "twrnc";
import PlayAndShuffle from "@/components/PlayAndShuffle";
import SearchInput from "@/components/SearchInput";
import Tracks from "@/components/Tracks";

const index = () => {
  return (
    <View style={className`bg-black flex-1 gap-2`}>
      <SearchInput />
      <PlayAndShuffle />
      <Tracks />
    </View>
  );
};

export default index;
