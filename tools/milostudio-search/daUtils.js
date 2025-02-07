// eslint-disable-next-line import/no-unresolved
import DA_SDK from 'https://da.live/nx/utils/sdk.js';

(async () => {
  try {
    const { context: { repo }, token } = await DA_SDK;
    window.location.replace(`https://milostudio--milo--adobecom.aem.page/tools/search/ms-search.html?tenant=${repo}&token=${token}`);
  } catch (error) {
    console.error('Error initializing DA_SDK:', error);
  }
})();
