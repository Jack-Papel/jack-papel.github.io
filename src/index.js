window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.scrollY / window.innerHeight);
  for (const element of document.getElementsByClassName('hero')) {
    const rect = element.getBoundingClientRect();
    element.style.setProperty('--hero-parallax', -rect.top / rect.height);
  }
}, false);

window.addEventListener('load', () => {
  document.querySelectorAll('article').forEach(el => {
    el.addEventListener('click', () => window.open(el.attributes.getNamedItem('href').value));
  });
})