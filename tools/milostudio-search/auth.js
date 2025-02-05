import DA_SDK from 'https://da.live/nx/utils/sdk.js';

(async function init() {
  try {
    const { context: { repo }, token } = await DA_SDK;
    window.location.href = `./search/ms-search.html?tenant=${repo}&token=${token}`;
  } catch (error) {
    console.error('Error initializing DA_SDK:', error);
  }
})();
