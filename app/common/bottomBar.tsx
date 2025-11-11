import { XStack, Text, View } from 'tamagui';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


export default function BottomBar({ state, descriptors, navigation }: any) {
  const hiddenRoutes = ['analyticsDashboard', 'profile'];

  const insets = useSafeAreaInsets()

  return (
    <XStack
      borderColor="$border"
      backgroundColor="$background"
      paddingBottom={insets.bottom || 12}
      justifyContent="space-around"
      // paddingHorizontal="$2"
      paddingVertical="$1"
    >
      {state.routes
        .filter((route: any) => !hiddenRoutes.includes(route.name)) // 👈 filter out unwanted tabs
        .map((route: any, index: number) => {
          const isFocused = state.index === index
          const onPress = () => navigation.navigate(route.name)
          const label = descriptors[route.key].options.title ?? route.name

          const iconName =
            route.name === 'index'
              ? 'trending-up-outline'
              : route.name === 'accounts'
                ? 'book-outline'
                : route.name === 'campaigns'
                  ? 'map-outline'
                  : route.name === 'contacts'
                    ? 'mail-outline'
                    : route.name === 'logs'
                      ? 'journal-outline'
                      : ''

          return (
            <View key={route.key} onPress={onPress} alignItems="center" justifyContent='space-between' flex={1}>
              <Ionicons
                name={iconName as any}
                size={22}
                color={isFocused ? '#007AFF' : '#444'}
              />
              <Text color={isFocused ? '#007AFF' : '#444'}>{label}</Text>
            </View>
          )
        })}
    </XStack>
  )
}
