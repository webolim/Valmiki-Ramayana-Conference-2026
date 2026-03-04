document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  // Assumes lucide.min.js is loaded globally
  if (window.lucide) {
    window.lucide.createIcons({ icons: window.lucide.icons });
  } else {
    console.error("Lucide library not loaded");
  }

  // Initialize Lenis Smooth Scroll
  if (window.Lenis) {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureOrientation: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis to anchor links for smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Respect CSS scroll-margin-top if present
          const style = window.getComputedStyle(targetElement);
          const scrollMarginTop = parseInt(style.scrollMarginTop) || 0;
          const offset = scrollMarginTop > 0 ? -scrollMarginTop : 0;
          
          lenis.scrollTo(targetElement, { offset: offset });
          // Also update URL hash without jumping
          history.pushState(null, null, targetId);
        }
      });
    });
    
    // Expose lenis to window for other scripts if needed
    window.lenis = lenis;
  } else {
    console.warn("Lenis library not loaded");
  }
});
