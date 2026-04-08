import React from "react";
import { TouchableOpacity, Animated } from "react-native";
import Text from "../ui/AppText";

type Props = {
  onPress?: () => void;
  icon?: string;
  bottom?: number;
  right?: number;
  /** 애니메이션 연결용 */
  scale?: Animated.Value;
};

/**
 * FAB (Floating Action Button)
 * - 그라디언트 배경 (primary → 핑크)
 * - scale prop 으로 pop-in 애니메이션 연결 가능
 */
export default function FAB({
  onPress,
  icon = "+",
  bottom = 96,
  right = 16,
  scale,
}: Props) {
  const animStyle = scale ? { transform: [{ scale }] } : undefined;

  return (
    <Animated.View
      className="absolute z-20"
      style={[{ bottom, right }, animStyle]}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.85}
        className="w-14 h-14 rounded-full items-center justify-center"
        style={{
          backgroundColor: "#844d74",
          shadowColor: "rgba(132,77,116,0.25)",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 1,
          shadowRadius: 30,
          elevation: 10,
        }}
      >
        <Text className="text-white text-2xl font-light">{icon}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
