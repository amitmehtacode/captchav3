export const siteKey = '6Ld_CsgpAAAAAK6U9yiR4h8YkdKM9dwws3FpTZkL'; // Place your reCAPTCHA site key here
export const baseUrl = 'https://royallarchitecture.co.uk/'; // Place your server's base URL here

export const siteKeyV3 = '6LeZuMwpAAAAAJBayu-9rw3P2fKUp_RnClT7K4LY';

const siteVerifyUrl = 'https://www.google.com/recaptcha/api/siteverify';
const secretKey = '6LdqCsgpAAAAAF7yyqckpq1iyDkpZwJQc0GjdSmY';

export const validateCaptchaToken = async (token, callback = {}) => {
  const params = {
    secret: secretKey,
    response: token,
  };

  try {
    const postData = new URLSearchParams(params).toString();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    const response = await fetch(siteVerifyUrl, {
      ...options,
      body: postData,
    });

    const data = await response.json();

    if (data?.ok && data?.status === 200) {
      callback(data);
    } else {
      callback(data);
    }
  } catch (error) {
    callback({});
  }
};
