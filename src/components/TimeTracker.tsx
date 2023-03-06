import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TimeTracker = () => {
  return (
    <View>
      <Text style={styles.text}>Timeracker</Text>
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
