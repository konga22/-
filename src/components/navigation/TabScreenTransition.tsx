import React, { useEffect, useMemo, useRef, type PropsWithChildren } from "react";
import { Animated, Easing, View } from "react-native";
import type { TabTransitionDirection } from "../../global/navigation/appRoutes";

type TabScreenTransitionProps = PropsWithChildren<{
  direction: TabTransitionDirection;
}>;

const TAB_SCREEN_TRANSITION_DISTANCE = 18;
const TAB_SCREEN_TRANSITION_DURATION_MS = 120;

export default function TabScreenTransition({
  children,
  direction,
}: TabScreenTransitionProps) {
  if (direction === "none") {
    return <View className="flex-1">{children}</View>;
  }

  return (
    <AnimatedTabScreenTransition direction={direction}>
      {children}
    </AnimatedTabScreenTransition>
  );
}

function AnimatedTabScreenTransition({
  children,
  direction,
}: TabScreenTransitionProps) {
  const entry = useRef(new Animated.Value(0)).current;
  const initialOffset =
    direction === "right"
      ? TAB_SCREEN_TRANSITION_DISTANCE
      : direction === "left"
        ? -TAB_SCREEN_TRANSITION_DISTANCE
        : 0;

  useEffect(() => {
    entry.setValue(0);
    const animation = Animated.timing(entry, {
      toValue: 1,
      duration: TAB_SCREEN_TRANSITION_DURATION_MS,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    });

    animation.start();

    return () => animation.stop();
  }, [direction, entry]);

  const transitionStyle = useMemo(
    () => ({
      flex: 1,
      opacity: entry.interpolate({
        inputRange: [0, 1],
        outputRange: [0.98, 1],
      }),
      transform: [
        {
          translateX: entry.interpolate({
            inputRange: [0, 1],
            outputRange: [initialOffset, 0],
          }),
        },
      ],
    }),
    [entry, initialOffset]
  );

  return <Animated.View style={transitionStyle}>{children}</Animated.View>;
}
