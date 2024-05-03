import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>reCAPTCHA V3</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop: 50,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
