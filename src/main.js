import './index.css';
import { createIcons, Menu, X, ChevronLeft, ChevronRight, MapPin, CircleCheck, Phone, Mail, Globe, Copy, CheckCircle, QrCode } from 'lucide';

// Initialize Lucide icons
createIcons({
  icons: {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    MapPin,
    CircleCheck,
    Phone,
    Mail,
    Globe,
    Copy,
    CheckCircle,
    QrCode
  }
});

// Expose createIcons to window for dynamic content (like schedule rendering)
window.lucide = { createIcons: () => createIcons({
  icons: {
    Menu,
    X,
    ChevronLeft,
    ChevronRight,
    MapPin,
    CircleCheck,
    Phone,
    Mail,
    Globe,
    Copy,
    CheckCircle,
    QrCode
  }
}) };
