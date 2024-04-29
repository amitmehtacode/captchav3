import React, {useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {baseUrl, siteKey} from '../../utils';
import ReCaptchaV3 from '@haskkor/react-native-recaptchav3';

const CaptchaV3Lib1 = () => {
  const captchaRef = useRef(null);

  const handleTokenReceive = token => {
    console.log('token--->>>', token);
    captchaRef.current = token;
  };

  const handleRefreshToken = () => {
    console.log('press>>>>>');
    if (captchaRef.current) {
      console.log('11111');
      captchaRef.current.refreshToken();
    }
  };

  return (
    <View style={styles.container}>
      <ReCaptchaV3
        ref={captchaRef}
        captchaDomain={baseUrl}
        siteKey={siteKey}
        onReceiveToken={handleTokenReceive}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleRefreshToken}>
        <Text style={styles.txt}>Open Captcha V3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CaptchaV3Lib1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'orange',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 4,
  },
  txt: {
    fontSize: 15,
    fontWeight: '600',
  },
});
