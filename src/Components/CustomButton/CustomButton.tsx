import React from 'react';
import { TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';
import styles from './CustomButton-styles';

interface Props {
  title: string;
  onPress: () => void;
  bgColor: string
}

const CustomButton: React.FC<Props> = ({ title, onPress, bgColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
