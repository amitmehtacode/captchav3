import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CaptchaV3Lib1 from './src/components/CaptchaV3Lib1';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>reCAPTCHA V3</Text>
      <CaptchaV3Lib1 />
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
