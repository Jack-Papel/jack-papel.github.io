window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY / window.innerHeight);
  for (const element of document.getElementsByClassName('hero')) {
    const rect = element.getBoundingClientRect();
    element.style.setProperty('--hero-parallax', -rect.top / rect.height);
  }
}, false);
