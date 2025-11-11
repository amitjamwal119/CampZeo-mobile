import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import {
  YStack,
  XStack,
  ScrollView,
  Button,
  Input,
  Text,
  Card,
  Theme,
  Separator,
  AlertDialog,
  useMedia,
} from "tamagui";
import {
  Edit3,
  Plus,
  Printer,
  Trash2,
  Eye,
  Send,
  Instagram,
  Facebook,
  Mails,
} from "@tamagui/lucide-icons";

// ----------------------------------------------------
// ✅ Type Icon Mapper
// ----------------------------------------------------
const TypeIcon = ({ type }) => {
  switch (type?.toLowerCase()) {
    case "instagram":
      return <Instagram size={20} color="#E4405F" />;
    case "facebook":
      return <Facebook size={20} color="#1877F2" />;
    case "Message":
      return <Mails size={20} color="#E60023" />;
    default:
      return <Send size={20} color="#888" />;
  }
};

// ----------------------------------------------------
// ✅ Action Buttons per Row
// ----------------------------------------------------
const RowActions = ({ onView, onEdit, onSend, onDelete }) => (
  <XStack alignItems="center" justifyContent="center" gap="$4">
    {/* 👁️ View */}
    <TouchableOpacity activeOpacity={0.7} onPress={onView}>
      <Eye size={20} color="#2D7EFF" />
    </TouchableOpacity>

    {/* ✏️ Edit */}
    <TouchableOpacity activeOpacity={0.7} onPress={onEdit}>
      <Edit3 size={20} color="#43B82A" />
    </TouchableOpacity>

    {/* 📤 Telegram/Send */}
    <TouchableOpacity activeOpacity={0.7} onPress={onSend}>
      <Send size={20} color="#0057D9" />
    </TouchableOpacity>

    {/* 🗑️ Delete */}
    <AlertDialog native>
      <AlertDialog.Trigger asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <Trash2 size={20} color="tomato" />
        </TouchableOpacity>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          elevate
          bordered
          padding="$5"
          borderRadius="$6"
          backgroundColor="$background"
          borderColor="$borderColor"
        >
          <YStack gap="$4">
            <AlertDialog.Title fontSize="$4" color="$color">
              Delete Post
            </AlertDialog.Title>

            <AlertDialog.Description fontSize="$3" color="$color">
              Are you sure you want to delete this post?
            </AlertDialog.Description>

            <XStack justifyContent="flex-end" gap="$4">
              <AlertDialog.Cancel asChild>
                <Button borderRadius="$4" backgroundColor="$gray3" color="$color">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button borderRadius="$4" backgroundColor="tomato" color="white" onPress={onDelete}>
                  Delete
                </Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  </XStack>
);

// ----------------------------------------------------
// ✅ Main Table Component
// ----------------------------------------------------
export default function CampaignPostsTable({ headings, rows }) {
  const router = useRouter();
  const media = useMedia();

  return (
    <Theme name="light">
      <YStack
        width="100%"
        backgroundColor="$background"
        borderWidth={1}
        borderColor="$borderColor"
        shadowColor="rgba(0,0,0,0.05)"
        shadowRadius={10}
        padding="$3"
        gap="$3"
        borderRadius="$3"
      >
        {/* ==============================
            HEADER BAR
        =============================== */}
        <YStack width="100%" gap="$3">
          <Button
            alignSelf="flex-start"
            size="$4"
            fontSize="$3"
            backgroundColor="$blue7"
            color="white"
            borderRadius="$2"
            icon={<Printer size={18} />}
          >
            Print
          </Button>

          <XStack alignItems="center" gap="$4" justifyContent="space-between">
            <Input
              flex={1}
              placeholder="Search..."
              fontSize={16}
              paddingVertical="$3"
              paddingHorizontal="$4"
              borderRadius="$5"
              borderWidth={1}
              borderColor="$borderColor"
              color="$black"
            />
            <Button
              size="$4"
              fontSize="$3"
              backgroundColor="$green10"
              color="white"
              borderRadius="$2"
              icon={<Plus size={18} />}
              onPress={() => router.push("/(tabs)/campaigns/createCPost")}
            >
              Add New
            </Button>
          </XStack>
        </YStack>

        {/* ==============================
            TABLE VIEW
        =============================== */}
        {media.gtSm ? (
          /* 💻 DESKTOP VIEW */
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ minWidth: 900 }}>
            <YStack flexShrink={0}>
              {/* Header */}
              <XStack backgroundColor="$gray2" paddingVertical="$3" borderBottomWidth={1} borderColor="$borderColor">
                {headings.map(({ key, label }) => (
                  <XStack key={key} width={220} justifyContent="center" alignItems="center">
                    <Text fontWeight="700" fontSize="$5" color="$color">
                      {label}
                    </Text>
                  </XStack>
                ))}
              </XStack>

              {/* Body */}
              <ScrollView style={{ maxHeight: 460 }}>
                {rows.map((row, i) => (
                  <XStack
                    key={row.id || i}
                    paddingVertical="$4"
                    alignItems="center"
                    borderBottomWidth={1}
                    borderColor="$borderColor"
                    hoverStyle={{ backgroundColor: "$gray1" }}
                  >
                    {/* Subject */}
                    <XStack width={220} justifyContent="center">
                      <Text color="$color">{row.Subject}</Text>
                    </XStack>

                    {/* Schedule Time */}
                    <XStack width={220} justifyContent="center">
                      <Text color="$color">{row.ScheduleTime}</Text>
                    </XStack>

                    {/* Type (icon instead of text) */}
                    <XStack width={220} justifyContent="center">
                      <TypeIcon type={row.Type} />
                    </XStack>

                    {/* Actions */}
                    <XStack width={220} justifyContent="center">
                      <RowActions
                        onView={() => console.log("View", row.Subject)}
                        onEdit={() => router.push("/(tabs)/campaigns/createCPost")}
                        onSend={() => console.log("Send", row.Subject)}
                        onDelete={() => console.log("Delete", row.Subject)}
                      />
                    </XStack>
                  </XStack>
                ))}
              </ScrollView>
            </YStack>
          </ScrollView>
        ) : (
          /* 📱 MOBILE VIEW */
          <ScrollView nestedScrollEnabled style={{ maxHeight: 520 }}>
            <YStack gap="$4">
              {rows.map((row, i) => (
                <Card
                  key={i}
                  padding="$3"
                  borderWidth={1}
                  borderColor="$borderColor"
                  borderRadius="$3"
                  backgroundColor="$white"
                  hoverStyle={{ backgroundColor: "$gray1" }}
                >
                  <YStack gap="$3">
                    <Text  fontWeight="700" fontSize={20}  color="$color">
                      {row.Subject}
                    </Text>
                    <Text  color="$light.color" fontWeight="600">{row.ScheduleTime}</Text>
                    <XStack alignItems="center" gap="$2">
                      <Text fontWeight="600">Type:</Text>
                      <TypeIcon type={row.Type} />
                    </XStack>
                    <Separator />
                    <RowActions
                      onView={() => console.log("View", row.Subject)}
                      onEdit={() => router.push("/(tabs)/campaigns/createCPost")}
                      onSend={() => console.log("Send", row.Subject)}
                      onDelete={() => console.log("Delete", row.Subject)}
                    />
                  </YStack>
                </Card>
              ))}
            </YStack>
          </ScrollView>
        )}
        {/* ==============================
                  📄 Dummy Pagination Section
                =============================== */}
                <XStack
                  justifyContent="center"
                  alignItems="center"
                  gap="$3"
                  paddingVertical="$3"
                  borderTopWidth={1}
                  borderColor="$borderColor"
                >
                  <Button size="$3" backgroundColor="$blue6" borderRadius="$2" disabled>
                    <Text color="white">Prev</Text>
                  </Button>
        
                  {[1, 2, 3].map((num) => (
                    <Button
                      key={num}
                      size="$3"
                      backgroundColor={num === 1 ? "$blue7" : "$white"}
                      borderWidth={1}
                      borderColor="$borderColor"
                      borderRadius="$2"
                    >
                      <Text color={num === 1 ? "white" : "$color"}>{num}</Text>
                    </Button>
                  ))}
        
                  <Button size="$3" backgroundColor="$blue6" borderRadius="$2">
                    <Text color="white">Next</Text>
                  </Button>
                </XStack>
      </YStack>
    </Theme>
  );
}
