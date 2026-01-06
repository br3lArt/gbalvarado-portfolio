import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#cv' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container container">
                <a href="#hero" className="navbar__logo" onClick={() => scrollToSection('#hero')}>
                    <span className="navbar__logo-text">Brelart</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={`navbar__mobile-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Menu */}
                <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="navbar__mobile-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="navbar__mobile-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
