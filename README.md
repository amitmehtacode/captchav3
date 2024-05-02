## reCAPTCHA V3 for React Native (Android and iOS)
A lightweight and secure React Native library for seamless integration of Google ReCaptcha V3 into mobile applications. Simplify user verification and enhance security with tokenized captcha handling, ensuring a frictionless experience for your users while protecting your app from malicious activities by Amit Kumar..


<p align="left">
  <a href="https://www.npmjs.com/package/react-native-accordion-list-view"><img src="https://img.shields.io/badge/npm-v1.0.3-blue"></a>
  <a href="https://travis-ci.org/louay12/react-native-accordion-list-view"><img src="https://img.shields.io/badge/Build-Passing-pass"></a>
</p>

<p align="left">
  <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-ISC-blue.svg"></a>

</p>

## Getting started
```bash
npm install react-native-secure-captcha-v3 --save
```
or
```bash
yarn add react-native-secure-captcha-v3
```

### Demo

<p>
   <img width="800" src="https://github.com/amitmehtacode/captchav3/raw/main/src/v3.gif" />
</p>

<br>

### Usage

Import the `MultiAccordion` component from the package and use it in your React Native application.

```jsx
import { SafeAreaView } from 'react-native';
import React from 'react';
import RecaptchaV3 from 'react-native-secure-captcha-v3';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RecaptchaV3
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
  },
});
```



## Props

The `reCaptchaV3` component accepts the following props:

| Props                  | Type                               | Required | Default Value       | Description                                                                                                                                                                                                                                  |
|------------------------|------------------------------------|----------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| baseUrl                | string                             | Yes      | ''                  | The base URL for the ReCaptcha script Must start with https://.                                                                                                                                                                                                       |
| siteKeyV3              | string                             | Yes      | ''                  | The site key for ReCaptcha V3.                                                                                                                                                                                                              |
| onReceiveToken         | (token: string) => void            | Yes      | () => {}            | Callback function triggered when a token is received from ReCaptcha V3.                                                                                                                                                                                                          






## Contributing

**Contributions are welcome!** Please check the contribution guidelines before submitting issues or pull requests.

## License

**ISC**