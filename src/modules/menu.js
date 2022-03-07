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

  function blockScroll(e) {

    const id = this.getAttribute('href');

    if (id == '#service-block') {
      e.preventDefault();
    }

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);
  serviceLink.addEventListener("click", blockScroll);

  menuLinks.forEach(menuLink => {

    menuLink.addEventListener("click", handleMenu);
    menuLink.addEventListener("click", blockScroll);

  });
};

export default menuFunc;