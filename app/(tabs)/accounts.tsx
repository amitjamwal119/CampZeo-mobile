import { H1, ScrollView, Text, View, XStack, YStack } from "tamagui";
import { Facebook, Instagram, Linkedin, LogOut, Youtube } from "@tamagui/lucide-icons";
import { Pinterest } from "../utils/icons/icons";
import { TouchableOpacity } from "react-native";

export default function Accounts() {
  // Social Icons
  const icons = [
    { Icon: Facebook, color: "#1877F2", name: "Facebook" },
    { Icon: Instagram, color: "#E4405F", name: "Instagram" },
    { Icon: Linkedin, color: "#0A66C2", name: "LinkedIn" },
    { Icon: Youtube, color: "#FF0000", name: "YouTube" },
    { Icon: Pinterest, color: "#E60023", name: "Pinterest" },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      
      {/* Page Container */}
      <YStack
        flex={1}
        backgroundColor="$background"
        alignItems="center"
        justifyContent="center"
        padding="$6"
        gap="$5"
      >
        {/* Page Title */}
        <Text
          fontSize="$5"
          fontWeight="700"
          color="$color"
          marginBottom="$4"
          textAlign="center"
        >
          Accounts
        </Text>

        {/* Social Icons Grid */}
        <XStack
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap="$4"
          rowGap="$4"
        >
          {icons.map(({ Icon, color, name }, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => console.log(name, "button was pressed")}
            >
              <YStack
                width={80}
                height={80}
                borderWidth={1.5}
                borderColor={color}
                borderRadius=""
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
                <Icon size={26} color={color} />
              </YStack>
            </TouchableOpacity>
          ))}
        </XStack>
      </YStack>
    </ScrollView>
  );
}
