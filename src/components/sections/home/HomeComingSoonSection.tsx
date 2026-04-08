import React from "react";
import { ScrollView, View } from "react-native";
import SectionHeader from "../../ui/SectionHeader";
import ComingSoonCard from "../../cards/home/ComingSoonCard";

const IMG_COMING1 =
  "https://www.figma.com/api/mcp/asset/9dcf8936-36da-4e48-8dbf-97edc5c06fc1";
const IMG_COMING2 =
  "https://www.figma.com/api/mcp/asset/4106b3e6-a4aa-40b3-932a-bd96a4438ab0";

export default function HomeComingSoonSection() {
  const items = [
    { image: IMG_COMING1, dday: "D-3", title: "오브제 마켓 vol.2" },
    { image: IMG_COMING2, dday: "D-7", title: "네온 드림: 디지털 전시" },
  ];

  return (
    <View className="gap-4">
      <SectionHeader title="곧 오픈할 팝업" actionLabel="D-Day 알림" />
      <ScrollView
        horizontal
        directionalLockEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingRight: 16 }}
      >
        {items.map((item) => (
          <ComingSoonCard key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
}
