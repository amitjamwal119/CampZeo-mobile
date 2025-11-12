import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { H1, ScrollView, Text, YStack } from 'tamagui';




export default function Dashboard() {

  const routePage = useRouter();
  return (
  <>
  <ScrollView>
    <YStack>
          <H1 textAlign='center' fontWeight={700} fontSize={30}>Dashboard</H1>

      <TouchableOpacity  onPress={() => {routePage.push("/(auth)/auth")}} >
        {/**/}
        <Text>Go to auth page</Text>
      </TouchableOpacity>
    </YStack>
  </ScrollView>
  </>
  )
}
