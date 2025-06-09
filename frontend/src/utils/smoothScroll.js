/**
 * Smoothly scrolls to the specified element
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} [offset=80] - Offset in pixels from the top of the element (useful for fixed headers)
 * @param {number} [duration=800] - Duration of the scroll animation in milliseconds
 */
export const smoothScrollTo = (elementId, offset = 80, duration = 800) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const start = window.pageYOffset;
  const target = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startTime = performance.now();

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutQuad(progress);
    
    window.scrollTo(0, start + (target - start) * easeProgress);
    
    if (progress < 1) {
      window.requestAnimationFrame(animateScroll);
    }
  };

  window.requestAnimationFrame(animateScroll);
};

/**
 * Smooth scroll event handler for navigation links
 * @param {Event} e - The click event
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} [offset=80] - Offset in pixels from the top of the element
 */
export const handleSmoothScroll = (e, elementId, offset = 80) => {
  e.preventDefault();
  smoothScrollTo(elementId, offset);
  
  // Update URL without page reload
  if (window.history.pushState) {
    window.history.pushState(null, null, `#${elementId}`);
  } else {
    window.location.hash = `#${elementId}`;
  }
};
