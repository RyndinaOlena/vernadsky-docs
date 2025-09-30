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
