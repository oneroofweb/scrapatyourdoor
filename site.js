// Scrap at your Door — chhota sa JS
(function () {
  // 1) Mobile: menu link dabane par menu band ho jaye
  var nav = document.getElementById("mainNav");
  if (nav) {
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && nav.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  }

  // 2) Sirf local folder se kholne par (file://): "page/" links ko "page/index.html" bana do,
  //    taaki folder listing ki jagah page khule. Live website (https) par ye kuch nahi karta.
  if (location.protocol === "file:") {
    var links = document.querySelectorAll("a[href]");
    for (var i = 0; i < links.length; i++) {
      var h = links[i].getAttribute("href");
      if (!/^\.\.?\//.test(h)) continue; // sirf relative links
      var parts = h.split("#");
      if (parts[0].slice(-1) === "/") {
        links[i].setAttribute("href", parts[0] + "index.html" + (parts.length > 1 ? "#" + parts[1] : ""));
      }
    }
  }
})();
