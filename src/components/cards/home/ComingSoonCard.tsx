import React from "react";
import { Image, View } from "react-native";
import Text from "../../ui/AppText";

export type ComingSoonCardProps = {
  image: string;
  dday: string;
  title: string;
};

export default function ComingSoonCard({
  image,
  dday,
  title,
}: ComingSoonCardProps) {
  return (
    <View className="w-[200px] h-[264px] bg-white rounded-[32px] shadow-sm border border-[rgba(179,177,184,0.1)] overflow-hidden">
      <Image
        source={{ uri: image }}
        className="w-full h-[174px] rounded-[24px] m-3"
        style={{ width: 174, height: 174 }}
        resizeMode="cover"
      />
      <View className="flex-row items-center justify-between px-3 mt-1">
        <View className="bg-lavender rounded-2xl px-2 py-0.5">
          <Text className="text-lavender-dark text-[10px] font-bold">
            {dday}
          </Text>
        </View>
        <Text className="text-base">🔔</Text>
      </View>
      <Text
        className="text-heading text-sm font-semibold px-3 mt-1"
        numberOfLines={1}
      >
        {title}
      </Text>
    </View>
  );
}
