import { useRouter } from 'expo-router';
import { YStack, Text, Button } from 'tamagui';

export default function Home() {
  const routePage = useRouter();

  return (
    <YStack flex={1} ai="center" jc="center">
      <Text>🏠 Home Screen</Text>
      <Text style={{}}>Hello welcome to home screen.</Text>
      <Button
        onPress={() => {
          routePage.push("/(tabs)/profile");
        }}
        size="$4"
        variant="outlined"
        theme="blue"
        borderRadius="$10"
        paddingHorizontal="$4"
        pressStyle={{ scale: 0.98 }}
      >
        Profile Page
      </Button>
    </YStack>
  )
}
