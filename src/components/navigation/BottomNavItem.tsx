import React from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "../ui/AppText";
import BottomNavIndicator from "./BottomNavIndicator";
import type { TabConfigItem, TabName } from "../../global/navigation/tabConfig";

type BottomNavItemProps = {
  activeTab: TabName;
  item: TabConfigItem;
  onPress: (tab: TabName) => void;
  scale: Animated.Value;
};

export default function BottomNavItem({
  activeTab,
  item,
  onPress,
  scale,
}: BottomNavItemProps) {
  const isActive = item.id === activeTab;

  return (
    <TouchableOpacity
      onPress={() => onPress(item.id)}
      activeOpacity={0.8}
      className="flex-1 items-center px-1"
    >
      <View className="relative h-[56px] w-[72px] items-center justify-center">
        <BottomNavIndicator visible={isActive} />
        <Animated.View
          className="h-full w-full items-center justify-center rounded-full px-2 py-2"
          style={{ transform: [{ scale }] }}
        >
          <Ionicons
            name={isActive ? item.activeIcon : item.icon}
            size={21}
            color={isActive ? "#844d74" : "#8f8c95"}
          />
          <Text
            className={`mt-1 w-full text-center text-[11px] leading-[14px] ${
              isActive ? "font-semibold text-primary" : "text-muted opacity-75"
            }`}
          >
            {item.label}
          </Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}
