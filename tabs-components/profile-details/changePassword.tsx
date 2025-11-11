import { Button, Dialog, Form, YStack, Label, Input, H5, Theme } from "tamagui";

export default function ChangePassword() {
  return (
    <Theme name="light">
      <Dialog modal>
        {/* Trigger Button */}
        <Dialog.Trigger asChild>
          <Button
            size="$4"
            fontWeight="600"
            backgroundColor="$blue7"
            color="white"
            borderRadius="$4"
            hoverStyle={{ opacity: 0.9 }}
          >
            Change Password
          </Button>
        </Dialog.Trigger>

        {/* Dialog Portal */}
        <Dialog.Portal>
          {/* Overlay */}
          <Dialog.Overlay
            key="overlay"
            animation="fast"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
            backgroundColor="rgba(0,0,0,0.4)"
          />

          {/* Dialog Content */}
          <Dialog.Content
            key="content"
            elevate
            bordered
            backgroundColor="$light.background"
            borderColor="$light.borderColor"
            padding="$5"
            borderRadius="$6"
            width="90%"
            maxWidth={400}
            alignSelf="center"
            gap="$3"
            animation="fast"
            enterStyle={{ scale: 0.9, opacity: 0 }}
            exitStyle={{ scale: 0.95, opacity: 0 }}
          >
            <Dialog.Title textAlign="center">
              <H5 color="$light.color" fontSize={30} textAlign="center">
                Change Password
              </H5>
            </Dialog.Title>

            {/* Form */}
            <Form onSubmit={() => console.log("Change password")}>
              <YStack gap="$3" marginTop="$3">
                <YStack gap="$2">
                  <Label color="$light.color">Current Password</Label>
                  <Input
                    size="$7"
                    placeholder="Enter current password"
                    secureTextEntry
                    backgroundColor="$light.muted"
                    borderColor="$light.borderColor"
                    color="$light.color"
                    borderRadius="$1"
                  />
                </YStack>

                <YStack  gap="$2">
                  <Label color="$light.color">New Password</Label>
                  <Input
                    size="$7"
                    placeholder="Enter new password"
                    secureTextEntry
                    backgroundColor="$light.muted"
                    borderColor="$light.borderColor"
                    color="$light.color"
                    borderRadius="$1"
                  />
                </YStack>

                <YStack  gap="$2">
                  <Label color="$light.color">Re-enter Password</Label>
                  <Input
                    size="$7"
                    placeholder="Re-enter password"
                    secureTextEntry
                    backgroundColor="$light.muted"
                    borderColor="$light.borderColor"
                    color="$light.color"
                    borderRadius="$1"
                  />
                </YStack>

                <Button
                  // marginTop="$3"
                  size="$7"
                  color="white"
                  fontSize={19}
                  fontWeight={700}
                  backgroundColor="$green7"
                  borderRadius="$4"
                  hoverStyle={{ opacity: 0.9 }}
                >
                  Change Password
                </Button>
              </YStack>
            </Form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </Theme>
  );
}
