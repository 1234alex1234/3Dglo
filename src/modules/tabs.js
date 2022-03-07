const tabsFunc = () => {
  const tabPanel = document.querySelector('.service-header');
  const tabs = document.querySelectorAll('.service-header-tab');
  const tabContent = document.querySelectorAll('.service-tab');

  const handleTabs = (e) => {

    if (e.target.closest('.service-header')) {
      tabs.forEach((tab, index) => {

        const tabBtn = e.target.closest('.service-header-tab');

        if (tab == tabBtn) {
          tab.classList.add('active');
          tabContent[index].classList.remove('d-none');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.add('d-none');
        }


      });
    }
  };



  tabPanel.addEventListener("click", handleTabs);
};

export default tabsFunc;