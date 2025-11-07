import { H3,YStack } from "tamagui";


import ListCampaignTable from "./campaignComponents/listCampaignTable";

export default function Campaigns() {
  
  const headings = [
    { key: "campaignName", label: "Campaign Name" },
    { key: "campaignDescription", label: "Campaign Description" },
    { key: "dates", label: "Dates" },
    { key: "posts", label: "Posts" },
    { key: "actions", label: "Actions" },
  ];

  const rows = [
    {
      id: "1",
      campaignName: "Summer Sale",
      campaignDescription: "Discounts on selected items up to 50% off.",
      dates: "01 May 2025 – 10 May 2025",
      postsCount: 5,
    },
    {
      id: "2",
      campaignName: "Refer & Earn",
      campaignDescription: "Referral campaign for new sign-ups.",
      dates: "01 Jun 2025 – 30 Jun 2025",
      postsCount: 2,
    },
    {
      id: "3",
      campaignName: "Festive Launch",
      campaignDescription: "New product promotions across platforms.",
      dates: "15 Oct 2025 – 05 Nov 2025",
      postsCount: 8,
    },
  ];

  return (
    <YStack flex={1} alignItems="center" bg="$background" paddingTop={20}>
      {/* Header */}
      <H3 fontWeight="700" mb="$1">
        Campaign list
      </H3>
    

      <ListCampaignTable headings={headings} rows={rows} />
    </YStack>
  );
}
