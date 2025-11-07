import {
  Facebook,
  Instagram,
  Linkedin,
  Mails,
  MessageSquare,
  Youtube,
} from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import {
  Button,
  Form,
  H3,
  Input,
  TextArea,
  XStack,
  YStack,
} from "tamagui";

import { Pinterest, Whatsapp } from "../../utils/icons/icons";

export default function CreateCampaignPost() {
  const icons = [
    { Icon: Mails, color: "#D93025", name: "Email" },
    { Icon: MessageSquare, color: "#FFCC00", name: "Message" },
    { Icon: Whatsapp, color: "green", name: "WhatsApp" },
    { Icon: Facebook, color: "#1877F2", name: "Facebook" },
    { Icon: Instagram, color: "#E4405F", name: "Instagram" },
    { Icon: Linkedin, color: "#0A66C2", name: "LinkedIn" },
    { Icon: Youtube, color: "#FF0000", name: "YouTube" },
    { Icon: Pinterest, color: "#E60023", name: "Pinterest" },
  ];

  return (
    <YStack
      flex={1}
      bg="$background"
      padding={20}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Form width="90%" maxWidth={500}>
        <YStack gap="$5" alignItems="center">
          <H3 fontWeight="700" textAlign="center">
            Campaign List
          </H3>

          {/* Social Icons */}
          <XStack flexWrap="wrap" justifyContent="center" gap="$4">
            {icons.map(({ Icon, color, name }, i) => (
              <TouchableOpacity key={i} activeOpacity={0.7}>
                <YStack
                  borderWidth={1.5}
                  borderColor={color}
                  borderRadius="$6"
                  padding="$3"
                  alignItems="center"
                  justifyContent="center"
                  hoverStyle={{
                    scale: 1.05,
                    backgroundColor: `${color}15`,
                  }}
                  pressStyle={{
                    scale: 0.95,
                    backgroundColor: `${color}20`,
                  }}
                >
                  <Icon size={22} color={color} />
                </YStack>
              </TouchableOpacity>
            ))}
          </XStack>

          {/* Form Fields */}
          <YStack width="100%" gap="$3">
            <Input
              size="$4"
              placeholder="Enter Subject Title to generate with AI"
              borderRadius="$6"
              width="100%"
            />
            <TextArea
              placeholder="Enter your SMS content here..."
              borderRadius="$6"
              minHeight={100}
              width="100%"
            />

            <Button
              theme="blue"
              width="100%"
              mt="$2"
              size="$4"
              borderRadius="$6"
              color="$blue10"
            >
              Create Campaign Post
            </Button>
          </YStack>
        </YStack>
      </Form>
    </YStack>
  );
}
