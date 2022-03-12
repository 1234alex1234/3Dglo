const menuFunc = () => {

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector('menu');
  const menuLinks = menu.querySelectorAll('ul>li>a');

  const toggleMenu = (e) => {
    if (e.target.closest('.menu')) {
      menu.classList.toggle('active-menu');
    }

    if (e.target.classList.contains('close-btn') || (!e.target.closest('.menu'))) {
      menu.classList.remove('active-menu');
    }

    menuLinks.forEach(function (menuLink) {

      if (e.target == menuLink) {
        e.preventDefault();
        const id = menuLink.getAttribute('href');


        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });

    if (e.target.closest('a[href="#service-block"]')) {
      e.preventDefault();

      const id = e.target.closest('a').getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  document.addEventListener("click", toggleMenu, true);
};

export default menuFunc;