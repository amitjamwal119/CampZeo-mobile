// TableShell.jsx
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { YStack, XStack, ScrollView, Button, Input, Text } from "tamagui";
// Replace Icon placeholders with your icon library (lucide-react, react-native-vector-icons, etc.)
const Icon = ({ name, size = 16 }) => <Text>{name}</Text>;

export default function TableShell({
  headings,
  rows,
  page = 1,
  pageSize = 10,
  total = null,
  onSearch = () => {},
  onAdd = () => {},
  onCreatePost = () => {},
  onDelete = () => {},
  onPageChange = () => {},
}) {
  const [query, setQuery] = useState("");

  // local pagination for demo — slice rows
  const start = (page - 1) * pageSize;
  const visibleRows = rows.slice(start, start + pageSize);

  return (
    <YStack gap="$3" padding="$3" width="100%">
      {/* Top bar */}
      <XStack alignItems="center" justifyContent="space-between">
        <Button onPress={() => {console.log("PRINT PRESSESD");
        }} size="$3" icon={null}>
          <XStack alignItems="center" gap="$2">
            <Icon name="🖨️" />
            <Text>Print</Text>
          </XStack>
        </Button>

        <XStack alignItems="center" gap="$2">
          <Input
            value={query}
            onChangeText={setQuery}
            placeholder="Search..."
            width={160}
            onKeyPress={(e) => {
              // optional: trigger on Enter (web) — onPress for mobile search button
            }}
          />
          <Button onPress={() => {console.log("Search pressed")} } size="$3">
            <Text>Search</Text>
          </Button>

          <Button onPress={()=> {console.log("Add new wbtn pressed");
          }} size="$3">
            <XStack alignItems="center" gap="$2">
              <Icon name="＋" />
              <Text>Add New</Text>
            </XStack>
          </Button>
        </XStack>
      </XStack>

      {/* Table heading row */}
      <YStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack
            width={800} // make wide so horizontal scroll shows on small screens
            paddingVertical="$2"
            borderBottomWidth={1}
            borderColor="#e6e6e6"
            alignItems="center"
          >
            {headings.map((h) => (
              <XStack
                key={h.key}
                minWidth={h.key === "campaignDescription" ? 240 : 140}
                paddingHorizontal="$3"
                alignItems="center"
              >
                <TouchableOpacity onPress={() => { /* placeholder for sort */ }}>
                  <Text fontWeight="700">{h.label}</Text>
                </TouchableOpacity>
              </XStack>
            ))}
          </XStack>
        </ScrollView>

        {/* Table body — both vertical and horizontal scrollable */}
        <ScrollView style={{ maxHeight: 420 }} showsVerticalScrollIndicator>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <YStack>
              {visibleRows.map((row) => (
                <XStack
                  key={row.id}
                  width={800}
                  paddingVertical="$3"
                  borderBottomWidth={1}
                  borderColor="#f0f0f0"
                  alignItems="center"
                >
                  {/* render cells in same order as headings */}
                  <XStack minWidth={140} paddingHorizontal="$3">
                    <Text numberOfLines={1} ellipsizeMode="tail">
                      {row.campaignName}
                    </Text>
                  </XStack>

                  <XStack minWidth={240} paddingHorizontal="$3">
                    <Text numberOfLines={2} ellipsizeMode="tail">
                      {row.campaignDescription}
                    </Text>
                  </XStack>

                  <XStack minWidth={140} paddingHorizontal="$3">
                    <Text numberOfLines={1}>{row.dates}</Text>
                  </XStack>

                  <XStack minWidth={120} paddingHorizontal="$3" alignItems="center">
                    <TouchableOpacity onPress={() => {console.log("Add Post button pressed")}}>
                      <XStack alignItems="center" gap="$2" padding="$2">
                        <Icon name="＋" />
                        <Text>{row.postsCount ?? 0}</Text>
                      </XStack>
                    </TouchableOpacity>
                  </XStack>

                  <XStack minWidth={140} paddingHorizontal="$3" gap="$2">
                    <Button onPress={() => {/* create/edit handler */}} size="$3">
                      <Icon name="✏️" />
                    </Button>
                    <Button onPress={() => {console.log("Search pressed")}} size="$3" >
                      <Icon name="🗑️" />
                    </Button>
                  </XStack>
                </XStack>
              ))}
            </YStack>
          </ScrollView>
        </ScrollView>
      </YStack>

      {/* Pagination (simple compact UI) */}
      <XStack justifyContent="flex-end" gap="$2" alignItems="center">
        <Button onPress={() => {console.log("Previous button pressed")}} disabled={page === 1}>
          <Text>Prev</Text>
        </Button>
        <Text>Page {page}{total ? ` of ${Math.ceil(total / pageSize)}` : ""}</Text>
        <Button onPress={() => {console.log("Next button pressed")}}>
          <Text>Next</Text>
        </Button>
      </XStack>
    </YStack>
  );
}
