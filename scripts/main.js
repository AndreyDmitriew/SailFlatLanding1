// Back to top button
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('backToTop-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('backToTop-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.backToTop');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
