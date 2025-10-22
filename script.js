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
    tl.from('.first .left > *', {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6
    }, "-=0.4"); 

    // Animate the ambulance image on the right
    tl.from('.first .right', {
        opacity: 0,
        scale: 0.5,
        duration: 1
    }, "-=0.8"); 

    // --- Scroll-Triggered Animations ---

    // Animate the headings in the "Why Choose Us" section
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

    // Animate the feature boxes
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

    // Animate the gallery images with a bouncy "back.out" ease
    gsap.from('.imgcont img', {
        scrollTrigger: {
            trigger: '.imgcont',
            start: 'top 85%',
            toggleActions: 'restart reverse restart reverse' 
        },
        //  THE STRAY 'S' HAS BEEN REMOVED FROM HERE
        opacity: 0,
        scale: 0.7,
        stagger: 0.15,
        duration: 0.6,
        ease: 'back.out(1.7)'
    });

    // ===============================================
    // == NEWLY ADDED ANIMATION FOR SERVICES SECTION ==
    // ===============================================
    gsap.from('.services .serviceBox', {
        scrollTrigger: {
            trigger: '.services', // The container for the boxes
            start: 'top 85%', // Start when the container is 85% into view
            toggleActions: 'restart reverse restart reverse'
        },
        opacity: 0,
        scale: 0.8, // Start slightly smaller (like your feature boxes)
        y: 50,      // Start 50px down
        stagger: 0.2, // Animate each box 0.2s after the previous one
        duration: 0.5
    });

});