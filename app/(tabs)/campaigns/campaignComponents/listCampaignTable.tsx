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
  useMedia,
  AlertDialog,
  Theme,
  Separator,
} from "tamagui";
import { Edit3, Plus, Printer, Trash2 } from "@tamagui/lucide-icons";

// ----------------------------------------------------
// ✅ ListCampaignTable Component
// ----------------------------------------------------
export default function ListCampaignTable({ headings, rows }) {
  const router = useRouter();
  const media = useMedia();

  // ----------------------------------------------------
  // ✅ Reusable Action Buttons Component
  // ----------------------------------------------------
  const ActionButtons = ({ onAddPost }) => (
    <XStack alignItems="center" justifyContent="space-between" gap="$5">
      {/* Add Post Button */}
      <Button
        size="$4"
        fontSize="$3"
        backgroundColor="$blue3"
        borderRadius="$2"
        hoverStyle={{ backgroundColor: "$blue5" }}
        pressStyle={{ scale: 0.96 }}
        icon={<Plus size={19} color="#0057D9" />}
        color="#0057D9"
        onPress={onAddPost}
      >
        Add Post
      </Button>

      {/* Edit Icon */}
      <TouchableOpacity activeOpacity={0.7}>
        <Edit3 size={20} color="$color" />
      </TouchableOpacity>

      {/* Delete Dialog */}
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
            enterStyle={{ y: -20, opacity: 0 }}
            exitStyle={{ y: 10, opacity: 0 }}
          >
            <YStack gap="$4">
              <AlertDialog.Title fontSize="$3" color="$color">
                Delete Campaign
              </AlertDialog.Title>

              <AlertDialog.Description fontSize="$3" color="$color">
                Are you sure you want to delete this campaign?
              </AlertDialog.Description>

              <XStack justifyContent="flex-end" gap="$4" marginTop="$3">
                <AlertDialog.Cancel asChild>
                  <Button
                    borderRadius="$4"
                    backgroundColor="$gray3"
                    color="$color"
                  >
                    Cancel
                  </Button>
                </AlertDialog.Cancel>

                <AlertDialog.Action asChild>
                  <Button
                    borderRadius="$4"
                    backgroundColor="tomato"
                    color="white"
                  >
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
  // ✅ Main Render
  // ----------------------------------------------------
  return (
    <Theme name="light">
      <ScrollView></ScrollView>
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
          {/* Print Button */}
          <Button
            alignSelf="flex-start"
            size="$4"
            fontSize="$3"
            backgroundColor="$blue7"
            color="white"
            borderRadius="$2"
            icon={<Printer size={18} />}
            hoverStyle={{ opacity: 0.9 }}
          >
            Print
          </Button>

          {/* Search & Add New Row */}
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
              hoverStyle={{ opacity: 0.9 }}
              icon={<Plus size={18} />}
              onPress={() => router.push("/(tabs)/campaigns/createCampaigns")}
            >
              Add New
            </Button>
          </XStack>
        </YStack>

        {/* ==============================
          TABLE VIEW (Responsive)
        =============================== */}
        {media.gtSm ? (
          /* 💻 DESKTOP VIEW */
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ minWidth: 900 }}
          >
            <YStack flexShrink={0}>
              {/* === Table Header === */}
              <XStack
                backgroundColor="$gray2"
                paddingVertical="$3"
                paddingHorizontal="$3"
                borderBottomWidth={1}
                borderColor="$borderColor"
              >
                {headings.map(({ key, label }) => (
                  <XStack
                    key={key}
                    width={
                      key === "campaignDescription"
                        ? 280
                        : key === "campaignName"
                        ? 200
                        : 180
                    }
                    justifyContent="center"
                    alignItems="center"
                    paddingHorizontal="$3"
                  >
                    <Text fontWeight="700" fontSize="$5" color="$color">
                      {label}
                    </Text>
                  </XStack>
                ))}
                <XStack width={200} justifyContent="center">
                  <Text fontWeight="700" fontSize="$5" color="$color">
                    Actions
                  </Text>
                </XStack>
              </XStack>

              {/* === Table Body === */}
              <ScrollView style={{ maxHeight: 460 }}>
                {rows.map((row, i) => (
                  <XStack
                    key={row.id || i}
                    paddingVertical="$4"
                    paddingHorizontal="$3"
                    alignItems="center"
                    borderBottomWidth={1}
                    borderColor="$borderColor"
                    hoverStyle={{ backgroundColor: "$gray1" }}
                  >
                    <XStack width={200} justifyContent="center">
                      <Text textAlign="center" color="$color" fontSize="$4">
                        {row.campaignName}
                      </Text>
                    </XStack>

                    <XStack
                      width={280}
                      justifyContent="center"
                      paddingHorizontal="$3"
                    >
                      <Text
                        textAlign="center"
                        numberOfLines={2}
                        color="$color"
                        fontSize="$4"
                      >
                        {row.campaignDescription}
                      </Text>
                    </XStack>

                    <XStack width={180} justifyContent="center">
                      <Text textAlign="center" color="$color" fontSize="$4">
                        {row.dates}
                      </Text>
                    </XStack>

                    <XStack width={200} justifyContent="center">
                      <ActionButtons
                        onAddPost={() =>
                          router.push("/(tabs)/campaigns/createCPost")
                        }
                      />
                    </XStack>
                  </XStack>
                ))}
              </ScrollView>
            </YStack>
          </ScrollView>
        ) : (
          /* 📱 MOBILE VIEW */
          <ScrollView
            nestedScrollEnabled
            showsVerticalScrollIndicator
            style={{ maxHeight: 520 }}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
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
                  shadowColor="rgba(0,0,0,0.05)"
                  shadowRadius={6}
                >
                  <YStack gap="$3">
                    <Text fontWeight="700" color="$color" fontSize="$4">
                      {row.campaignName}
                    </Text>

                    <Text
                      color="$color"
                      fontWeight="500"
                      opacity={0.85}
                      fontSize="$3"
                    >
                      {row.campaignDescription}
                    </Text>

                    <Text fontSize="$3" color="$color" opacity={0.7}>
                      Date Range: {row.dates}
                    </Text>

                    <Separator marginVertical="$1" />

                    <XStack justifyContent="space-between" alignItems="center">
                      <ActionButtons
                        onAddPost={() =>
                          router.push("/(tabs)/campaigns/createCPost")
                        }
                      />
                    </XStack>
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
