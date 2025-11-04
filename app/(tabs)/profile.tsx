import {
  View, Avatar,
  H3,
  Paragraph,
  ScrollView,
  YStack,
  XStack
} from 'tamagui';
import EditProfile from '../../tabs-components/profile-details/editProfile';
import ChangePassword from '../../tabs-components/profile-details/changePassword';
import { Phone, Mail } from '@tamagui/lucide-icons';

export default function Profile() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <YStack f={1} bg="$background" p="$4" ai="center">

        {/* Profile Header */}
        <YStack ai="center" gap="$2" mt="$4" mb="$5">
          <Avatar circular size="$7">
            <Avatar.Image src="https://example.com/profile.jpg" />
            <Avatar.Fallback backgroundColor="$gray6" />
          </Avatar>

          <H3 mt="$2" color="$color12">Amit Jamwal</H3>
          <Paragraph color="$gray10">Software Engineer</Paragraph>

          {/* Email Field */}
          <XStack
            alignItems="center"
            borderWidth={1}
            borderColor="$gray6"
            borderRadius="$4"
            paddingHorizontal="$3"
            gap={15}
            height={45}
            backgroundColor="$background"
          >
            <Mail size={20} color="$gray10" />
            <Paragraph color="$color12">amit@example.com</Paragraph>

          </XStack>

          {/* Phone Field */}
          <XStack
            alignItems="center"
            borderWidth={1}
            borderColor="$gray6"
            borderRadius="$4"
            paddingHorizontal="$3"
            height={45}
            gap={15}
            backgroundColor="$background"
          >
            <Phone size={20} color="$gray10" />
            <Paragraph color="$color12">7507799999</Paragraph>

          </XStack>

        </YStack>

        {/* Edits section */}
        <View gap="$4" justifyContent="center" alignItems="center">
          <EditProfile />
          <ChangePassword />
        </View>
      </YStack>
    </ScrollView>
  );
}


