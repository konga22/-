import React from "react";
import { View } from "react-native";
import Text from "../../ui/AppText";

export default function ReviewArchiveHeaderSection() {
  return (
    <View className="gap-2">
      <Text
        className="text-primary text-[36px] leading-[45px] font-extrabold tracking-tight"
      >
        Review Archive
      </Text>
      <Text className="text-muted text-base">
        당신의 소중한 경험을 기록해보세요
      </Text>
    </View>
  );
}
