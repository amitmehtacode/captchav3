import React, {useRef, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import ReCaptchaV3 from '@haskkor/react-native-recaptchav3';
import {baseUrl, siteKeyV3, validateCaptchaToken} from '../../utils';

const CaptchaV3Lib1 = () => {
  const [show, setShow] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const captchaRef = useRef(null);

  const handleTokenReceive = token => {
    setCaptchaToken(token);
    captchaRef.current = token;
    setShow(false);
  };

  const handleRefreshToken = () => {
    setShow(true);
    if (captchaRef.current) {
      captchaRef.current.refreshToken();
    }
  };
  const handleCaptchaVerification = res => {
    console.log('res------', res);
  };

  const handleValidateToken = () => {
    validateCaptchaToken(captchaRef.current, handleCaptchaVerification);
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 10}}>{`Token: ${captchaToken}`}</Text>
      {show ? (
        <ReCaptchaV3
          ref={captchaRef}
          captchaDomain={baseUrl}
          siteKey={siteKeyV3}
          onReceiveToken={handleTokenReceive}
        />
      ) : null}

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleRefreshToken}>
        <Text style={styles.txt}>Open Captcha V3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleValidateToken}>
        <Text style={styles.txt}>Validate User</Text>
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
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'orange',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 4,
    marginBottom: 20,
  },
  txt: {
    fontSize: 15,
    fontWeight: '600',
  },
});
