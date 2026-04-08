import React from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import Text from "../ui/AppText";

// 탭 타입 — 앱 전체에서 공유
export type TabName = "home" | "map" | "community" | "saved" | "profile";

type TabItem = {
  id: TabName;
  icon: string;
  label: string;
};

const TABS: TabItem[] = [
  { id: "home", icon: "🏠", label: "홈" },
  { id: "map", icon: "🗺️", label: "지도" },
  { id: "community", icon: "💬", label: "커뮤니티" },
  { id: "saved", icon: "🔖", label: "저장" },
  { id: "profile", icon: "👤", label: "마이" },
];

type Props = {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
  // 애니메이션 연결용 — 추후 Animated.Value 주입 가능
  translateY?: Animated.Value;
};

/**
 * BottomNavBar
 * - absolute bottom-0, z-20 으로 화면 위에 띄움
 * - translateY prop 으로 slide-up/down 애니메이션 연결 가능
 * - activeTab 변경 시 활성 탭 스타일 변경
 */
export default function BottomNavBar({ activeTab, onTabPress, translateY }: Props) {
  const animStyle = translateY ? { transform: [{ translateY }] } : undefined;

  return (
    <Animated.View
      className="absolute bottom-0 left-0 right-0 z-20"
      style={animStyle}
    >
      <View
        className="flex-row items-center justify-around pt-2 pb-6 rounded-tl-[32px] rounded-tr-[32px]"
        style={{
          backgroundColor: "rgba(252,248,252,0.88)",
          borderTopWidth: 1,
          borderTopColor: "rgba(132,77,116,0.08)",
          shadowColor: "rgba(51,50,56,0.06)",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 1,
          shadowRadius: 40,
          elevation: 12,
        }}
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <TouchableOpacity
              key={tab.id}
              onPress={() => onTabPress(tab.id)}
              activeOpacity={0.75}
              className={`items-center px-4 py-1 rounded-full ${
                isActive ? "bg-primary-light" : ""
              }`}
            >
              <Text className="text-lg">{tab.icon}</Text>
              <Text
                className={`text-[10px] mt-0.5 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted opacity-60"
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
}
