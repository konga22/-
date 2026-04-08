import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../ui/AppText";

export type TopAppBarVariant = "logo" | "title" | "back";

type Props = {
  variant?: TopAppBarVariant;
  /** variant="title" | "back" 일 때 표시될 제목 */
  title?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  /** 우측 아이콘 (기본값: 알림 🔔) */
  rightIcon?: string;
};

/**
 * TopAppBar
 * - variant="logo": 햄버거 | Popble 로고 | 아이콘
 * - variant="title": 햄버거 | 텍스트 제목 | 아이콘
 * - variant="back": ← | 텍스트 제목 | 아이콘
 */
export default function TopAppBar({
  variant = "logo",
  title,
  onLeftPress,
  onRightPress,
  rightIcon = "🔔",
}: Props) {
  const isBack = variant === "back";

  return (
    <View
      className="absolute top-0 left-0 right-0 z-10"
      style={{ backgroundColor: "rgba(252,248,252,0.85)" }}
    >
      <SafeAreaView edges={["top"]}>
        <View className="flex-row items-center justify-between px-6 h-16">
          {/* 왼쪽: 햄버거 or 뒤로가기 */}
          <TouchableOpacity
            onPress={onLeftPress}
            className="w-10 h-10 items-center justify-center"
          >
            {isBack ? (
              <Text className="text-primary text-xl font-bold">←</Text>
            ) : (
              <View className="gap-1">
                <View className="w-5 h-0.5 bg-primary" />
                <View className="w-5 h-0.5 bg-primary" />
                <View className="w-5 h-0.5 bg-primary" />
              </View>
            )}
          </TouchableOpacity>

          {/* 중앙: 로고 or 제목 */}
          {variant === "logo" ? (
            <Text className="text-2xl font-brand italic text-primary tracking-tight">
              Popble
            </Text>
          ) : (
            <Text className="text-xl font-semibold text-primary tracking-tight">
              {title}
            </Text>
          )}

          {/* 오른쪽: 아이콘 */}
          <TouchableOpacity
            onPress={onRightPress}
            className="w-10 h-10 items-center justify-center"
          >
            <Text className="text-xl">{rightIcon}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
