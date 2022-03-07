const menuFunc = () => {

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector('menu');
  const menuLinks = menu.querySelectorAll('ul>li>a');
  const serviceLink = document.querySelector('a[href="#service-block"]');

  function blockScroll(e) {

    const id = this.getAttribute('href');

    if (id == '#service-block') {
      e.preventDefault();
    }

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  const toggleMenu = (e) => {
    e.preventDefault();

    if (e.target.closest('.menu')) {
      menu.classList.toggle('active-menu');
    }

    if (e.target.classList.contains('close-btn') || (!e.target.closest('.menu'))) {
      menu.classList.remove('active-menu');
    }
  };

  document.addEventListener("click", toggleMenu);

  serviceLink.addEventListener("click", blockScroll);

  menuLinks.forEach(menuLink => {

    menuLink.addEventListener("click", blockScroll);

  });
};

export default menuFunc;