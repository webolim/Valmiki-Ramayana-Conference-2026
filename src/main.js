// Initialize Lucide icons
// Assumes lucide.min.js is loaded globally
if (window.lucide) {
  window.lucide.createIcons({ icons: window.lucide.icons });
} else {
  console.error("Lucide library not loaded");
}
