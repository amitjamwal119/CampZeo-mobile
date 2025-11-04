Dialog box for profile page
 <Card w="100%" maxWidth={400} p="$3" br="$4" elevation="$2">
          <YStack>
            {/* 👇👇 FIX: added orientation="vertical" */}
            <Tabs defaultValue="overview">
              <Tabs.List justifyContent="center" ai="center" mb="$3" borderBottomWidth={1} borderColor="$gray6">
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="editProfile">Edit Profile</Tabs.Tab>
                <Tabs.Tab value="changePassword">Change Password</Tabs.Tab>
              </Tabs.List>

              {/* Tab Contents */}
              <YStack w="100%" mt="$2" alignSelf="stretch">
                
                {/* ---Overview --- */}
                <Tabs.Content value="overview">
                  {/* <Card p="$4" bg="$gray2" br="$4">
                    
                  </Card> */}
                  <YStack gap="$3">
                      <XStack jc="space-between">
                        <Paragraph fontWeight="bold">Full Name</Paragraph>
                        <Paragraph>Amit Jamwal</Paragraph>
                      </XStack>
                      <XStack jc="space-between">
                        <Paragraph fontWeight="bold">Role</Paragraph>
                        <Paragraph>Student</Paragraph>
                      </XStack>
                      <XStack jc="space-between">
                        <Paragraph fontWeight="bold">Phone</Paragraph>
                        <Paragraph>+91 7807271261</Paragraph>
                      </XStack>
                      <XStack jc="space-between">
                        <Paragraph fontWeight="bold">Email</Paragraph>
                        <Paragraph>amit@example.com</Paragraph>
                      </XStack>
                    </YStack>
                </Tabs.Content>

                {/* --- Edit Profile --- */}
                <Tabs.Content value="editProfile">
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

                      <Button mt="$2" theme="active">
                        Save Changes
                      </Button>
                    </YStack>
                  </Form>
                </Tabs.Content>

                {/* --- Change Password --- */}
                <Tabs.Content value="changePassword">
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

                      <Button mt="$2" theme="yellow">
                        Change Password
                      </Button>
                    </YStack>
                  </Form>
                </Tabs.Content>

              </YStack>
            </Tabs>
          </YStack>
        </Card>