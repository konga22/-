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
      className="absolute inset-x-0 inset-y-[2px] rounded-full bg-primary-light"
      pointerEvents="none"
    />
  );
}
