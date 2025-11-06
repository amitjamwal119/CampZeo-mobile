import { Edit3, Plus, Printer, Trash2 } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { YStack, XStack, ScrollView, Button, Input, Text } from "tamagui";

export default function ListCampaignTable({ headings, rows }) {
  const routePage = useRouter();

  return (
    <YStack gap="$3" p="$3" bg="white" w="100%">
      {/* === Top Bar === */}
      <XStack justifyContent="space-between" alignItems="center" flexWrap="wrap">
        {/* Left: Print */}
        <Button
          size="$3"
          icon={<Printer size={16} />}
          bg="$blue10"
          color="white"
          borderRadius="$4"
        >
          Print
        </Button>

        {/* Right: Search + Add */}
        <XStack gap="$2" alignItems="center" mt="$2">
          <Input placeholder="Search..." w={160} size="$3" />
          <Button
            size="$3"
            icon={<Plus size={16} />}
            bg="$green10"
            color="white"
            borderRadius="$4"
            onPress={() => routePage.push("/(tabs)/campaigns/createCampaigns")}
          >
            Add New
          </Button>
        </XStack>
      </XStack>

      {/* === Unified Horizontal + Vertical Scroll === */}
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
            {headings.map((h) => (
              <XStack
                key={h.key}
                width={
                  h.key === "campaignDescription"
                    ? 260
                    : h.key === "campaignName"
                    ? 180
                    : 160
                }
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
              >
                <Text fontWeight="700" fontSize="$4" textAlign="center">
                  {h.label}
                </Text>
              </XStack>
            ))}
          </XStack>

          {/* === Scrollable Table Body === */}
          <ScrollView style={{ maxHeight: 420 }} showsVerticalScrollIndicator>
            {rows.map((row, index) => (
              <XStack
                key={row.id || index}
                py="$3"
                px="$2"
                borderBottomWidth={1}
                borderColor="#f0f0f0"
                alignItems="center"
                justifyContent="flex-start"
              >
                {/* Campaign Name */}
                <XStack
                  width={180}
                  justifyContent="center"
                  alignItems="center"
                  px="$3"
                  flexShrink={0}
                >
                  <Text
                    textAlign="center"
                    flexWrap="wrap"
                    width="100%"
                    flex={1}
                  >
                    {row.campaignName}
                  </Text>
                </XStack>

                {/* Campaign Description */}
                <XStack
                  width={260}
                  justifyContent="center"
                  alignItems="center"
                  px="$3"
                  flexShrink={0}
                >
                  <Text
                    textAlign="center"
                    flexWrap="wrap"
                    width="100%"
                    flex={1}
                    style={{ flexShrink: 1 }}
                  >
                    {row.campaignDescription}
                  </Text>
                </XStack>

                {/* Dates */}
                <XStack
                  width={160}
                  justifyContent="center"
                  alignItems="center"
                  px="$3"
                  flexShrink={0}
                >
                  <Text textAlign="center">{row.dates}</Text>
                </XStack>

                {/* Posts */}
                <XStack
                  width={140}
                  justifyContent="center"
                  alignItems="center"
                  px="$3"
                  flexShrink={0}
                  gap="$2"
                >
                  <Plus size={14} />
                  <Text textAlign="center">{row.postsCount ?? 0}</Text>
                </XStack>

                {/* Actions */}
                <XStack
                  width={140}
                  justifyContent="center"
                  alignItems="center"
                  px="$3"
                  flexShrink={0}
                  gap="$3"
                >
                  <TouchableOpacity>
                    <Edit3 size={16} color="gray" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Trash2 size={16} color="tomato" />
                  </TouchableOpacity>
                </XStack>
              </XStack>
            ))}
          </ScrollView>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
