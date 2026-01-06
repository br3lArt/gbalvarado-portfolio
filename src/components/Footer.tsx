import { profileData } from '../data';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Contact Section */}
            <section id="contact" className="footer__contact-section">
                <div className="container">
                    <h2 className="footer__title">Let's Work Together</h2>
                    <p className="footer__text">
                        Have a project in mind? I'd love to hear from you.
                    </p>
                    <a href={`mailto:${profileData.email}`} className="btn btn-primary footer__cta">
                        Get In Touch
                    </a>
                    <p className="footer__email">{profileData.email}</p>
                </div>
            </section>

            {/* Footer Bottom */}
            <div className="footer__bottom-section">
                <div className="container footer__bottom-container">
                    {/* Social Links */}
                    <div className="footer__social">
                        {profileData.socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer__social-link"
                                aria-label={social.name}
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="footer__info">
                        <p className="footer__copyright">
                            © {currentYear} {profileData.name}. All rights reserved.
                        </p>
                        <p className="footer__credit">
                            Designed with ✨ by <span className="gradient-text">{profileData.nickname}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer__decoration footer__decoration--1"></div>
            <div className="footer__decoration footer__decoration--2"></div>
        </footer>
    );
};

export default Footer;
