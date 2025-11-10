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
import RangeCalendar from "../../../tabs-components/campaign-details/RangeCalendar";
import { useRouter } from "expo-router";

export default function CreateCampaigns() {
  const routePage = useRouter();

  // Calendar Logic
  const [selectedDates, setSelectedDates] = useState({
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
      backgroundColor="$background"
      padding="$5" // ✅ valid token
    >
      {/* Header */}
      <H3 fontWeight="700" marginBottom="$4" color="$color">
        Create Campaign
      </H3>

      {/* Card container for form */}
      <Card
        elevate
        bordered
        width="90%"
        maxWidth={450}
        padding="$4"
        borderRadius="$5"
        backgroundColor="$white" // ✅ valid token
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
            <Paragraph fontWeight="600" color="$color">
              Campaign Name
            </Paragraph>
            <Input
              size="$4"
              placeholder="Enter campaign name"
              borderRadius="$4"
              width="100%"
              fontSize={16} // ✅ numeric value
            />
          </YStack>

          {/* Date Range Picker */}
          <YStack width="100%" gap="$2">
            <Paragraph fontWeight="600" color="$color">
              Select Date Range
            </Paragraph>
            <RangeCalendar onRangeSelect={handleRangeSelect} />

            {selectedDates.start && selectedDates.end && (
              <Paragraph
                fontSize={14} // ✅ numeric
                color="$color"
                textAlign="center"
                marginTop="$2"
              >
                From {selectedDates.start} to {selectedDates.end}
              </Paragraph>
            )}
          </YStack>

          {/* Description */}
          <YStack width="100%" gap="$2">
            <Paragraph fontWeight="600" color="$color">
              Description
            </Paragraph>
            <TextArea
              placeholder="Enter campaign details"
              borderRadius="$4"
              minHeight={100}
              width="100%"
              fontSize={16} // ✅ numeric
            />
          </YStack>

          {/* Submit Button */}
          <Button
            width="100%"
            marginTop="$3"
            size="$4"
            backgroundColor="$blue6"
            color="blue10"
            borderRadius="$4"
            hoverStyle={{ backgroundColor: "$blue7" }}
            onPress={() => routePage.push("/(tabs)/campaigns/campaignsDetails")}
          >
            <Paragraph color="white" fontWeight="600">
              Create Campaign
            </Paragraph>
          </Button>
        </Form>
      </Card>
    </YStack>
  );
}
