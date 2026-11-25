(function () {
  function setupMobileMenuClose() {
    const nav = document.getElementById("mainNav");
    if (!nav) return;

    nav.addEventListener("click", function (event) {
      if (!event.target.closest("a")) return;
      if (!nav.classList.contains("show") || !window.bootstrap) return;
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    });
  }

  function resolveLocalFolderLinks() {
    if (location.protocol !== "file:") return;

    const links = document.querySelectorAll("a[href]");
    for (let i = 0; i < links.length; i++) {
      const href = links[i].getAttribute("href");
      if (!href || !/^\.\.?\//.test(href)) continue;

      const parts = href.split("#");
      if (parts[0].slice(-1) !== "/") continue;

      const hash = parts.length > 1 ? "#" + parts[1] : "";
      links[i].setAttribute("href", parts[0] + "index.html" + hash);
    }
  }

  setupMobileMenuClose();
  resolveLocalFolderLinks();
})();
