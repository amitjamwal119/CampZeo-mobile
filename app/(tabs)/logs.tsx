import { ScrollView, Text, XStack, YStack } from "tamagui";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mails,
  MessageSquare,
  Youtube,
} from "@tamagui/lucide-icons";
import { Pinterest, Whatsapp } from "../utils/icons/icons";
import { TouchableOpacity } from "react-native";

export default function Logs() {
  const headings = [
    { key: "Subject", label: "Subject" },
    { key: "ScheduleTime", label: "Post/Message Schedule Time" },
    { key: "Type", label: "Type" },
    { key: "Actions", label: "Action" },
  ];

  const rows = [
    {
      id: "1",
      Subject: "Summer Sale",
      ScheduleTime: "01 May 2025 – 10 May 2025",
      Type: "Instagram",
      Action: "CRUD",
    },
    {
      id: "2",
      Subject: "Refer & Earn",
      ScheduleTime: "01 Jun 2025 – 30 Jun 2025",
      Type: "Facebook",
      Action: "CRUD",
    },
    {
      id: "3",
      Subject: "Festive Launch",
      ScheduleTime: "15 Oct 2025 – 05 Nov 2025",
      Type: "Pinterest",
      Action: "CRUD",
    },
  ];

  // Social Icons
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
    <>
      <ScrollView>
        <Text>Logs</Text>
        {/* Social Icons */}
        <XStack flexWrap="wrap" justifyContent="center" gap="$4">
          {icons.map(({ Icon, color, name }, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.7}
              onPress={() => {
                console.log(name, "button was pressed");
              }}
            >
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
      </ScrollView>
    </>
  );
}
