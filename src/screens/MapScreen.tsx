import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import TopAppBar from "../components/common/TopAppBar";
import BottomNavBar from "../components/common/BottomNavBar";
import Text from "../components/ui/AppText";

const IMG_MAP_BG = "https://www.figma.com/api/mcp/asset/e7660ab7-413f-49aa-9afd-7d7bcec9a136";
const IMG_DETAIL_THUMB = "https://www.figma.com/api/mcp/asset/75a0e683-e6f5-4a4a-9356-826865624186";

const FILTER_CHIPS = ["성수동", "홍대", "부산 해운대", "강남역"];

// ─── Filter Chips ──────────────────────────────────────────────────────────────
function FilterChips({ active, onSelect }: { active: string; onSelect: (v: string) => void }) {
  return (
    <View className="absolute top-[80px] left-0 right-0 z-10">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
      >
        {FILTER_CHIPS.map((chip) => {
          const isActive = chip === active;
          return (
            <TouchableOpacity
              key={chip}
              onPress={() => onSelect(chip)}
              className={`px-6 py-2.5 rounded-full ${
                isActive ? "bg-primary" : "bg-white/80"
              }`}
              style={!isActive ? { backdropFilter: "blur(6px)" } : undefined}
            >
              <Text
                className={`text-sm ${
                  isActive ? "text-white" : "text-muted"
                }`}
              >
                {chip}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

// ─── Map Pins ──────────────────────────────────────────────────────────────────
function MapPin({ label, top, left, selected }: { label: string; top: number; left: number; selected?: boolean }) {
  return (
    <View className="absolute items-center" style={{ top, left }}>
      <View
        className={`w-9 h-10 rounded-full items-center justify-center ${
          selected ? "bg-primary" : "bg-[rgba(132,77,116,0.7)]"
        }`}
      >
        <Text className="text-white text-base">📍</Text>
      </View>
      <View className="bg-white border border-[rgba(249,180,225,0.3)] rounded-full px-3 py-1 mt-1 shadow-sm">
        <Text className="text-primary text-xs">{label}</Text>
      </View>
    </View>
  );
}

// ─── Selected Item Card ────────────────────────────────────────────────────────
function DetailCard() {
  return (
    <View className="absolute bottom-[110px] left-6 right-6 z-10">
      <View
        className="bg-white/95 rounded-[32px] p-5 gap-4"
        style={{
          shadowColor: "rgba(132,77,116,0.12)",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 1,
          shadowRadius: 50,
          elevation: 10,
        }}
      >
        {/* 분홍 블러 장식 */}
        <View
          className="absolute w-24 h-24 rounded-full -top-10 -right-10 opacity-20"
          style={{ backgroundColor: "#f9b4e1" }}
        />

        {/* 상단: 썸네일 + 정보 */}
        <View className="flex-row gap-4">
          <View className="w-24 h-24 rounded-[24px] overflow-hidden">
            <Image
              source={{ uri: IMG_DETAIL_THUMB }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <View className="flex-1 gap-1.5">
            <View className="flex-row items-center justify-between">
              <View className="bg-primary-light rounded-full px-2 py-0.5">
                <Text className="text-primary text-[10px] font-bold tracking-widest">D-4</Text>
              </View>
              <Text className="text-base">🔖</Text>
            </View>
            <Text className="text-heading text-lg font-semibold leading-6">
              무신사 뷰티 X{"\n"}라벤더 팝업 스토어
            </Text>
            <View className="flex-row gap-3 mt-1">
              <View className="flex-row items-center gap-1">
                <Text className="text-xs">⏱</Text>
                <Text className="text-muted text-xs">대기 45분</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Text className="text-xs">📍</Text>
                <Text className="text-muted text-xs">350m</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 하단: 버튼 */}
        <View className="flex-row gap-2">
          <TouchableOpacity
            className="flex-1 flex-row items-center justify-center gap-2 py-3.5 rounded-full"
            style={{ backgroundColor: "#844d74" }}
          >
            <Text className="text-white text-sm">🗺</Text>
            <Text className="text-white text-sm">길찾기 및 상세정보</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-12 h-12 bg-muted-subtle rounded-full items-center justify-center">
            <Text className="text-base">↗</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// ─── Map Screen ────────────────────────────────────────────────────────────────
export default function MapScreen() {
  const [activeChip, setActiveChip] = useState("성수동");

  return (
    <View className="flex-1 bg-surface-secondary">
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* 지도 배경 */}
      <Image
        source={{ uri: IMG_MAP_BG }}
        className="absolute inset-0 w-full h-full opacity-40"
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <View className="absolute inset-0 bg-surface-secondary opacity-60" />

      <TopAppBar variant="logo" rightIcon="🔍" />
      <FilterChips active={activeChip} onSelect={setActiveChip} />

      {/* 지도 핀들 */}
      <MapPin label="성수 디올" top={294} left={97} />
      <MapPin label="홍대 팝업" top={442} left={183} />
      <MapPin label="현재 선택됨" top={370} left={182} selected />

      {/* 새로고침 버튼 */}
      <TouchableOpacity
        className="absolute top-[144px] right-6 z-10 w-12 h-12 bg-white rounded-full items-center justify-center"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <Text className="text-base">↻</Text>
      </TouchableOpacity>

      <DetailCard />
      <BottomNavBar activeTab="map" onTabPress={() => {}} />
    </View>
  );
}
