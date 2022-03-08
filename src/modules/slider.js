const sliderFunk = () => {

  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  let dots = document.querySelectorAll('.dot');
  const portfolioDots = document.querySelector('.portfolio-dots');

  let currentSlide = 0;
  let interval;

  for (let i = 0; i < slides.length; i++) {
    let li = document.createElement('li');
    li.classList.add('dot');

    if (i == 0) {
      li.classList.add('dot-active');
    }

    portfolioDots.append(li);

  }

  const prevSlide = (elems, index, strClass) => {
    dots = document.querySelectorAll('.dot');
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    dots = document.querySelectorAll('.dot');
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');
    currentSlide++;

    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, 1000);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  const handleSlider = (e) => {
    e.preventDefault();

    if (!e.target.matches('.portfolio-btn, .dot')) {
      return;
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active');
    prevSlide(dots, currentSlide, 'dot-active');

    if (e.target.matches('#arrow-right')) {
      currentSlide++;

    } else if (e.target.matches('#arrow-left')) {
      currentSlide--;

    } else if (e.target.matches('.dot')) {
      dots.forEach((dot, index) => {
        if (e.target == dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide > slides.length - 1) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, 'portfolio-item-active');
    nextSlide(dots, currentSlide, 'dot-active');
  };

  sliderBlock.addEventListener("mouseenter", function (e) {

    if (e.target.matches('.portfolio-btn, .dot')) {
      stopSlide(interval);
    }

  }, true);

  sliderBlock.addEventListener("mouseleave", function (e) {

    if (e.target.matches('.portfolio-btn, .dot')) {
      startSlide();
    }

  }, true);

  sliderBlock.addEventListener("click", handleSlider);


  startSlide();
};

export default sliderFunk;