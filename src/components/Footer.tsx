import { profileData } from '../data';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Animated Decorative Lines */}
            <div className="footer__lines">
                <div className="footer__line footer__line--1"></div>
                <div className="footer__line footer__line--2"></div>
                <div className="footer__line footer__line--3"></div>
                <div className="footer__line footer__line--4"></div>
                <div className="footer__line footer__line--5"></div>
            </div>

            {/* Contact Section */}
            <section id="contact" className="footer__contact-section">
                <div className="container">
                    {/* Main Title - Hierarchy */}
                    <div className="footer__header">
                        <span className="footer__tag">/Contacto/</span>
                        <h2 className="footer__title">¿Listo para tu siguiente proyecto?</h2>
                        <p className="footer__subtitle">Hagamos realidad tu visión creativa</p>
                    </div>

                    {/* Contact Grid - Better Hierarchy */}
                    <div className="footer__contact-grid">
                        {/* Primary - Email */}
                        <a
                            href={`mailto:${profileData.email}`}
                            className="footer__contact-card footer__contact-card--primary"
                        >
                            <div className="footer__contact-icon-wrapper">
                                <span className="footer__contact-emoji">✉️</span>
                            </div>
                            <div className="footer__contact-info">
                                <span className="footer__contact-label">Email</span>
                                <span className="footer__contact-value">{profileData.email}</span>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={profileData.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__contact-card footer__contact-card--whatsapp"
                        >
                            <div className="footer__contact-icon-wrapper">
                                <span className="footer__contact-emoji">💬</span>
                            </div>
                            <div className="footer__contact-info">
                                <span className="footer__contact-label">WhatsApp</span>
                                <span className="footer__contact-value">{profileData.phone}</span>
                            </div>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/brelart_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__contact-card"
                        >
                            <div className="footer__contact-icon-wrapper">
                                <span className="footer__contact-emoji">📷</span>
                            </div>
                            <div className="footer__contact-info">
                                <span className="footer__contact-label">Instagram</span>
                                <span className="footer__contact-value">@brelart_</span>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/gabriela-rebeca-alvarado-carri%C3%B3n-597a45377"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__contact-card"
                        >
                            <div className="footer__contact-icon-wrapper">
                                <span className="footer__contact-emoji">💼</span>
                            </div>
                            <div className="footer__contact-info">
                                <span className="footer__contact-label">LinkedIn</span>
                                <span className="footer__contact-value">Gaby Rebeca Alvarado</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Bottom */}
            <div className="footer__bottom-section">
                <div className="container footer__bottom-container">
                    <p className="footer__copyright">
                        © {currentYear} {profileData.name}
                    </p>
                    <p className="footer__credit">
                        Diseñado con ✨ por <span className="gradient-text">{profileData.nickname}</span>
                    </p>
                </div>
            </div>

            {/* Floating Decorations */}
            <div className="footer__sparkle footer__sparkle--1">✦</div>
            <div className="footer__sparkle footer__sparkle--2">★</div>
            <div className="footer__sparkle footer__sparkle--3">✦</div>
        </footer>
    );
};

export default Footer;
