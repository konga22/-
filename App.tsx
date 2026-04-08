import "./global.css";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SideMenu from "./src/components/navigation/SideMenu";
import type { AppRoute } from "./src/global/navigation/appRoutes";
import {
  getActiveTab,
  type AppScreenProps,
} from "./src/global/navigation/appRoutes";
import HomeScreen from "./src/screens/HomeScreen";
import MapScreen from "./src/screens/MapScreen";
import CommunityMainScreen from "./src/screens/CommunityMainScreen";
import CommunityScreen from "./src/screens/CommunityScreen";
import ReviewScreen from "./src/screens/ReviewScreen";
import PartnerScreen from "./src/screens/PartnerScreen";
import SavedScreen from "./src/screens/SavedScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

function renderScreen(route: AppRoute, props: AppScreenProps) {
  switch (route) {
    case "home":
      return <HomeScreen {...props} />;
    case "map":
      return <MapScreen {...props} />;
    case "community":
      return <CommunityMainScreen {...props} />;
    case "community-feed":
      return <CommunityScreen {...props} />;
    case "review":
      return <ReviewScreen {...props} />;
    case "partner":
      return <PartnerScreen {...props} />;
    case "saved":
      return <SavedScreen {...props} />;
    case "profile":
      return <ProfileScreen {...props} />;
    default:
      return <HomeScreen {...props} />;
  }
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Moneygraphy-Rounded": require("./assets/fonts/Moneygraphy-Rounded.ttf"),
    "MoveSans-Bold": require("./assets/fonts/MoveSans-Bold.ttf"),
  });
  const [route, setRoute] = useState<AppRoute>("home");
  const [menuVisible, setMenuVisible] = useState(false);

  const activeTab = getActiveTab(route);

  const screenProps = useMemo<AppScreenProps>(
    () => ({
      activeTab,
      onOpenMenu: () => setMenuVisible(true),
      onNavigate: (nextRoute) => {
        setRoute(nextRoute);
        setMenuVisible(false);
      },
      onTabPress: (nextTab) => {
        setRoute(nextTab);
        setMenuVisible(false);
      },
    }),
    [activeTab]
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View className="flex-1 bg-surface">
        {renderScreen(route, screenProps)}
        <SideMenu
          activeRoute={route}
          onClose={() => setMenuVisible(false)}
          onNavigate={(nextRoute) => setRoute(nextRoute)}
          visible={menuVisible}
        />
      </View>
    </SafeAreaProvider>
  );
}
