// import { useState } from "react";
import {
  H3,
  Button,
  YStack,
} from "tamagui";
//   XStack,  View,

import { useRouter } from "expo-router";

export default function Campaigns() {
  const routePage = useRouter();

  
  return (
    <YStack
      flex={1}
      alignItems="center"
      bg="$background"
      padding=""
    >
      {/* Header */}
      <H3 fontWeight="700" mb="$4">
        Campaign list
      </H3>
      <Button
        theme="blue"
        width="100%"
        mt="$3"
        size="$4"
        borderRadius="$4"
        onPress={() => routePage.push("/(tabs)/campaigns/createCampaigns")}
      >
        Create Campaign
      </Button>
      {/* Card container for form */}
      
    </YStack>
  );
}
