import React, { type ComponentProps } from "react";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../ui/AppText";

export type TopAppBarVariant = "logo" | "title" | "back";
type TopAppBarIconName = ComponentProps<typeof Ionicons>["name"];

type Props = {
  variant?: TopAppBarVariant;
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  rightIcon?: TopAppBarIconName;
};

export default function TopAppBar({
  variant = "logo",
  title,
  onLeftPress,
  onRightPress,
  rightIcon = "notifications-outline",
}: Props) {
  const isBack = variant === "back";

  return (
    <View
      className="absolute left-0 right-0 top-0 z-10"
      style={{ backgroundColor: "rgba(252,248,252,0.85)" }}
    >
      <SafeAreaView edges={["top"]}>
        <View className="h-16 flex-row items-center justify-between px-6">
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onLeftPress}
            className="h-10 w-10 items-center justify-center rounded-full"
          >
            <Ionicons
              name={isBack ? "chevron-back" : "menu-outline"}
              size={24}
              color="#844d74"
            />
          </TouchableOpacity>

          {variant === "logo" ? (
            <Text className="font-brand text-2xl italic tracking-tight text-primary">
              Popble
            </Text>
          ) : (
            <Text className="text-xl font-semibold tracking-tight text-primary">
              {title}
            </Text>
          )}

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={onRightPress}
            className="h-10 w-10 items-center justify-center rounded-full"
          >
            <Ionicons name={rightIcon} size={22} color="#844d74" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
