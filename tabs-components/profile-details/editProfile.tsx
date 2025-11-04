import {
    Button,
    Dialog,
    Form,
    YStack,
    Input,
    Label, H5
} from 'tamagui';


export default function EditProfile() {
    return (
        <Dialog modal>
            <Dialog.Trigger asChild>
                <Button>Edit Profile</Button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay
                    key="overlay"
                    animation="fast"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                    backgroundColor="$shadow6"
                />

                <Dialog.Content
                    key="content"
                    bordered
                    elevate
                    padding="$4"
                    borderRadius="$6"
                    gap="$3"
                    animation="fast"
                    enterStyle={{ y: 10, opacity: 0 }}
                    exitStyle={{ y: 10, opacity: 0 }}
                >
                    <Dialog.Title style={{ textAlign: "center" }}><H5>Edit Profile</H5></Dialog.Title>
                    {/* <Dialog.Description>
                        This is a basic dialog box using Tamagui.
                    </Dialog.Description>

                    <Paragraph>
                        You can put any content here — text, buttons, forms, etc.
                    </Paragraph> */}

                    <Form onSubmit={() => console.log('Save changes')}>
                        <YStack gap="$3" mt="$3">
                            <YStack>
                                <Label>First Name</Label>
                                <Input placeholder="Enter first name" />
                            </YStack>

                            <YStack>
                                <Label>Last Name</Label>
                                <Input placeholder="Enter last name" />
                            </YStack>

                            <YStack>
                                <Label>Phone</Label>
                                <Input placeholder="Enter phone number" keyboardType="phone-pad" />
                            </YStack>

                            <Button mt="$2" theme="blue">
                                Save Changes
                            </Button>
                        </YStack>
                    </Form>

                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}