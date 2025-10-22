document.addEventListener('DOMContentLoaded', function() {
    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Create a timeline for the initial page load animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate the navigation bar from above
    tl.from('nav', {
        y: -50,
        opacity: 0,
        duration: 0.8
    });

    // Animate the main content on the left side
    // The 'stagger' property creates a nice, cascading effect
    tl.from('.first .left > *', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6
    }, "-=0.4"); // Overlap with the previous animation for a smoother flow

    // Animate the ambulance image on the right
    tl.from('.first .right', {
        opacity: 0,
        scale: 0.5,
        duration: 1
    }, "-=0.8"); // Overlap for a more dynamic entrance

    // --- Scroll-Triggered Animations ---
    // These animations only play when the element scrolls into view.

    // Animate the headings in the "Why Choose Us" section
    gsap.from('.second > h2, .second > h1', {
        scrollTrigger: {
            trigger: '.second',
            start: 'top 80%', // Starts when the top of the section is 80% down the viewport
            toggleActions: 'restart reverse restart reverse' // Play on enter, reverse on leave (both directions)
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8
    });

    // Animate the feature boxes
    gsap.from('.details .same', {
        scrollTrigger: {
            trigger: '.details',
            start: 'top 90%',
            toggleActions: 'restart reverse restart reverse' // Play on enter, reverse on leave (both directions)
        },
        opacity: 0,
        scale: 0.8,
        y: 50,
        stagger: 0.2,
        duration: 0.5
    });

    // Animate the gallery images with a bouncy "back.out" ease
    gsap.from('.imgcont img', {
        scrollTrigger: {
            trigger: '.imgcont',
            start: 'top 85%',
            toggleActions: 'restart reverse restart reverse' // Play on enter, reverse on leave (both directions)
        },
        opacity: 0,
        scale: 0.7,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)'
    });
});