import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {WebView} from 'react-native-webview';
import {baseUrl, siteKey, siteKeyV3} from '../../utils';

const MyComponent = () => {
  const recaptchaSiteKey = siteKeyV3;
  const recaptchaBaseUrl = baseUrl;
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const webViewContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}"></script>
    </head>
    <body>
      <script>
        grecaptcha.ready(function() {
          grecaptcha.execute('${recaptchaSiteKey}', { action: 'submit' }).then(function(token) {
            window.ReactNativeWebView.postMessage(token);
          });
        });
      </script>
    </body>
    </html>
  `;

  const handleWebViewMessage = event => {
    console.log('event-------', event);
    // const token = event.nativeEvent.data;
    // if (token) {
    //   setRecaptchaToken(token);
    //   // You can perform further actions with the token here
    // }
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{
          html: webViewContent,
          baseUrl: recaptchaBaseUrl,
        }}
        onMessage={handleWebViewMessage}
      />
      <Button title="Show Token" onPress={() => alert(recaptchaToken)} />
    </View>
  );
};

export default MyComponent;
