import React from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "./AppText";

type SectionHeaderProps = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export default function SectionHeader({
  title,
  actionLabel,
  onActionPress,
}: SectionHeaderProps) {
  return (
    <View className="flex-row items-center justify-between gap-4">
      <Text className="text-heading text-xl font-semibold leading-7 tracking-tight">
        {title}
      </Text>
      {actionLabel ? (
        <TouchableOpacity activeOpacity={0.85} onPress={onActionPress}>
          <Text className="text-primary text-[13px] font-medium tracking-tight">
            {actionLabel}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
