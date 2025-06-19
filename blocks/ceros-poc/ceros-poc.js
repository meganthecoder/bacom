export default function init(el) {
  const experienceId = 'experience-5d02ddcfe4e08';
  const aspectRatio = '0.83333333';
  const cerosUrl = el.querySelector('a')?.href;
  if (!cerosUrl) return;
  const title = 'To-Do List Practice';

  const embedHTML = `
    <div style='position: relative;width: auto;padding: 0 0 800px;height: 0;top: 0;left: 0;bottom: 0;right: 0;margin: 0;border: 0 none' id="${experienceId}" data-aspectRatio="${aspectRatio}">
      <iframe allowfullscreen src='${cerosUrl}' style='position: absolute;top: 0;left: 0;bottom: 0;right: 0;margin: 0;padding: 0;border: 0 none;height: 100%;width: 100%' frameborder='0' class='ceros-experience' title='${title}'></iframe>
    </div>
    <script type="text/javascript" src="https://view.ceros.com/scroll-proxy.min.js" data-ceros-origin-domains="view.ceros.com"></script>
  `;

  el.innerHTML = embedHTML;
}
