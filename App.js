import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';

export default function App() {
  const [currentSub, setCurrentSub] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSub ? (
        <Focus addSub={setCurrentSub} />
      ) : (
        <Timer
          focusSubject={currentSub}
          onTimerEnd={() => {}}
          clearSubject={() => setCurrentSub(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
