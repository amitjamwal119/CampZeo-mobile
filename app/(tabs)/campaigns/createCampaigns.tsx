import { useState } from "react";
import {
  Form,
  H3,
  Input,
  TextArea,
  Button,
  YStack,
  Paragraph,
  Card,
} from "tamagui";
//   XStack,  View,

import RangeCalendar from "../../../tabs-components/campaign-details/RangeCalendar";
import { useRouter } from "expo-router";

export default function CreateCampaigns() {

    const routePage = useRouter();


  // Calendar Logic
  const [selectedDates, setSelectedDates] = useState<{
    start: string;
    end: string;
  }>({
    start: "",
    end: "",
  });

  const handleRangeSelect = (range: { start: string; end: string }) => {
    setSelectedDates(range);
    console.log("User selected:", range.start, range.end);
  };

  return (
    <YStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="$background"
      padding=""
    >
      {/* Header */}
      <H3 fontWeight="700" mb="$4">
        Create Campaign
      </H3>

      {/* Card container for form */}
      <Card
        elevate
        bordered
        width="90%"
        maxWidth={450}
        padding="$4"
        borderRadius="$6"
        backgroundColor="$color2"
        shadowColor="rgba(0,0,0,0.1)"
        shadowRadius={10}
      >
        <Form
          alignItems="center"
          justifyContent="center"
          width="100%"
          gap="$4"
          onSubmit={() => console.log("Campaign Created")}
        >
          {/* Campaign Name */}
          <YStack width="100%" gap="$2">
            <Paragraph fontWeight="600">Campaign Name</Paragraph>
            <Input
              size="$4"
              placeholder="Enter campaign name"
              borderRadius="$4"
              width="100%"
            />
          </YStack>

          {/* Date Range Picker */}
          <YStack width="100%" gap="$2">
            <Paragraph fontWeight="600">Select Date Range</Paragraph>
            <RangeCalendar onRangeSelect={handleRangeSelect} />
            {selectedDates.start && selectedDates.end ? (
              <Paragraph
                fontSize="$2"
                color="$gray10"
                textAlign="center"
                mt="$1"
              >
                {`From ${selectedDates.start} to ${selectedDates.end}`}
              </Paragraph>
            ) : null}
          </YStack>

          {/* Description */}
          <YStack width="100%" gap="$2">
            <Paragraph fontWeight="600">Description</Paragraph>
            <TextArea
              placeholder="Enter campaign details"
              borderRadius="$4"
              minHeight={100}
              width="100%"
            />
          </YStack>

          {/* Submit Button */}
          <Button
            theme="blue"
            width="100%"
            mt="$3"
            size="$4"
            borderRadius="$4"
            onPress={() => routePage.push("/(tabs)/campaigns/campaignsDetails")}
          >
            Create Campaign
          </Button>
        </Form>
      </Card>
    </YStack>
  );
}
