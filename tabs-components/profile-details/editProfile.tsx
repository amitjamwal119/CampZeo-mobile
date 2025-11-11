import {
  Button,
  Dialog,
  Form,
  YStack,
  Input,
  Label,
  H5,
  Theme,
  H3,
} from "tamagui";

export default function EditProfile() {
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
            Edit Profile
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
            borderRadius="$5"
            width="90%"
            maxWidth={400}
            alignSelf="center"
            gap="$3"
            animation="fast"
            enterStyle={{ scale: 0.9, opacity: 0 }}
            exitStyle={{ scale: 0.95, opacity: 0 }}
          >
            <Dialog.Title textAlign="center">
              <H3 color="$light.color" fontSize={30} textAlign="center">
                Edit Profile
              </H3>
            </Dialog.Title>

            {/* Form */}
            <Form onSubmit={() => console.log("Save changes")}>
              <YStack gap="$3" marginTop="$3">
                <YStack gap="$2">
                  <Label color="$light.color">First Name</Label>
                  <Input
                    size="$7"
                    placeholder="Enter first name"
                    backgroundColor="$light.muted"
                    borderColor="$light.borderColor"
                    // color="$light.color"
                    borderRadius="$1"
                  />
                </YStack>

                <YStack gap="$2">
                  <Label color="$light.color">Last Name</Label>
                  <Input
                    size="$7"
                    placeholder="Enter last name"
                    backgroundColor="$light.muted"
                    borderColor="$light.borderColor"
                    color="$light.color"
                    borderRadius="$1"
                  />
                </YStack>

                <YStack gap="$2">
                  <Label color="$light.color">Phone</Label>
                  <Input
                    size="$7"
                    placeholder="Enter phone number"
                    keyboardType="phone-pad"
                    backgroundColor="$light.muted"
                    borderColor="$light.borderColor"
                    color="$light.color"
                    borderRadius="$1"
                  />
                </YStack>

                <Button
                  //   marginTop="$3"
                  size="$7"
                  color="$white"
                  fontSize={19}
                  fontWeight={700}
                  backgroundColor="$green7"
                  borderRadius="$4"
                  hoverStyle={{ opacity: 0.9 }}
                >
                  Save Changes
                </Button>
              </YStack>
            </Form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </Theme>
  );
}
