/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firestore from '@react-native-firebase/firestore';

interface DateData {
  date: string;
  startTime: number;
  endTime: number;
  id: string;
}
const TimeTracker = () => {
  const [dates, setDates] = useState<DateData[]>([]);
  const ref = firestore().collection('time-tracker');

  useEffect(() => {
    ref.onSnapshot(querySnapshot => {
      const datesArr: DateData[] = [];
      querySnapshot.forEach(doc => {
        datesArr.push({ ...doc.data(), id: doc.id } as DateData);
      });
      setDates(datesArr);
    });
  }, []);

  console.log(dates);

  return (
    <View>
      <Text style={styles.text}>good what happed to hot reload ok it is working fg</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: 'Inter-Regular',
  },
});

export default TimeTracker;
