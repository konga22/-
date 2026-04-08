import React from "react";
import { Animated, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNavItem from "./BottomNavItem";
import { TAB_CONFIG, type TabName } from "../../global/navigation/tabConfig";
import useBottomNavAnimation from "../../global/navigation/useBottomNavAnimation";

type BottomNavBarProps = {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
  translateY?: Animated.Value;
};

export default function BottomNavBar({
  activeTab,
  onTabPress,
  translateY,
}: BottomNavBarProps) {
  const { containerStyle, scaleByTab } = useBottomNavAnimation(
    activeTab,
    translateY
  );

  return (
    <Animated.View
      className="absolute bottom-0 left-0 right-0 z-20"
      style={containerStyle}
    >
      <SafeAreaView edges={["bottom"]}>
        <View
          className="flex-row items-center justify-between rounded-tl-[32px] rounded-tr-[32px] px-2 pb-3 pt-3"
          style={{
            backgroundColor: "rgba(252,248,252,0.92)",
            borderTopWidth: 1,
            borderTopColor: "rgba(132,77,116,0.08)",
            shadowColor: "rgba(51,50,56,0.06)",
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 1,
            shadowRadius: 40,
            elevation: 12,
          }}
        >
          {TAB_CONFIG.map((tab) => (
            <BottomNavItem
              key={tab.id}
              activeTab={activeTab}
              item={tab}
              onPress={onTabPress}
              scale={scaleByTab[tab.id]}
            />
          ))}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}
