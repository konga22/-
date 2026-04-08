import React from "react";
import { Image, View } from "react-native";
import Text from "../../ui/AppText";

export type TrendingPopupCardProps = {
  image: string;
  category: string;
  title: string;
  until: string;
  hot?: boolean;
};

export default function TrendingPopupCard({
  image,
  category,
  title,
  until,
  hot,
}: TrendingPopupCardProps) {
  return (
    <View className="w-[260px] gap-2.5">
      <View className="rounded-[32px] overflow-hidden shadow-md">
        <Image
          source={{ uri: image }}
          className="w-[260px] h-[325px]"
          resizeMode="cover"
        />
        {hot ? (
          <View className="absolute top-3 left-3 bg-white/80 rounded-full px-3 py-1">
            <Text className="text-primary text-[10px] font-bold">HOT</Text>
          </View>
        ) : null}
      </View>
      <View className="px-1">
        <Text className="text-primary-dark text-[11px] font-bold tracking-widest uppercase">
          {category}
        </Text>
        <Text className="text-heading text-base leading-6 mt-0.5">
          {title}
        </Text>
        <Text className="text-muted text-xs mt-0.5">{until}</Text>
      </View>
    </View>
  );
}
