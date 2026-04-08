import React from "react";
import { View, Image } from "react-native";
import Text from "../../ui/AppText";

export type TrendingPostCardProps = {
  rank: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
  timestamp: string;
  indent?: boolean;
};

export default function TrendingPostCard({
  rank,
  image,
  category,
  categoryColor,
  title,
  body,
  likes,
  comments,
  timestamp,
  indent,
}: TrendingPostCardProps) {
  return (
    <View
      className="bg-white rounded-[32px] overflow-hidden"
      style={{
        marginLeft: indent ? 34 : 0,
        shadowColor: "rgba(51,50,56,0.06)",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 5,
      }}
    >
      <View className="h-52 relative">
        <Image source={{ uri: image }} className="w-full h-full" resizeMode="cover" />
        <View className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary items-center justify-center">
          <Text className="text-white text-sm font-black">{rank}</Text>
        </View>
      </View>

      <View className="p-5 gap-2.5">
        <View className="self-start rounded-full px-3 py-0.5" style={{ backgroundColor: `${categoryColor}33` }}>
          <Text className="text-xs font-semibold" style={{ color: categoryColor }}>
            {category}
          </Text>
        </View>

        <Text className="text-heading text-base font-bold leading-6">{title}</Text>
        <Text className="text-muted text-sm leading-[22px]" numberOfLines={2}>
          {body}
        </Text>

        <View className="flex-row items-center justify-between pt-1">
          <Text className="text-muted text-[11px]">{timestamp}</Text>
          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Text className="text-sm">❤️</Text>
              <Text className="text-heading text-[11px] font-semibold">{likes}</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Text className="text-sm">💬</Text>
              <Text className="text-muted text-[11px]">{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
