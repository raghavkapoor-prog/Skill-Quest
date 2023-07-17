const toggle_icon = document.querySelector('.hamburger-icon')
const nav_mobile = document.querySelector('.navbar__options--mobile')

toggle_icon.addEventListener('click', () => {
  const computedStyle = window.getComputedStyle(nav_mobile)
  if (computedStyle.display === 'none') {
    nav_mobile.style.display = 'block'
  } else if (computedStyle.display === 'block') {
    nav_mobile.style.display = 'none'
  }
})

function vanish () {
  const computedStyle_1 = window.getComputedStyle(toggle_icon)
  // const computedStyle_2 = window.getComputedStyle(nav_mobile)
  if (computedStyle_1.display === 'none') {
    // computedStyle_2.display = 'block'
    // console.log(computedStyle_2.display);
    nav_mobile.style.display = 'block'
  }
}

vanish()

window.addEventListener('resize', vanish)

// ----------------------------------------------------------------------
// 🌟 Slider Feature of Avatar
const btns = document.querySelectorAll('.arrow-btn');
const container = document.querySelector('.Avatar__Product-container');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const container_style = window.getComputedStyle(container);
    let slide_value = parseInt(container_style.getPropertyValue('--slide-value'));

    // Limit 0 to 5
    if (btn.classList.contains('left-btn')) {
      slide_value = Math.max(slide_value - 1, 0);
    } else if (btn.classList.contains('right-btn')) {
      slide_value = Math.min(slide_value + 1, 5);
    }

    container.style.setProperty('--slide-value', slide_value);

  });
});


// --------------------------------------

// 🌟 Avatar Update feature



const applyButton = document.querySelector('#applyButton');
const navbarImage = document.querySelector('#navbarImage');



applyButton.addEventListener('click', () => {
  const slide_value = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-value'));

  const imageMap = {
    0: '/Resources/Avatar_1.png',
    1: '/Resources/Avatar_2.png',
    2: '/Resources/Avatar_3.webp',
    3: '/Resources/Avatar_4.png',
    4: '/Resources/Avatar_5.webp',
    5: '/Resources/Avatar_6.png',
  };

  const selectedImage = imageMap[slide_value];

  if (selectedImage) {
    navbarImage.setAttribute('src', selectedImage);
  }
});
