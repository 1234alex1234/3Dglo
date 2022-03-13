import {
  animate
} from './helpers';

const modalFunc = () => {

  const modal = document.querySelector('.popup');
  const popupBtns = document.querySelectorAll('.popup-btn');
  let popupContent = modal.querySelector('.popup-content');

  popupBtns.forEach(btn => {
    const documentWidth = document.documentElement.clientWidth;

    btn.addEventListener("click", () => {
      const popupContentWidth = popupContent.clientWidth;

      modal.style.display = 'block';

      animate({
        duration: 400,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          popupContent.style.left = (documentWidth / 2 - 150) * progress + 'px';
        }
      });
    });
  });

  const handlePopup = (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      e.preventDefault();
      modal.style.display = 'none';
    }
  };

  modal.addEventListener("click", handlePopup);
};

export default modalFunc;