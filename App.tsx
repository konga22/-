import "./global.css";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Moneygraphy-Rounded": require("./assets/fonts/Moneygraphy-Rounded.ttf"),
    "MoveSans-Bold": require("./assets/fonts/MoveSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}
