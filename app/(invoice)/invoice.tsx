import React from "react";
// import { useRouter } from "expo-router";
import {
  YStack,
  XStack,
  ScrollView,
  Button,
  Input,
  Text,
  Card,
  useMedia,
  Theme,
  Separator,
  H1,
  Select,
  Adapt,
  Sheet,
} from "tamagui";
import { ChevronDown, Check, Printer } from "@tamagui/lucide-icons";
// ----------------------------------------------------
// ✅ ListInvoiceTable Component
// ----------------------------------------------------

// headings array
export default function Invoice() {
  // const router = useRouter();
  const media = useMedia();

  // headings array

  const headings = [
    { key: "organization", label: "Organization" },
    { key: "plan", label: "Plan" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "invoiceDate", label: "Invoice Date" },
    { key: "dueDate", label: "Due Date" },
  ];

  // rows array
  const rows = [
    {
      id: 1,
      organization: "TechNova Pvt. Ltd.",
      plan: "Premium",
      amount: "$1,200",
      status: "paid",
      invoiceDate: "2025-10-01",
      dueDate: "2025-10-15",
    },
    {
      id: 2,
      organization: "ByteLogic Systems",
      plan: "Basic",
      amount: "$500",
      status: "pending",
      invoiceDate: "2025-11-05",
      dueDate: "2025-11-20",
    },
    {
      id: 3,
      organization: "CloudMatrix Inc.",
      plan: "Enterprise",
      amount: "$2,800",
      status: "paid",
      invoiceDate: "2025-09-15",
      dueDate: "2025-09-30",
    },
    {
      id: 4,
      organization: "NextGen Solutions",
      plan: "Standard",
      amount: "$950",
      status: "pending",
      invoiceDate: "2025-11-02",
      dueDate: "2025-11-17",
    },
    {
      id: 5,
      organization: "QuantumWare Technologies",
      plan: "Pro",
      amount: "$1,500",
      status: "paid",
      invoiceDate: "2025-10-10",
      dueDate: "2025-10-25",
    },
  ];

  // ----------------------------------------------------
  // ✅ Reusable Action Buttons Component
  // ----------------------------------------------------
  const ActionButtons = () => (
    <XStack alignItems="center" justifyContent="center" gap="$5">
      {/* Edit Icon */}
      {/* <TouchableOpacity activeOpacity={0.7}>
        <Edit3 size={20} color="$color" />
      </TouchableOpacity> */}

      {/* Delete Dialog */}
      {/* <AlertDialog native>
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
                Delete Invoice
              </AlertDialog.Title>

              <AlertDialog.Description fontSize="$3" color="$color">
                Are you sure you want to delete this invoice record?
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
      </AlertDialog> */}
    </XStack>
  );

  // ----------------------------------------------------
  // ✅ Main Render
  // ----------------------------------------------------
  return (
    <>
      <ScrollView>
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
            <H1 textAlign="center" fontWeight={700} fontSize={30}>
              Invoices
            </H1>
            {/* ==============================
          HEADER BAR
        =============================== */}

            <XStack width="100%" justifyContent="space-between">
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
              <XStack
                alignItems="center"
                gap="$4"
                justifyContent="space-between"
              >
                <Input
                  flex={1}
                  placeholder="Search invoices..."
                  fontSize={16}
                  paddingVertical="$3"
                  paddingHorizontal="$4"
                  borderRadius="$5"
                  borderWidth={1}
                  borderColor="$borderColor"
                  color="$black"
                />
              </XStack>
            </XStack>

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
                        width={180}
                        justifyContent="center"
                        alignItems="center"
                        paddingHorizontal="$3"
                      >
                        <Text fontWeight="700" fontSize="$5" color="$color">
                          {label}
                        </Text>
                      </XStack>
                    ))}
                    <XStack width={180} justifyContent="center">
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
                        <XStack width={180} justifyContent="center">
                          <Text textAlign="center">{row.organization}</Text>
                        </XStack>

                        <XStack width={180} justifyContent="center">
                          <Text textAlign="center">{row.plan}</Text>
                        </XStack>

                        <XStack width={180} justifyContent="center">
                          <Text textAlign="center">${row.amount}</Text>
                        </XStack>

                        <XStack width={180} justifyContent="center">
                          <Text
                            textAlign="center"
                            color={row.status === "paid" ? "green" : "orange"}
                            fontWeight="700"
                          >
                            {row.status}
                          </Text>
                        </XStack>

                        <XStack width={180} justifyContent="center">
                          <Text textAlign="center">{row.invoiceDate}</Text>
                        </XStack>

                        <XStack width={180} justifyContent="center">
                          <Text textAlign="center">{row.dueDate}</Text>
                        </XStack>

                        <XStack width={180} justifyContent="center">
                          <ActionButtons />
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
                // style={{ maxHeight: 520 }}
                contentContainerStyle={{ paddingBottom: 20 }}
              >
                <YStack gap="$4">
                  {rows.map((row, i) => (
                    <Card
                      key={i}
                      padding="$3"
                      borderWidth={1}
                      borderColor="$borderColor"
                      // borderRadius="$3"
                      backgroundColor="$white"
                      hoverStyle={{ backgroundColor: "$gray1" }}
                      shadowColor="rgba(0,0,0,0.05)"
                      shadowRadius={6}
                    >
                      <YStack gap="$3">
                        <Text fontWeight="700" color="$color" fontSize="$4">
                          {row.organization}
                        </Text>

                        <Text color="$color" fontSize="$3">
                          Plan: {row.plan}
                        </Text>

                        <Text color="$color" fontSize="$3">
                          Amount: ${row.amount}
                        </Text>

                        <Text
                          fontSize="$3"
                          fontWeight="600"
                          color={row.status === "paid" ? "green" : "orange"}
                        >
                          Status: {row.status}
                        </Text>

                        <Text fontSize="$3" color="$color" opacity={0.7}>
                          Invoice Date: {row.invoiceDate}
                        </Text>

                        <Text fontSize="$3" color="$color" opacity={0.7}>
                          Due Date: {row.dueDate}
                        </Text>

                        <Separator marginVertical="$1" />

                        <XStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <ActionButtons />
                        </XStack>
                      </YStack>
                    </Card>
                  ))}
                </YStack>
              </ScrollView>
            )}

            {/* ==============================
          📄 Pagination
        =============================== */}
            <XStack
              justifyContent="center"
              alignItems="center"
              gap="$3"
              paddingVertical="$3"
              borderTopWidth={1}
              borderColor="$borderColor"
            >
              <Button
                size="$3"
                backgroundColor="$blue6"
                borderRadius="$2"
                disabled
              >
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
      </ScrollView>
    </>
  );
}
