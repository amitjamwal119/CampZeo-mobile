import { XStack, View, Popover, Paragraph, Avatar } from "tamagui";
//  Avatar,
import { Ionicons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

import { useState } from "react";
import { TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";

export default function TopBar() {
  const [notification, setNotification] = useState(false);

  // Notification functionality(Local Notification) -----------------------------
  const checkNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hello, User",
        body: "This is local notification",
      },
      trigger: null,
    });

    setNotification(!notification);
    console.log("hellooooo");
  };


  // Profile logic

  // const routePage = useRouter();

  return (
  
    <XStack
      alignItems="center"
      justifyContent="space-between"
      // paddingTop={insets.top + 2}

      paddingHorizontal="$5"
      paddingVertical="$3"
      paddingBottom="$2"
      borderBottomWidth={1}
      borderColor="$borderColor"
      backgroundColor="$background"
    >
      {/* Menu Sidebar */}
      <Ionicons name="menu-outline" size={24} color="#007AFF" />
      {/* <Text fontWeight="700" fontSize="$6">CampZeoo</Text> */}
      <XStack gap="$6" alignItems="center">
        {/* Notification Icon */}
        <Popover>
          <Popover.Trigger asChild>
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#007AFF"
              />
            </TouchableOpacity>
          </Popover.Trigger>

          <Popover.Content
            elevate
            padding="$4"
            zIndex={1000}
            borderWidth={1}
            // placement="bottom" offset={10}
            borderColor="$borderColor"
            backgroundColor="$background"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            animation="quick"
          >
            <Paragraph zIndex={900} size="$3">
              Hello! This is a Popover content box. You can put text, buttons,
              or any Tamagui components here.
            </Paragraph>
            <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
          </Popover.Content>
        </Popover>

        {/*  */}
        <View>
          <Ionicons name="layers-outline" size={24} color="#007AFF" />
        </View>

        {/* User Avatar*/}
        <TouchableOpacity>
          <Avatar circular size="$3">
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          {/* <Image source={{uri: "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"}}
          height={50}
          width={50}
          borderRadius={25}/> */}
        </TouchableOpacity>
      </XStack>
    </XStack>
  );
}
