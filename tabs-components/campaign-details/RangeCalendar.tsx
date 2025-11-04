import React, { useState } from 'react'
import { Calendar } from 'react-native-calendars'
import { Sheet, YStack, XStack, Button, Text, ScrollView } from 'tamagui'
//  Card,
interface RangeCalendarProps {
    onRangeSelect?: (range: { start: string; end: string }) => void
}

export default function RangeCalendar({ onRangeSelect }: RangeCalendarProps) {
    const [showSheet, setShowSheet] = useState(false)
    const [selectedRange, setSelectedRange] = useState<any>({})
    const [markedDates, setMarkedDates] = useState({})
    const [rangeStart, setRangeStart] = useState('')
    const [rangeEnd, setRangeEnd] = useState('')

    const onDayPress = (day: any) => {
        let newMarked: any = {}

        // Start new range
        if (!rangeStart || (rangeStart && rangeEnd)) {
            setRangeStart(day.dateString)
            setRangeEnd('')
            newMarked[day.dateString] = {
                startingDay: true,
                color: '#0ea5e9',
                textColor: 'white',
            }
            setMarkedDates(newMarked)
        } else {
            // Choose end date
            let start = new Date(rangeStart)
            let end = new Date(day.dateString)

            if (end < start) [start, end] = [end, start]

            while (start <= end) {
                const date = start.toISOString().split('T')[0]
                newMarked[date] = { color: '#38bdf8', textColor: 'white' }
                start.setDate(start.getDate() + 1)
            }

            newMarked[rangeStart] = {
                startingDay: true,
                color: '#0ea5e9',
                textColor: 'white',
            }
            newMarked[day.dateString] = {
                endingDay: true,
                color: '#0ea5e9',
                textColor: 'white',
            }

            setRangeEnd(day.dateString)
            setMarkedDates(newMarked)
            const newRange = { start: rangeStart, end: day.dateString }
            setSelectedRange(newRange)

            // ✅ Send range to parent
            if (onRangeSelect) {
                onRangeSelect(newRange)
            }
        }
    }

    return (
        <>
            {/* <Card elevate p="$4" bordered>
               
            </Card> */}
             <YStack gap="$2">
                    {/* <Text fontSize="$6" fontWeight="700">
                        Select Dates
                    </Text> */}
                    <Text color="$gray10">
                        {selectedRange.start && selectedRange.end
                            ? `Selected: ${selectedRange.start} → ${selectedRange.end}`
                            : 'Select Start and End Date Range'}
                    </Text>

                    <Button onPress={() => setShowSheet(true)}>Select Campaign Date</Button>
                </YStack>

            <Sheet open={showSheet} onOpenChange={setShowSheet}
                animation="medium">
                <Sheet.Overlay />
                <Sheet.Frame p="$4" bg="$background" borderRadius={15} >
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <YStack gap="$1">
                            <YStack>
                                <Text fontSize="$7" fontWeight="700" textAlign="center">
                                    Select Start and End Date Range
                                </Text>

                                <Calendar
                                    markingType="period"
                                    markedDates={markedDates}
                                    onDayPress={onDayPress}
                                    theme={{
                                        arrowColor: '#0ea5e9',
                                        todayTextColor: '#0ea5e9',
                                    }}
                                />
                            </YStack>


                            <XStack justifyContent="space-around" mt="$3">
                                <Button
                                    size="$4"
                                    theme="active"
                                    onPress={() => {
                                        setMarkedDates({})
                                        setRangeStart('')
                                        setRangeEnd('')
                                        setSelectedRange({})
                                        if (onRangeSelect) onRangeSelect({ start: '', end: '' })
                                    }}
                                >
                                    Reset
                                </Button>

                                <Button size="$4" theme="blue" onPress={() => setShowSheet(false)}>
                                    Done
                                </Button>
                            </XStack>
                        </YStack>
                    </ScrollView>
                </Sheet.Frame>
            </Sheet>
        </>
    )
}
