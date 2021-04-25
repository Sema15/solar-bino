let tl = gsap.timeline({repeatDelay: 1});
let tlAssets = gsap.timeline();
let tlMobApps = gsap.timeline();

gsap.from('.header-nav-bar__logo', {duration: 1, y: 70, autoAlpha: 0})
gsap.from('.header-nav-bar__lang-select', {duration: 1, y: 70, autoAlpha: 0})
tl.from(".header-nav-bar__tabs a", {duration: .5, autoAlpha: 0, y: -20, stagger: 1})
    .from(".header-nav-bar__auth", {opacity: 0, y: -50})
    .from(".banner__title", {y: 100, rotateX: 90, opacity: 0})
    .from(".banner__subtitle", {y: 50, opacity: 0})
    .from(".banner__strading-btn", {y: 50, rotateX: 45, opacity: 0, ease: 'bounce.out'})
gsap.from(".banner-benefits__items", {
  scrollTrigger: {
    trigger: ".banner-benefits__items",
    start: "bottom bottom",
  },
  duration: 2,
  rotateX: 90,
  background: '#fff',
});
gsap.from(".banner-benefits-items__item:nth-child(odd)", {
  scrollTrigger: {
    trigger: ".banner-benefits__items",
    start: "bottom bottom",
  },
  duration: 1.5,
  x: -520,
});
gsap.from(".banner-benefits-items__item:nth-child(even)", {
  scrollTrigger: {
    trigger: ".banner-benefits__items",
    start: "bottom bottom",
  },
  duration: 1.5,
  x: 520,
});
gsap.from('.banner-benefits-items__item img', {y: 5, repeat: -1, yoyo: true})
gsap.from(".options", {
  scrollTrigger: {
    trigger: ".options",
    start: "top +=600",
  },
  duration: 1.5,
  y: 220,
  opacity: 0,
});
tlAssets.from('.assets__title', {y: '-100', opacity: 0})
    .from('.assets__inner img', {y: '-100', opacity: 0})
tlMobApps.from('.mob-apps-des__text', {x: '-100%', opacity: 0})
    .from('.mob-apps__des img', {x: '100%', opacity: 0})
ScrollTrigger.create({
  animation: tlAssets,
  trigger: '.assets',
  start: 'center center',
  end: 'bottom',
  scrub: true,
  pin: true
});
ScrollTrigger.create({
  animation: tlMobApps,
  trigger: '.mob-apps',
  start: 'center center',
  end: 'bottom',
  scrub: true,
  pin: true
});

gsap.from(".pers-assist__wrp", {
  scrollTrigger: {
    trigger: ".pers-assist",
    start: "center center",
  },
  duration: 1,
  rotateX: 90,
  opacity: 0
});
