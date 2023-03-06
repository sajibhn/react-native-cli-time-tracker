/* eslint-disable @typescript-eslint/no-shadow */
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const ref = firestore().collection('time-tracker');

interface DateData {
  date: string;
  startTime: number;
  endTime: number;
  id: string;
}

export const createDate = () => {
  const newDate = {
    date: moment(new Date()).format('DD MMMM YYYY'),
    startTime: 0,
    endTime: 0,
  } as DateData;

  ref.add(newDate);
};

export const previousDate = async (date: string, id: string) => {
  const previousDate = moment(date, 'DD MMMM YYYY').subtract(1, 'day').format('DD MMMM YYYY');
  await ref.doc(id).update({ date: previousDate });
};

export const nextDate = async (date: string, id: string) => {
  const nextDate = moment(date, 'DD MMMM YYYY').add(1, 'day').format('DD MMMM YYYY');
  await ref.doc(id).update({ date: nextDate });
};

export const handleStartTime = async (itemValue: number, id: string) => {
  await ref.doc(id).update({ startTime: itemValue });
};

export const handleEndTime = async (itemValue: number, id: string) => {
  await ref.doc(id).update({ endTime: itemValue });
};
