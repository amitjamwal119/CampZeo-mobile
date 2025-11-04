import {
  Button,
    Dialog,
    Form,
    YStack,
    Label,Input,H5
} from 'tamagui';

// import { X, ChevronDown } from '@tamagui/lucide-icons';



export default function ChangePassword() {
    return (
        <Dialog modal>
            <Dialog.Trigger asChild>
                <Button>Change Password</Button>
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
                    <Dialog.Title style={{ textAlign: "center" }}><H5>Change Password</H5></Dialog.Title>
                   
                    <Form onSubmit={() => console.log('Change password')}>
                    <YStack gap="$3" mt="$3">
                      <YStack>
                        <Label>Current Password</Label>
                        <Input placeholder="Enter current password" secureTextEntry />
                      </YStack>

                      <YStack>
                        <Label>New Password</Label>
                        <Input placeholder="Enter new password" secureTextEntry />
                      </YStack>

                      <YStack>
                        <Label>Re-enter Password</Label>
                        <Input placeholder="Re-enter password" secureTextEntry />
                      </YStack>

                      <Button mt="$2" theme="blue">
                        Change Password
                      </Button>
                    </YStack>
                  </Form>
                  
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}