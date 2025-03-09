import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import className from "twrnc";
import AntDesign from "@expo/vector-icons/AntDesign";

const Track = ({
  image,
  title,
  name,
}: {
  image: any;
  title: string;
  name: string;
}) => {
  return (
    <View style={className`flex-row gap-3 justify-between items-center mb-2`}>
      <Image
        source={image}
        style={className`h-12 w-12 rounded-lg border-gray-300`}
      />
      <Pressable style={className`flex-1 pb-3`}>
        <Text style={className`text-white text-lg`}>{title}</Text>
        <Text style={className`text-white `}>{name}</Text>
      </Pressable>
      <AntDesign name="ellipsis1" size={24} color="white" />
    </View>
  );
};

export default Track;
