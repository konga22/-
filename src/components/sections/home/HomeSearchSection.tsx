import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Text from "../../ui/AppText";

const TRENDING_CHIPS = [
  { label: "1 성수 디올", bg: "bg-[#fff1f8]", text: "text-[#6b5262]" },
  { label: "2 산리오 마켓", bg: "bg-[#eef4ff]", text: "text-[#4d5d77]" },
  { label: "3 빵가든", bg: "bg-[#f4f5f7]", text: "text-muted" },
];

export default function HomeSearchSection() {
  return (
    <View className="gap-3.5">
      <View
        className="flex-row items-center rounded-full border border-[#edf1f5] bg-white px-5 py-4"
        style={{
          shadowColor: "rgba(15,23,42,0.04)",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 1,
          shadowRadius: 18,
          elevation: 2,
        }}
      >
        <Ionicons
          name="search-outline"
          size={18}
          color="#9da3ae"
          style={{ marginRight: 12 }}
        />
        <Text className="flex-1 text-[15px] leading-5 text-[#8b9098]">
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
              className={`${chip.bg} rounded-full border border-[#eef1f4] px-4 py-2`}
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
