import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text, View } from "react-native";
import "react-native-reanimated";
import "../global.css";
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20, fontFamily: "Regular" }}>123123</Text>
      <View className="w-10 h-10 bg-blue-500" />
    </View>
  );
}
