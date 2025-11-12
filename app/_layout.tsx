
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import { PortalProvider } from "@tamagui/portal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tamaguiConfig from "../tamagui.config";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <TamaguiProvider config={tamaguiConfig}>
            <PortalProvider>
              <Stack screenOptions={{ headerShown: false }} />
            </PortalProvider>
          </TamaguiProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
