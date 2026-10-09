const notice = document.querySelector('#development-notice');
const dismissNotice = document.querySelector('.notice-close');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const currentYear = document.querySelector('#current-year');

dismissNotice.addEventListener('click', () => {
  notice.classList.add('is-dismissed');
  notice.setAttribute('aria-hidden', 'true');
});

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

currentYear.textContent = String(new Date().getFullYear());
