import { profileData } from '../data';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero" className="hero">
            {/* Animated Decorative Lines */}
            <div className="hero__lines">
                <div className="hero__line hero__line--1"></div>
                <div className="hero__line hero__line--2"></div>
                <div className="hero__line hero__line--3"></div>
            </div>

            {/* Main Content */}
            <div className="hero__content">
                {/* Simple Header with Name */}
                <div className="hero__header">
                    <span className="hero__brand">{profileData.nickname}</span>
                    <nav className="hero__nav">
                        <a href="#hero" className="hero__nav-link">Inicio</a>
                        <a href="#cv" className="hero__nav-link">Sobre Mí</a>
                        <a href="#gallery" className="hero__nav-link">Galería</a>
                        <a href="#contact" className="hero__nav-link">Contacto</a>
                    </nav>
                </div>

                {/* Title Section */}
                <div className="hero__title-section">
                    <span className="hero__year">/2026/</span>
                    <h1 className="hero__title">PORTAFOLIO</h1>
                </div>

                {/* Hero Banner - Animated Desk Illustration */}
                <div className="hero__banner">
                    <div className="hero__banner-container">
                        {/* Main Image */}
                        <img
                            src="/hero-desk.jpg"
                            alt="Brelart - Ilustradora en su escritorio"
                            className="hero__banner-image"
                        />

                        {/* Animated Floating Elements */}
                        <div className="hero__float hero__float--postit1">📝</div>
                        <div className="hero__float hero__float--postit2">✏️</div>
                        <div className="hero__float hero__float--pencil">🖊️</div>
                        <div className="hero__float hero__float--paper">📄</div>
                        <div className="hero__float hero__float--star1">✦</div>
                        <div className="hero__float hero__float--star2">★</div>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="hero__welcome">
                    <span className="hero__welcome-text">/BIENVENIDOS/</span>
                </div>

                {/* Bottom Info - Only email */}
                <footer className="hero__footer">
                    <a href={`mailto:${profileData.email}`} className="hero__link">
                        {profileData.email}
                    </a>
                </footer>
            </div>

            {/* Floating 3D Program Icons */}
            <div className="hero__floating-elements">
                <div className="hero__cube hero__cube--ai">
                    <span>Ai</span>
                </div>
                <div className="hero__cube hero__cube--ps">
                    <span>Ps</span>
                </div>
                <div className="hero__cube hero__cube--pr">
                    <span>Pr</span>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="hero__background"></div>
        </section>
    );
};

export default HeroSection;
