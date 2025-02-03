import DA_SDK from 'https://da.live/nx/utils/sdk.js';

const ORG_MAP = {
  'da-bacom': 'DA BACOM',
  'da-helpx': 'DA ELPX'
};

(async function init() {
  try {
    document.body.style.visibility = 'hidden'; 

    const { context: { repo }, token } = await DA_SDK;
    // const tenant = repo.replace('-', '_');
    const currentTenant = ORG_MAP[repo]

    window.sessionStorage.setItem('da-repo', JSON.stringify(currentTenant))
    window.sessionStorage.setItem('da-token', JSON.stringify(token))

    if (!token) {
      document.body.innerHTML = `
        <div style='display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column;'>
          <h2>Please sign in to continue</h2>
        </div>
      `;
      document.body.style.visibility = 'visible';
      return;
    }
    document.body.style.visibility = 'visible';
  } catch (error) {
    console.error('Error initializing DA_SDK:', error);
  }
})();
