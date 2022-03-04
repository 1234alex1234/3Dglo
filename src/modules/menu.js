const menuFunc = () => {

  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector('menu');
  const menuLinks = menu.querySelectorAll('ul>li>a');
  const closeBtn = document.querySelector('.close-btn');

  const handleMenu = (e) => {
    e.preventDefault();
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener("click", handleMenu);
  closeBtn.addEventListener("click", handleMenu);


  menuLinks.forEach(menuLink => {

    menuLink.addEventListener("click", handleMenu);

    menuLink.addEventListener("click", function (e) {
      e.preventDefault();

      const id = menuLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

};

export default menuFunc;