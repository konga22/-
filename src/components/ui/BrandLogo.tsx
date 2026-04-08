import React from "react";
import { View } from "react-native";
import Text from "./AppText";

type BrandLogoProps = {
  size?: "sm" | "md";
};

const CONTAINER_BY_SIZE = {
  sm: "h-[40px]",
  md: "h-[46px]",
} as const;

const TEXT_BY_SIZE = {
  sm: "text-[36px] leading-[36px]",
  md: "text-[42px] leading-[42px]",
} as const;

export default function BrandLogo({ size = "sm" }: BrandLogoProps) {
  const containerClassName = CONTAINER_BY_SIZE[size];
  const textClassName = TEXT_BY_SIZE[size];

  return (
    <View className={`relative items-center justify-center ${containerClassName}`}>
      <Text
        className={`absolute font-brand italic tracking-[-1.2px] text-bubble-sky ${textClassName}`}
        style={{
          opacity: 0.88,
          transform: [{ translateX: -1.9 }, { translateY: 1.5 }],
        }}
      >
        Popble
      </Text>
      <Text
        className={`absolute font-brand italic tracking-[-1.2px] text-bubble-pink ${textClassName}`}
        style={{
          opacity: 0.92,
          transform: [{ translateX: 1.8 }, { translateY: -0.8 }],
        }}
      >
        Popble
      </Text>
      <Text
        className={`absolute font-brand italic tracking-[-1.2px] text-white ${textClassName}`}
        style={{
          opacity: 0.92,
          transform: [{ translateY: -1.4 }],
        }}
      >
        Popble
      </Text>
      <Text
        className={`font-brand italic tracking-[-1.2px] text-bubble-logo ${textClassName}`}
        style={{
          textShadowColor: "rgba(255,255,255,0.95)",
          textShadowOffset: { width: 0, height: -1 },
          textShadowRadius: 14,
          transform: [{ scaleX: 1.04 }],
        }}
      >
        Popble
      </Text>
    </View>
  );
}
