document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Animate the navigation bar
  tl.from('nav', {
    y: -50,
    opacity: 0,
    duration: 0.8
  });

  // Animate headings and text only (not buttons)
  tl.from('.first .left h1, .first .left h3, .first .left h5, .first .left p', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.6
  }, "-=0.4");

// Animate buttons safely
tl.fromTo(['#book', '#call'],
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, duration: 0.6, stagger: 0.2 },
  "-=0.2"
);

  // Animate the right side (ambulance)
tl.fromTo('.first .right', 
  { opacity: 0, scale: 0.5 },  // start small and invisible
  { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 
  "-=0.8"
);

  // Scroll animations
  gsap.from('.second > h2, .second > h1', {
    scrollTrigger: {
      trigger: '.second',
      start: 'top 80%',
      toggleActions: 'restart reverse restart reverse'
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8
  });

  gsap.from('.details .same', {
    scrollTrigger: {
      trigger: '.details',
      start: 'top 90%',
      toggleActions: 'restart reverse restart reverse'
    },
    opacity: 0,
    scale: 0.8,
    y: 50,
    stagger: 0.2,
    duration: 0.5
  });

  gsap.from('.imgcont img', {
    scrollTrigger: {
      trigger: '.imgcont',
      start: 'top 85%',
      toggleActions: 'restart reverse restart reverse'
    },
    opacity: 0,
    scale: 0.7,
    stagger: 0.15,
    duration: 0.6,
    ease: 'back.out(1.7)'
  });

  gsap.from('.services .serviceBox', {
    scrollTrigger: {
      trigger: '.services',
      start: 'top 85%',
      toggleActions: 'restart reverse restart reverse'
    },
    opacity: 0,
    scale: 0.8,
    y: 50,
    stagger: 0.2,
    duration: 0.5
  });
});
