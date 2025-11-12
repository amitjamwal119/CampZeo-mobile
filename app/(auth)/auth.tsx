import {
  Button,
  Form,
  Input,
  Label,
  ScrollView,
  YStack,
  H3,
  Separator,
  Theme,
} from "tamagui";
export default function Auth() {
  return (
    <>
      <Theme name="light">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 40,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Page Container */}
          <YStack
            width="100%"
            maxWidth={400}
            backgroundColor="$background"
            borderRadius="$5"
            padding="$5"
            shadowColor="#000"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.1}
            shadowRadius={6}
            elevation={3}
          >
            {/* Header */}
            <YStack alignItems="center" marginBottom="$4">
              <H3
                fontWeight="700"
                color="$color"
                letterSpacing={0.3}
                fontSize="$5"
              >
                Welcome Back
              </H3>
              <Separator
                width="40%"
                marginTop="$2"
                borderColor="$borderColor"
              />
            </YStack>

            {/* Form */}
            <Form onSubmit={() => console.log("Save changes")}>
              <YStack gap="$3">
                {/* Email */}
                <YStack gap="$2">
                  <Label color="$color">Email</Label>
                  <Input
                    size="$7"
                    placeholder="Enter email"
                    backgroundColor="$backgroundHover"
                    borderColor="$borderColor"
                    borderRadius="$3"
                    paddingHorizontal="$4"
                    color="$color"
                  />
                </YStack>

                {/* Phone */}
                <YStack gap="$2">
                  <Label color="$color">Password</Label>
                  <Input
                    size="$7"
                    placeholder="Enter Password"
                    backgroundColor="$backgroundHover"
                    borderColor="$borderColor"
                    borderRadius="$3"
                    paddingHorizontal="$4"
                    color="$color"
                  />
                </YStack>

                {/* Submit Button */}
                <Button
                  size="$6"
                  color="$white"
                  fontSize={18}
                  fontWeight="700"
                  backgroundColor="$green7"
                  borderRadius="$3"
                  hoverStyle={{ opacity: 0.9 }}
                  pressStyle={{ scale: 0.97 }}
                >
                  Login Now
                </Button>
              </YStack>
            </Form>
          </YStack>
        </ScrollView>
      </Theme>{" "}
    </>
  );
}
