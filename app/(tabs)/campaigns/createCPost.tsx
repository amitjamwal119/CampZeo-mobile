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
  H1,
  Input,
  ScrollView,
  TextArea,
  XStack,
  YStack,
} from "tamagui";

import { Pinterest, Whatsapp } from "../../utils/icons/icons";
import { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import type { DocumentPickerAsset } from "expo-document-picker";

export default function CreateCampaignPost() {
  const [iconValue, setIconValue] = useState(null);

  const [file, setFile] = useState<DocumentPickerAsset | null>(null);

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

  const getFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/*", "video/*"],
      multiple: false,
    });

    if (!result.canceled) {
      const selectedFile = result.assets[0]; // <- this is a DocumentPickerAsset
      setFile(selectedFile);
      console.log("Picked file:", selectedFile);
    }
  };

  return (
    <>
      {" "}
      <ScrollView>
        <YStack
          flex={1}
          backgroundColor="$background"
          padding={20}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Form width="90%" maxWidth={500}>
            <YStack gap="$5" alignItems="center">
              <H1 fontWeight="700" fontSize={25} textAlign="center">
                Campaign List
              </H1>

              {/* Social Icons */}
              <XStack flexWrap="wrap" justifyContent="center" gap="$4">
                {icons.map(({ Icon, color, name }, i) => (
                  <TouchableOpacity
                    key={i}
                    activeOpacity={0.7}
                    onPress={() => {
                      setIconValue(name);
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

              {/* Form Fields */}
              <YStack width="100%" gap="$3">
                <Input
                  size="$7"
                  placeholder="Enter Subject Title to generate with AI"
                  borderRadius="$3"
                  width="100%"
                />

                {/* File Pick button */}
                {iconValue == "Email" ||
                "WhatsApp" ||
                "Facebook" ||
                "Instagram" ||
                "LinkedIn" ||
                "YouTube" ||
                "Pinterest" ? (
                  <Button
                    onPress={getFile}
                    size="$5"
                    borderWidth={1}
                    borderRadius="$3"
                    fontSize={15}
                    backgroundColor="$blue3"
                    color="$blue9"
                  >
                    Pick Image or Video
                  </Button>
                ) : (
                  ""
                )}

                <TextArea
                  placeholder="Enter your text content here..."
                  borderRadius="$3"
                  minHeight={100}
                  width="100%"
                />

                <Button
                  theme="blue"
                  width="100%"
                  marginTop="$2"
                  size="$7"
                  borderWidth={1}
                  borderRadius="$3"
                  color="$white"
                  fontSize={19}
                  fontWeight={700}
                  backgroundColor="$blue7"
                >
                  Create Campaign Post
                </Button>
              </YStack>
            </YStack>
          </Form>
        </YStack>
      </ScrollView>
    </>
  );
}
