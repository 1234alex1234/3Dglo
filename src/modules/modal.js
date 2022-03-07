const modalFunc = () => {

  const modal = document.querySelector('.popup');
  const popupClose = modal.querySelector('.popup-close');
  const popupBtns = document.querySelectorAll('.popup-btn');
  const popupContent = modal.querySelector('.popup-content');

  let count = 0;
  let idInterval;

  const popupAnimation = () => {
    const documentWidth = document.documentElement.clientWidth;
    const popupContentWidth = popupContent.clientWidth;

    count += 5;
    idInterval = requestAnimationFrame(popupAnimation);

    if (count < ((documentWidth / 2) - (popupContentWidth / 2)) / 5) {
      popupContent.style.left = count * 5 + 'px';
    } else {
      cancelAnimationFrame(idInterval);
      count = 0;
    }
  };

  popupBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = 'block';
      popupAnimation();
    });
  });

  popupClose.addEventListener("click", () => {
    modal.style.display = 'none';
  });
};

export default modalFunc;