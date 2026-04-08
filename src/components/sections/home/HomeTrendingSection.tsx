import React from "react";
import { ScrollView, View } from "react-native";
import SectionHeader from "../../ui/SectionHeader";
import TrendingPopupCard from "../../cards/home/TrendingPopupCard";

const IMG_CARD1 =
  "https://www.figma.com/api/mcp/asset/f848b951-20b3-489e-8af8-f4c035108ce3";
const IMG_CARD2 =
  "https://www.figma.com/api/mcp/asset/53296507-c1f7-4e7f-ab83-1b1e1089f5dd";

export default function HomeTrendingSection() {
  const cards = [
    {
      image: IMG_CARD1,
      category: "Fashion • Seongsu",
      title: "아틀리에 누보: 여름의 정원",
      until: "~ 08.24 까지",
      hot: true,
    },
    {
      image: IMG_CARD2,
      category: "Cafe • Hannam",
      title: "페일 라벤더 디저트 하우스",
      until: "~ 09.02 까지",
    },
  ];

  return (
    <View className="gap-4">
      <SectionHeader title="현재 인기 있는 팝업" actionLabel="전체보기" />
      <ScrollView
        horizontal
        directionalLockEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingRight: 16 }}
      >
        {cards.map((card) => (
          <TrendingPopupCard key={card.title} {...card} />
        ))}
      </ScrollView>
    </View>
  );
}
