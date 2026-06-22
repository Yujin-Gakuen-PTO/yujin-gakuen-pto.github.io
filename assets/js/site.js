(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#mobile-menu");
  const submenuToggles = document.querySelectorAll(".mobile-submenu-toggle");

  if (!toggle || !menu) {
    return;
  }

  const setSubmenu = (button, isOpen) => {
    const submenu = document.getElementById(button.getAttribute("aria-controls"));
    const label = button.querySelector(".visually-hidden");

    if (!submenu) return;

    button.setAttribute("aria-expanded", String(isOpen));
    submenu.hidden = !isOpen;

    if (label) {
      const section = button.closest(".mobile-nav-section")?.querySelector(".mobile-nav-parent")?.textContent?.trim() || "section";
      label.textContent = `${isOpen ? "Hide" : "Show"} ${section} links`;
    }
  };

  const setMenu = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menu.hidden = !isOpen;

    if (!isOpen) {
      submenuToggles.forEach((button) => setSubmenu(button, false));
    }

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

  submenuToggles.forEach((button) => {
    button.addEventListener("click", () => {
      setSubmenu(button, button.getAttribute("aria-expanded") !== "true");
    });
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 1120px)").matches) {
      setMenu(false);
    }
  });
})();
