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

  function formatTodayIndia() {
    const now = new Date();
    try {
      return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "Asia/Kolkata"
      }).format(now);
    } catch (_) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear();
    }
  }

  function updateRateDates() {
    const stamps = document.querySelectorAll("[data-rate-date]");
    if (!stamps.length) return;

    const todayLabel = formatTodayIndia();
    for (let i = 0; i < stamps.length; i++) {
      stamps[i].textContent = todayLabel;
    }
  }

  setupMobileMenuClose();
  resolveLocalFolderLinks();
  updateRateDates();
})();
