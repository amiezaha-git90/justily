// scroll behaviour
function observeScrollSection(wrapperSelector, targetSelector, animationClass) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target.querySelector(targetSelector);
      console.log(target);
      if (entry.isIntersecting) {
        target.classList.add(animationClass);
      } else {
        target.classList.remove(animationClass);
      }
    });
  });
  observer.observe(document.querySelector(wrapperSelector));
}

// register animation trigger here

observeScrollSection(".hero_wrapper", ".banner-1", "fadein-start-normal");
observeScrollSection(".hero_wrapper", ".banner-2", "fadein-start-fastest");
observeScrollSection(".hero_wrapper", ".banner-3", "fadein-up-fastest");
observeScrollSection(".device_wrapper", ".device_list", "fade-up-animation");
observeScrollSection(".about_wrapper", ".about_div", "fade-up-animation");
