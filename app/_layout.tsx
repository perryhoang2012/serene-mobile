import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";
import "../global.css";
import { MyText } from "@/components/ui/MyText";
import { Slot } from "expo-router";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Bold: require("../assets/fonts/TT-Norms-Pro-Bold.otf"),
    Light: require("../assets/fonts/TT-Norms-Pro-Light.otf"),
    Medium: require("../assets/fonts/TT-Norms-Pro-Medium.otf"),
    Regular: require("../assets/fonts/TT-Norms-Pro-Regular.otf"),
    Thin: require("../assets/fonts/TT-Norms-Pro-Thin.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}
