import React from "react";
import { View } from "react-native";
import SectionHeader from "../../ui/SectionHeader";
import ClosingSoonItem from "../../cards/home/ClosingSoonItem";

const IMG_CLOSING1 =
  "https://www.figma.com/api/mcp/asset/fe582bc9-fdcd-4369-ae1a-86862c74d1af";
const IMG_CLOSING2 =
  "https://www.figma.com/api/mcp/asset/f7beefee-68d3-46e6-a3e6-81da0a6ccc40";

export default function HomeClosingSoonSection() {
  const items = [
    {
      image: IMG_CLOSING1,
      title: "글로우 뷰티 클로젯",
      subtitle: "오늘 영업 종료",
      badge: "2시간 남음",
      urgent: true,
    },
    {
      image: IMG_CLOSING2,
      title: "빈티지 아카이브 팝업",
      subtitle: "내일 영업 종료",
      badge: "D-1",
    },
  ];

  return (
    <View className="gap-4">
      <SectionHeader title="종료 임박 팝업" actionLabel="Hurry Up!" />
      <View className="gap-3">
        {items.map((item) => (
          <ClosingSoonItem key={item.title} {...item} />
        ))}
      </View>
    </View>
  );
}
