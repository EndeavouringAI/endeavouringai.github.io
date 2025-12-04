var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

function injectEmail(id, user, domain, displayText, addIcon = false) {
  const el = document.getElementById(id);
  if (!el) return;
  const email = `${user}@${domain}`;
  el.setAttribute("href", `mailto:${email}`);
  el.setAttribute("rel", "noopener");
  el.setAttribute("target", "_blank");
  if (addIcon) {
    el.innerHTML = `<img src="images/social/email.svg" title="Email" alt="Email" loading="lazy">`;
  } else {
    el.textContent = displayText || email;
  }
}
