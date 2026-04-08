import React from "react";
import { View } from "react-native";
import Text from "../../ui/AppText";

type Props = {
  label: string;
  top: number;
  left: number;
  selected?: boolean;
};

export default function MapPin({ label, top, left, selected }: Props) {
  return (
    <View className="absolute items-center" style={{ top, left }}>
      <View
        className={`w-9 h-10 rounded-full items-center justify-center ${
          selected ? "bg-primary" : "bg-[rgba(132,77,116,0.7)]"
        }`}
      >
        <Text className="text-white text-base">📍</Text>
      </View>
      <View className="bg-white border border-[rgba(249,180,225,0.3)] rounded-full px-3 py-1 mt-1 shadow-sm">
        <Text className="text-primary text-xs">{label}</Text>
      </View>
    </View>
  );
}
