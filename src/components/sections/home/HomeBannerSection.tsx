import React from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import Text from "../../ui/AppText";

const IMG_MAP_BANNER =
  "https://www.figma.com/api/mcp/asset/fd6688f9-0367-4998-8e08-ffbd5caaa980";

export default function HomeBannerSection() {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className="rounded-[32px] overflow-hidden h-44 shadow-lg bg-primary"
    >
      <ImageBackground
        source={{ uri: IMG_MAP_BANNER }}
        className="flex-1"
        imageStyle={{ opacity: 0.6 }}
        resizeMode="cover"
      >
        <View className="flex-1 justify-end p-6">
          <View className="absolute inset-0 bg-[rgba(132,77,116,0.42)]" />
          <Text className="z-10 max-w-[72%] text-[32px] font-semibold leading-[36px] tracking-[-0.4px] text-white">
            내 근처의{"\n"}팝업 지도로 가기
          </Text>
          <View className="flex-row items-center mt-3 z-10">
            <Text className="text-[15px] text-white/90">
              지금 열려있는 스토어 탐색하기
            </Text>
            <Text className="ml-1 text-[15px] text-white/90">›</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
