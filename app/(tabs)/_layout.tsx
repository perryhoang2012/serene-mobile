import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="settings" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="WaterTracker"
        options={{
          title: "WaterTracker",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="person" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SleepSounds"
        options={{
          title: "SleepSounds",
          tabBarIcon: ({ color }) => (
            <MaterialIcons size={28} name="notifications" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
