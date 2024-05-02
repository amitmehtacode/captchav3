import React from 'react';
import {View} from 'react-native';

import {WebView} from 'react-native-webview';

const ReCaptchaV3 = ({
  baseUrl = '',
  siteKeyV3 = '',
  onReceiveToken = () => {},
}) => {
  const recaptchaSiteKey = siteKeyV3;
  const recaptchaBaseUrl = baseUrl;
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
    const token = event.nativeEvent.data;
    if (token) {
      onReceiveToken(token);
    }
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
    </View>
  );
};

export default ReCaptchaV3;
