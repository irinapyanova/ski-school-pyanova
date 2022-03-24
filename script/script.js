window.addEventListener('DOMContentLoaded', () => {

  const scrollBtn = document.querySelector('.scroll-btn');

  function scrollToTop() {
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });
  }

  scrollToTop();

});
