import { Edit3, Plus, Printer, Trash2 } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
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
  View,
} from "tamagui";

export default function ListCampaignTable({ headings, rows }) {
  const router = useRouter();
  const media = useMedia();

  // ✅ Action Buttons (common for both views)
  const ActionButtons = ({ onAddPost }) => (
    <XStack
      display="flex"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <XStack>
        <Button
          size="$2"
          backgroundColor="$blue5"
          borderRadius="$5"
          onPress={onAddPost}
          hoverStyle={{ backgroundColor: "$blue6" }}
          pressStyle={{ scale: 0.96 }}
          color="#0057D9"
        >
          <Plus size={15} color="#0057D9" />
          Add Post
        </Button>
      </XStack>

      <XStack display="flex" gap="$5">
        {/* Edit campaign details Start*/}
        <TouchableOpacity activeOpacity={0.6}>
          <Edit3 size={18} color="gray" />
        </TouchableOpacity>
        {/* Edit campaign details End*/}

        {/* ✅ Delete Campaign Dialog */}
        <AlertDialog native>
          <AlertDialog.Trigger asChild>
            <TouchableOpacity activeOpacity={0.6}>
              <Trash2 size={18} color="tomato" />
            </TouchableOpacity>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay
              key="overlay"
              animation="quick"
              opacity={0.5}
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
            <AlertDialog.Content
              bordered
              elevate
              key="content"
              animation={[
                "quick",
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
              exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
              x={0}
              scale={1}
              opacity={1}
              y={0}
            >
              <YStack gap="$4">
                <AlertDialog.Title>Delete Campaign</AlertDialog.Title>
                <AlertDialog.Description>
                  Are you sure you want to delete this campaign?
                </AlertDialog.Description>

                <XStack gap="$3" justifyContent="flex-end">
                  <AlertDialog.Cancel asChild>
                    <Button>Cancel</Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <Button>Delete</Button>
                  </AlertDialog.Action>
                </XStack>
              </YStack>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog>
      </XStack>
    </XStack>
  );

  return (
    <YStack
      gap="$4"
      p="$4"
      bg="white"
      w="100%"
      borderRadius="$6"
      shadowColor="rgba(0,0,0,0.05)"
      shadowRadius={8}
    >
      {/* === Header Bar === */}
      <YStack w="100%" gap="$3">
        {/* Top - Print Button */}
        <Button
          alignSelf="flex-start"
          size="$3"
          icon={<Printer size={16} />}
          bg="$blue10"
          color="white"
          borderRadius="$5"
          hoverStyle={{ opacity: 0.9 }}
        >
          Print
        </Button>

        {/* Bottom - Search & Add New spaced apart */}
        <XStack w="100%" justifyContent="space-between" alignItems="center">
          <Input
            placeholder="Search..."
            flex={1}
            size="$3"
            borderRadius="$4"
            mr="$3" // gap between input and button
          />

          <Button
            size="$3"
            icon={<Plus size={16} />}
            bg="$green10"
            color="white"
            borderRadius="$5"
            hoverStyle={{ opacity: 0.9 }}
            onPress={() => router.push("/(tabs)/campaigns/createCampaigns")}
          >
            Add New
          </Button>
        </XStack>
      </YStack>

      {/* === Responsive Layout === */}
      {media.gtSm ? (
        /* 💻 DESKTOP VIEW */
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ minWidth: 820 }}
        >
          <YStack flexShrink={0}>
            {/* === Table Header === */}
            <XStack
              bg="$gray2"
              py="$3"
              px="$2"
              borderBottomWidth={1}
              borderColor="#eaeaea"
            >
              {headings.map(({ key, label }) => (
                <XStack
                  key={key}
                  width={
                    key === "campaignDescription"
                      ? 260
                      : key === "campaignName"
                      ? 180
                      : 160
                  }
                  justifyContent="center"
                  alignItems="center"
                  px="$2"
                >
                  <Text fontWeight="700" fontSize="$4" color="$gray11">
                    {label}
                  </Text>
                </XStack>
              ))}
              <XStack width={200} justifyContent="center">
                <Text fontWeight="700" fontSize="$4" color="$gray11">
                  Actions
                </Text>
              </XStack>
            </XStack>

            {/* === Table Body === */}
            <ScrollView style={{ maxHeight: 420 }}>
              {rows.map((row, i) => (
                <XStack
                  key={row.id || i}
                  py="$3"
                  px="$2"
                  borderBottomWidth={1}
                  borderColor="#f0f0f0"
                  alignItems="center"
                  hoverStyle={{
                    backgroundColor: "$gray1",
                  }}
                >
                  <XStack width={180} justifyContent="center">
                    <Text textAlign="center">{row.campaignName}</Text>
                  </XStack>

                  <XStack width={260} justifyContent="center" px="$2">
                    <Text textAlign="center" numberOfLines={2}>
                      {row.campaignDescription}
                    </Text>
                  </XStack>

                  <XStack width={160} justifyContent="center">
                    <Text textAlign="center">{row.dates}</Text>
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
          style={{ maxHeight: 500 }}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <YStack gap="$3">
            {rows.map((row, i) => (
              <Card
                key={i}
                p="$4"
                borderWidth={1}
                borderColor="#e0e0e0"
                borderRadius="$6"
                hoverStyle={{ backgroundColor: "$gray1" }}
              >
                <YStack gap="$2">
                  <Text fontWeight="700" color="$gray12">
                    {row.campaignName}
                  </Text>
                  <Text color="$gray10">{row.campaignDescription}</Text>
                  <Text fontSize="$2" color="$gray9">
                    Date Range: {row.dates}
                  </Text>

                  <XStack
                    justifyContent="space-between"
                    alignItems="center"
                    mt="$2"
                  >
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
    </YStack>
  );
}
