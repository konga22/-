import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { Stack, usePathname, useRouter } from "expo-router";
import { View } from "react-native";
import { useFonts } from "expo-font";
import SideMenu from "../../components/navigation/SideMenu";
import { HomeFeatureProvider } from "../../features/home/HomeFeatureContext";
import {
  getActiveTab,
  getRouteFromPathname,
  getRouteHref,
  type AppRoute,
  type AppScreenProps,
} from "./appRoutes";
import type { TabName } from "./tabConfig";
import { TabEventProvider } from "./TabEventContext";

const AppNavigationContext = createContext<AppScreenProps | null>(null);

export function useAppScreenProps() {
  const context = useContext(AppNavigationContext);

  if (!context) {
    throw new Error("useAppScreenProps must be used inside AppNavigationProvider.");
  }

  return context;
}

function AppNavigationProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();
  const activeRoute = getRouteFromPathname(pathname);
  const activeTab = getActiveTab(activeRoute);
  const [menuVisible, setMenuVisible] = useState(false);

  const navigateToRoute = useCallback(
    (nextRoute: AppRoute) => {
      setMenuVisible(false);

      if (nextRoute === activeRoute) {
        return;
      }

      router.replace(getRouteHref(nextRoute));
    },
    [activeRoute, router]
  );

  const handleTabPress = useCallback(
    (nextTab: TabName) => {
      navigateToRoute(nextTab);
    },
    [navigateToRoute]
  );

  const screenProps = useMemo<AppScreenProps>(
    () => ({
      activeTab,
      tabTransitionDirection: "none",
      onOpenMenu: () => setMenuVisible(true),
      onNavigate: navigateToRoute,
      onTabPress: handleTabPress,
    }),
    [activeTab, handleTabPress, navigateToRoute]
  );

  return (
    <AppNavigationContext.Provider value={screenProps}>
      <View className="flex-1 bg-surface">
        {children}
        <SideMenu
          activeRoute={activeRoute}
          onClose={() => setMenuVisible(false)}
          onNavigate={navigateToRoute}
          visible={menuVisible}
        />
      </View>
    </AppNavigationContext.Provider>
  );
}

export default function NavigationRoot() {
  const [fontsLoaded] = useFonts({
    "Moneygraphy-Rounded": require("../../../assets/fonts/Moneygraphy-Rounded.ttf"),
    "MoveSans-Bold": require("../../../assets/fonts/MoveSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigationProvider>
      <TabEventProvider>
        <HomeFeatureProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ animation: "none" }} />
            <Stack.Screen name="map" options={{ animation: "none" }} />
            <Stack.Screen name="community" options={{ animation: "none" }} />
            <Stack.Screen name="saved" options={{ animation: "none" }} />
            <Stack.Screen name="profile" options={{ animation: "none" }} />
            <Stack.Screen name="community-feed" />
            <Stack.Screen name="review" />
            <Stack.Screen name="partner" />
            <Stack.Screen name="search" options={{ animation: "none" }} />
            <Stack.Screen name="popups/[id]" />
            <Stack.Screen name="popups/section/[section]" />
            <Stack.Screen name="popups/submit" />
          </Stack>
        </HomeFeatureProvider>
      </TabEventProvider>
    </AppNavigationProvider>
  );
}
