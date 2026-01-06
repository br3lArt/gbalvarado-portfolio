import { profileData } from '../data';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__container container">
                {/* Header */}
                <div className="hero__header">
                    <h1 className="hero__title animate-fade-in-up">
                        PORTFOLIO <span className="hero__year">2026</span>
                    </h1>
                    <p className="hero__subtitle animate-fade-in-up delay-200">
                        Illustration / Graphic Design / Multimedia
                    </p>
                </div>

                {/* Featured Image */}
                <div className="hero__image-container animate-fade-in-up delay-300">
                    <div className="hero__image-frame">
                        <div className="hero__image-placeholder">
                            <span className="hero__image-text">Featured Artwork</span>
                            <p className="hero__image-subtext">Your best work goes here</p>
                        </div>
                    </div>
                    <div className="hero__image-decoration hero__image-decoration--1"></div>
                    <div className="hero__image-decoration hero__image-decoration--2"></div>
                </div>

                {/* Contact */}
                <div className="hero__contact animate-fade-in-up delay-400">
                    <a href={`mailto:${profileData.email}`} className="hero__email">
                        {profileData.email}
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="hero__scroll animate-fade-in delay-500">
                    <div className="hero__scroll-line"></div>
                    <span className="hero__scroll-text">Scroll</span>
                </div>
            </div>

            {/* Background Elements */}
            <div className="hero__bg-shape hero__bg-shape--1"></div>
            <div className="hero__bg-shape hero__bg-shape--2"></div>
            <div className="hero__bg-shape hero__bg-shape--3"></div>
        </section>
    );
};

export default HeroSection;
