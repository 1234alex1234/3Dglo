const menuFunc = () => {

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector('menu');
  const menuLinks = menu.querySelectorAll('ul>li>a');
  const closeBtn = document.querySelector('.close-btn');
  const serviceLink = document.querySelector('a[href="#service-block"]');

  const handleMenu = (e) => {
    e.preventDefault();
    menu.classList.toggle('active-menu');
  };

  const blockScroll = () => {
    menuLinks.forEach(menuLink => {

      menuLink.addEventListener("click", function (e) {
        e.preventDefault();

        const id = menuLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    serviceLink.addEventListener("click", function (e) {
      e.preventDefault();

      const id = serviceLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  serviceLink.addEventListener("click", blockScroll);

  menuLinks.forEach(menuLink => {

    menuLink.addEventListener("click", handleMenu);
    blockScroll();
  });
};

export default menuFunc;