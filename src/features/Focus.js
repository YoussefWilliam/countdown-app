import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes';


export const Focus = ({ addSub }) => {
  const [textInput, setTextInput] = useState('');
  console.log(textInput);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Screen</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to foucs on?"
          value={textInput}
          onChangeText={setTextInput}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSub(textInput)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
  },
  text: {
    color: colors.white,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
});
