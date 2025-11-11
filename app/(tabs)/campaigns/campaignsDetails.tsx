import {
  H1,
  XStack,
  YStack,
  Card,
  Paragraph,
  Text,
  Separator,
  ScrollView,
} from "tamagui";
import CampaignPostsTable from "./campaignComponents/campaignPostsTable";

export default function CampaignsDetails() {
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
  return (
    <>
      <ScrollView>
        <YStack
          flex={1}
          padding="$4"
          gap="$4"
          backgroundColor="$light.background"
        >
          {/* Title */}
          <H1 fontWeight="700" fontSize={25} textAlign="center">
            Campaign Details
          </H1>

          {/* Campaign Details Card */}
          <XStack justifyContent="center">
            <Card
              elevate
              bordered
              backgroundColor="$light.muted"
              borderColor="$light.borderColor"
              borderRadius="$4"
              width={350}
              padding="$4"
              shadowColor="rgba(0,0,0,0.1)"
              shadowOffset={{ width: 0, height: 2 }}
              shadowOpacity={0.3}
              shadowRadius={4}
            >
              <YStack space="$3">
                <Text fontWeight="700" fontSize={20} color="$light.primary">
                  Summer Sale Campaign
                </Text>

                <Paragraph color="$light.color" lineHeight={22}>
                  This campaign promotes our summer collection with discounts up
                  to 50%. It targets online shoppers and social media audiences.
                </Paragraph>

                <Separator />

                <XStack justifyContent="space-between">
                  <YStack>
                    <Text color="$light.color" fontWeight="600">
                      Date Range
                    </Text>
                    <Text color="$light.color">01 Jun 2025 - 30 Jun 2025</Text>
                  </YStack>

                  <YStack alignItems="flex-end">
                    <Text color="$light.color" fontWeight="600">
                      Created
                    </Text>
                    <Text color="$light.color">11 Nov 2025</Text>
                  </YStack>
                </XStack>
              </YStack>
            </Card>
          </XStack>

          {/* Placeholder for Table Module */}
          <XStack marginTop="$4" justifyContent="center">
            {/* <Text color="$light.color" opacity={0.6}>
          [Table module will go here later...]
        </Text> */}

            <CampaignPostsTable headings={headings} rows={rows} />
          </XStack>
        </YStack>
      </ScrollView>
    </>
  );
}
