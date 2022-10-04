const primaryNavigation = document.querySelector(".primary-navigation");
const navigationToggle = document.querySelector(".mobile-nav-toggle");

navigationToggle.addEventListener ('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNavigation.setAttribute('data-visible', true);
        navigationToggle.setAttribute('aria-expanded', true);
    }

    else if (visibility === "true") {
        primaryNavigation.setAttribute('data-visible', false);
        navigationToggle.setAttribute('aria-expanded', false); 
    }
  }
);