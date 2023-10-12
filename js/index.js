const sidebar = document.querySelector('#sidebar');
const menuIcon = document.querySelector('#menuIcon');

const openSidebar = () => {
  sidebar.classList.remove("hidden");
}

const closeSidebar = () => {
  sidebar.classList.add("hidden");
}

menuIcon.addEventListener('click', () => {
  openSidebar();
});

if (window.innerWidth < 900) {
  document.addEventListener('click', (event) => {
    if (sidebar && sidebar.contains(event.target)) {
      return
    }

    if (event.target !== menuIcon) {
      closeSidebar();
    }
  });
}

const mobileSliderContainer = document.getElementById('slider');
const mobileSlider = mobileSliderContainer.querySelector('.slider');

const desktopSliderContainer = document.getElementById('desktop-slider');
const desktopSlider = desktopSliderContainer.querySelector('.slider');

mobileSliderContainer.addEventListener('click', () => {
  mobileSlider.classList.toggle('dark-mode-active');
});

desktopSliderContainer.addEventListener('click', () => {
  console.log('hi')
  desktopSlider.classList.toggle('dark-mode-active');
});