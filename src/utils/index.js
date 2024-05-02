export const baseUrl = ''; // Place your server's base URL here
export const siteKeyV3 = ''; // Place your reCAPTCHA 3 site key here

const SITE_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const SECRET_KEY = ''; // Place your reCAPTCHA 3 site key here
const STATUS_CODE_OK = 200;

export const validateCaptchaToken = async (token = '', callback = {}) => {
  const params = {
    secret: SECRET_KEY,
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

    const response = await fetch(SITE_VERIFY_URL, {
      ...options,
      body: postData,
    });

    // console.log("🚀 ~ validateCaptchaToken ~ data:", response)

    const data = await response.json();
    

    if (response?.ok && response?.status === STATUS_CODE_OK) {
      callback(response);
    } else {
      callback(response);
    }
  } catch (error) {
    callback({});
  }
};
