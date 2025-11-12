import { LogOut, Mail, Phone } from "@tamagui/lucide-icons";
import {
  Avatar,
  H3,
  Paragraph,
  ScrollView,
  View,
  XStack,
  YStack,
  Theme,
  H1,
} from "tamagui";
import EditProfile from "../../tabs-components/profile-details/editProfile";
import ChangePassword from "../../tabs-components/profile-details/changePassword";
import { TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <Theme name="light">
      <ScrollView
        style={{ flex: 1, backgroundColor: "#fff" }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <YStack
          flex={1}
          minHeight="100%"
          backgroundColor="$light.background"
          padding="$5"
          alignItems="center"
          justifyContent="flex-start"
          space="$4"
        >
          {/* Profile Header */}
          <YStack alignItems="center" gap="$3" marginTop="$4" marginBottom="$5">
            <Avatar circular size="$8">
              <Avatar.Image src="https://example.com/profile.jpg" />
              <Avatar.Fallback backgroundColor="$light.borderColor" />
            </Avatar>

            <H3
              marginTop="$2"
              color="$light.color"
              fontWeight="700"
              fontSize={25}
            >
              Amit Jamwal
            </H3>
            <Paragraph color="$gray10" fontSize={20}>
              Software Engineer
            </Paragraph>

            {/* Email Field */}
            <XStack
              alignItems="center"
              borderWidth={1}
              borderColor="$light.borderColor"
              borderRadius="$3"
              paddingHorizontal="$3"
              gap="$3"
              height={45}
              backgroundColor="$light.muted"
              width="90%"
            >
              <Mail size={20} color="$light.color" />
              <Paragraph color="$light.color" fontSize={17}>
                amit@example.com
              </Paragraph>
            </XStack>

            {/* Phone Field */}
            <XStack
              alignItems="center"
              borderWidth={1}
              borderColor="$light.borderColor"
              borderRadius="$3"
              paddingHorizontal="$3"
              gap="$3"
              height={45}
              backgroundColor="$light.muted"
              width="90%"
            >
              <Phone size={20} color="$light.color" />
              <Paragraph color="$light.color" fontSize={17}>
                7507799999
              </Paragraph>
            </XStack>
          </YStack>

          {/* Edits Section */}
          <View justifyContent="center" alignItems="center" width="100%">
            <EditProfile />
            <ChangePassword />
          </View>

          {/* Logout */}
          <View>
            <TouchableOpacity >
              <LogOut size={20} color="$light.color" />
              <H1 color="$light.color" fontSize={17}>LogOut</H1>
            </TouchableOpacity>
          </View>
        </YStack>
      </ScrollView>
    </Theme>
  );
}
