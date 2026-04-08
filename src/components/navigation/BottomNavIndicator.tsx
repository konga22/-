import React from "react";
import { View } from "react-native";

type BottomNavIndicatorProps = {
  visible: boolean;
};

export default function BottomNavIndicator({
  visible,
}: BottomNavIndicatorProps) {
  if (!visible) {
    return null;
  }

  return (
    <View
      className="absolute inset-x-0 inset-y-[2px] rounded-full bg-[rgba(181,150,244,0.14)]"
      pointerEvents="none"
    />
  );
}
