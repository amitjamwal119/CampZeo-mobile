import { Stack } from "expo-router";

export default function CampaignsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Campaigns", headerShown: false }}
      />
      <Stack.Screen
        name="campaignsDetails"
        options={{ title: "Campaign Details" }}
      />
    </Stack>
  );
}
