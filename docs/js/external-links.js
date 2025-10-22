(function () {
  function isExternal(href) {
    try {
      const url = new URL(href, window.location.origin);
      return url.origin !== window.location.origin;
    } catch {
      return false;
    }
  }

  function patchLinks(scope) {
    (scope || document).querySelectorAll("a[href]").forEach((a) => {
      if (isExternal(a.getAttribute("href"))) {
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    patchLinks(document);
    // повторно після внутрішньої навігації Material
    const observer = new MutationObserver(() => patchLinks(document));
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
// docs/assets/js/external-links.js
document.addEventListener("DOMContentLoaded", () => {
  const anchors = document.querySelectorAll('a[href^="http"]');
  anchors.forEach((a) => {
    // Ігноруємо внутрішні абсолютні посилання (на цей самий сайт)
    try {
      const url = new URL(a.href, window.location.href);
      const sameOrigin = url.origin === window.location.origin;
      const basePath = window.location.pathname
        .split("/")
        .slice(0, 2)
        .join("/"); // "/vernadsky-docs"
      const isInternal = sameOrigin && url.pathname.startsWith(basePath);
      if (!isInternal) {
        a.setAttribute("target", "_blank");
        if (!a.hasAttribute("rel")) a.setAttribute("rel", "noopener");
      }
    } catch (e) {
      /* no-op */
    }
  });
});
