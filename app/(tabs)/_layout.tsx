import { Tabs } from 'expo-router';
import { YStack } from 'tamagui';

import BottomBar from '../common/bottomBar';
import TopBar from '../common/topBar';

import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});


export default function TabsLayout() {
  useEffect(() => {
    (async () => {
      await Notifications.requestPermissionsAsync();
    })();
  }, []);

  return (
    <>
      <YStack flex={1}>
        <TopBar />
        <Tabs
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <BottomBar {...props} />
          }
        >
          <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
          <Tabs.Screen name="accounts" options={{ title: 'Accounts' }} />
          {/* <Tabs.Screen name="analyticsDashboard" options={{ title: 'AnalyticsDashboard' }} /> */}
          <Tabs.Screen name="campaigns" options={{ title: 'Campaigns' }} />
          <Tabs.Screen name="contacts" options={{ title: 'Contacts' }} />
          <Tabs.Screen name="logs" options={{ title: 'Logs' }} />
          {/* <Tabs.Screen name="profile" options={{ title: 'Profile' }} /> */}
        </Tabs>
      </YStack>
    </>
  )
}
