import { createIcons, Printer, X } from 'lucide';

// Initialize Lucide icons
createIcons({
  icons: {
    Printer,
    X
  }
});

// Expose to window for inline scripts
window.lucide = { 
  createIcons: () => createIcons({
    icons: {
      Printer,
      X
    }
  }) 
};
