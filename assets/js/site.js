(() => {
  const enhanceExternalLinks = () => {
    document.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");

      if (!href || !/^https?:\/\//i.test(href)) {
        return;
      }

      const destination = new URL(href, document.baseURI);

      if (destination.origin === window.location.origin) {
        return;
      }

      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.classList.add("external-link");

      if (link.querySelector(".external-link__description")) {
        return;
      }

      const indicator = document.createElement("span");
      indicator.className = "external-link__indicator";
      indicator.setAttribute("aria-hidden", "true");
      indicator.textContent = "\u2197";

      let indicatorTarget = link;

      if (link.matches(".document-card")) {
        indicatorTarget = link.querySelector(".document-card__action");
      } else if (link.matches(".action-card, .mini-card")) {
        indicatorTarget = link.querySelector("h2, h3, strong");
      }

      indicatorTarget.append(indicator);

      const description = document.createElement("span");
      description.className = "visually-hidden external-link__description";
      description.textContent = " (opens in a new tab)";
      link.append(description);
    });
  };

  enhanceExternalLinks();
})();

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
      const wasOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenu(false);

      if (wasOpen) {
        toggle.focus();
      }
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
