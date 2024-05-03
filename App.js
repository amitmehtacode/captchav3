import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import ReCaptchaV3 from './src/components/ReCaptchaV3';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>reCAPTCHA V3</Text>
      <ReCaptchaV3
        baseUrl={'https://yourdomain.com'}
        siteKeyV3={'YOUR_SITE_KEY'}
        onReceiveToken={token => {
          console.log('token:', token);
        }}
      />
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
