import { XStack, Popover, Paragraph, Avatar, Theme } from "tamagui";
// , Separator, Text
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
// import { useState } from "react";

export default function TopBar() {
  // const [notification, setNotification] = useState(false);

  return (
    <Theme name="light">
      <XStack
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="$background"
        borderBottomWidth={1}
        borderColor="$borderColor"
        paddingHorizontal="$4"
        paddingVertical="$3"
        height={60}
        zIndex={100}
      >
        {/* Left Section – Menu */}
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="menu-outline" size={26} color="$color" />
        </TouchableOpacity>

        {/* Center Section – App Title */}
        {/* <Text
          fontSize="$5"
          fontWeight="700"
          color="$color"
          letterSpacing={0.5}
        >
          CampZeo
        </Text> */}

        {/* Right Section – Icons */}
        <XStack alignItems="center" gap="$5">
          {/* Notification Popover */}
          <Popover size="$5">
            <Popover.Trigger asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="notifications-outline" size={24} color="#007AFF" />
              </TouchableOpacity>
            </Popover.Trigger>

            <Popover.Content
              elevate
              padding="$4"
              zIndex={1000}
              borderWidth={1}
              borderColor="$borderColor"
              backgroundColor="$background"
              enterStyle={{ y: -10, opacity: 0 }}
              exitStyle={{ y: -10, opacity: 0 }}
              animation="quick"
              borderRadius="$3"
              shadowOpacity={0.15}
            >
              <Paragraph size="$3" color="$color" maxWidth={180}>
                You have no new notifications.
              </Paragraph>
              <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
            </Popover.Content>
          </Popover>

          {/* Divider between icons */}
          {/* <Separator vertical marginHorizontal="$1" /> */}

          {/* Layers Icon */}
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="layers-outline" size={24} color="#007AFF" />
          </TouchableOpacity>

          {/* Avatar */}
          <TouchableOpacity activeOpacity={0.7}>
            <Avatar circular size="$5">
              <Avatar.Image
                accessibilityLabel="User Avatar"
                src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              />
              <Avatar.Fallback backgroundColor="$borderColor" />
            </Avatar>
          </TouchableOpacity>
        </XStack>
      </XStack>
    </Theme>
  );
}
