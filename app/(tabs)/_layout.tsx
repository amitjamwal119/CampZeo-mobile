import { Tabs } from "expo-router";
import { YStack } from "tamagui";

import BottomBar from "../common/bottomBar";
import TopBar from "../common/topBar";

export default function TabsLayout() {
  return (
    <>
      <YStack flex={1}>
        <TopBar />
        <Tabs
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <BottomBar {...props} />}
        >
          <Tabs.Screen name="index" options={{ title: "Dashboard" }} />
          <Tabs.Screen name="logs" options={{ title: "Logs" }} />
          <Tabs.Screen name="campaigns" options={{ title: "Campaigns" }} />
          <Tabs.Screen name="contacts" options={{ title: "Contacts" }} />
          <Tabs.Screen name="accounts" options={{ title: "Accounts" }} />
        </Tabs>
      </YStack>
    </>
  );
}
