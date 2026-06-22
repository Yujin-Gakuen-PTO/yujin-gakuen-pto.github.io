(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-menu");

  if (!toggle || !menu) {
    return;
  }

  const setMenu = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menu.hidden = !isOpen;

    if (isOpen) {
      const firstLink = menu.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 880px)").matches) {
      setMenu(false);
    }
  });
})();
