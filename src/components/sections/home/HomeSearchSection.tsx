import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Text from "../../ui/AppText";

const TRENDING_CHIPS = [
  { label: "1 성수 디올", bg: "bg-[#fadaec]", text: "text-[#624b59]" },
  { label: "2 산리오 마켓", bg: "bg-lavender", text: "text-[#533f66]" },
  { label: "3 빵지순례", bg: "bg-[#e5e1e9]", text: "text-muted" },
];

export default function HomeSearchSection() {
  return (
    <View className="gap-3.5">
      <View className="flex-row items-center rounded-full border border-[rgba(132,77,116,0.08)] bg-[#eae7ed] px-5 py-4 shadow-sm">
        <Text className="mr-3 text-[17px] text-[#605e65] opacity-55">🔍</Text>
        <Text className="flex-1 text-[15px] leading-5 text-[#605e65] opacity-60">
          지금 가장 핫한 팝업은?
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingRight: 16 }}
      >
        <View className="flex-row items-center gap-2">
          <Text className="mr-1 text-[12px] font-semibold uppercase tracking-[1.4px] text-primary">
            Trending
          </Text>
          {TRENDING_CHIPS.map((chip) => (
            <TouchableOpacity
              key={chip.label}
              className={`${chip.bg} rounded-full px-4 py-2`}
              activeOpacity={0.85}
            >
              <Text className={`${chip.text} text-[13px] leading-4`}>
                {chip.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
