

const swiper_benefits = new Swiper(".swiper_benefits", {
  loop: true,
  slidesPerView: 3.8,
  spaceBetween: 40,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper_portfolio = new Swiper(".swiper_portfolio", {
  freeMode: true,
  loop: true,
  allowTouchMove: true,
  slidesPerView: 3.2,
  spaceBetween: 40,
  speed: 15000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const swiper_portfolio_2 = new Swiper(".swiper_portfolio_2", {
  freeMode: true,
  loop: true,
  allowTouchMove: true,
  slidesPerView: 3.2,
  spaceBetween: 40,
  speed: 15000,
  autoplay: {
    delay: 0,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function changeDevice(device) {
  const laptopContent = document.getElementById("laptopContent");
  const tabletContent = document.getElementById("tabletContent");
  const phoneContent = document.getElementById("phoneContent");
  if (device === "laptop") {
    laptopContent.style.display = "block";
    tabletContent.style.display = "none";
    phoneContent.style.display = "none";
  } else if (device === "tablet") {
    tabletContent.style.display = "block";
    laptopContent.style.display = "none";
    phoneContent.style.display = "none";
  } else if (device == "phone") {
    phoneContent.style.display = "block";
    laptopContent.style.display = "none";
    tabletContent.style.display = "none";
  }
}
function observeScrollSection(wrapperSelector, targetSelector, animationClass) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target.querySelector(targetSelector);
        if (entry.isIntersecting) {
          target.classList.add(animationClass);
        } else {
          target.classList.remove(animationClass);
        }
      });
    });
    observer.observe(document.querySelector(wrapperSelector));
  }
  
  observeScrollSection(".device_wrapper", ".device_list", "fade-up-animation");
  observeScrollSection(".about_wrapper", ".about_div", "fade-up-animation");
  