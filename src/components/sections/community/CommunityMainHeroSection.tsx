import React from "react";
import { View } from "react-native";
import Text from "../../ui/AppText";

export default function CommunityMainHeroSection() {
  return (
    <View className="gap-2">
      <View className="self-start bg-primary-light rounded-full px-3 py-0.5">
        <Text className="text-primary text-[10px] font-bold tracking-widest uppercase">
          Real-time
        </Text>
      </View>
      <Text className="text-heading font-extrabold tracking-tight" style={{ fontSize: 40, lineHeight: 48 }}>
        오늘의{"\n"}실시간 인기글
      </Text>
    </View>
  );
}
