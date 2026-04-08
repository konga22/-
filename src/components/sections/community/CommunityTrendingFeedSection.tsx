import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../ui/AppText";
import TrendingPostCard, { type TrendingPostCardProps } from "../../cards/community/TrendingPostCard";

type Props = {
  items: TrendingPostCardProps[];
};

export default function CommunityTrendingFeedSection({ items }: Props) {
  return (
    <View className="gap-5">
      {items.map((item) => (
        <TrendingPostCard key={`${item.rank}-${item.title}`} {...item} />
      ))}
      <TouchableOpacity className="items-center py-4 rounded-full border" style={{ borderColor: "rgba(132,77,116,0.2)" }}>
        <Text className="text-primary text-sm font-semibold">더 많은 인기글 보기</Text>
      </TouchableOpacity>
    </View>
  );
}
