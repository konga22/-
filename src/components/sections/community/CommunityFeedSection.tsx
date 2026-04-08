import React from "react";
import { View } from "react-native";
import CommunitySectionHeader from "./CommunitySectionHeader";
import TipFeedCard, { type TipFeedCardProps } from "../../cards/community/TipFeedCard";

type Props = {
  items: TipFeedCardProps[];
};

export default function CommunityFeedSection({ items }: Props) {
  return (
    <View className="px-4 gap-6">
      <CommunitySectionHeader badge="Real-time Feed" badgeColor="#f9b4e1" title="실시간 팝업 정보" />
      <View className="gap-4">
        {items.map((item) => (
          <TipFeedCard key={`${item.category}-${item.timestamp}`} {...item} />
        ))}
      </View>
    </View>
  );
}
