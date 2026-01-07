import { profileData } from '../data';
import './CVSection.css';

const CVSection = () => {
    return (
        <section id="cv" className="cv">
            {/* Section Header */}
            <div className="cv__header">
                <span className="cv__tag">/Sobre Mí/</span>
                <h2 className="cv__title">
                    <span className="cv__title-outline">CONOCE A</span>
                    <span className="cv__title-filled">{profileData.nickname}</span>
                </h2>
            </div>

            <div className="cv__container">
                {/* Left Column - Bio & Profile */}
                <div className="cv__column cv__column--left">
                    {/* Profile Card */}
                    <div className="cv__profile-card">
                        <div className="cv__profile-image-wrapper">
                            <img
                                src={profileData.profileImage}
                                alt={profileData.name}
                                className="cv__profile-image"
                            />
                        </div>
                        <div className="cv__profile-info">
                            <h3 className="cv__profile-name">{profileData.name}</h3>
                            <span className="cv__profile-nickname">@brelart_</span>
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="cv__bio-card">
                        <span className="cv__card-label">/Hola, soy.../</span>
                        <p className="cv__bio-text">{profileData.bio}</p>
                    </div>

                    {/* Languages */}
                    <div className="cv__languages-card">
                        <span className="cv__card-label">/Idiomas/</span>
                        <div className="cv__languages-list">
                            {profileData.languages.map((lang, index) => (
                                <div key={index} className="cv__language-item">
                                    <span className="cv__language-name">{lang.name}</span>
                                    <span className="cv__language-level">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Details */}
                <div className="cv__column cv__column--right">
                    {/* Experience */}
                    <div className="cv__experience-card">
                        <span className="cv__card-label">/Experiencia/</span>
                        <div className="cv__experience-list">
                            {profileData.experience.map((exp, index) => (
                                <div key={index} className="cv__experience-item">
                                    <h4 className="cv__exp-title">{exp.title}</h4>
                                    {exp.company && <span className="cv__exp-company">{exp.company}</span>}
                                    <span className="cv__exp-period">{exp.period}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="cv__education-card">
                        <span className="cv__card-label">/Educación/</span>
                        <div className="cv__education-list">
                            {profileData.education.map((edu, index) => (
                                <div key={index} className="cv__education-item">
                                    <h4 className="cv__edu-degree">{edu.degree}</h4>
                                    <span className="cv__edu-institution">{edu.institution}</span>
                                    <span className="cv__edu-period">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="cv__skills-card">
                        <span className="cv__card-label">/Habilidades/</span>
                        <div className="cv__skills-grid">
                            {profileData.skills.map((skill, index) => (
                                <div key={index} className="cv__skill-tag">
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Programs - With Original Colors */}
                    <div className="cv__programs-card">
                        <span className="cv__card-label">/Programas/</span>
                        <div className="cv__programs-grid">
                            {profileData.programs.map((program, index) => (
                                <div
                                    key={index}
                                    className={`cv__program-icon cv__program-icon--${program.icon?.toLowerCase() ?? ''}`}
                                    title={program.name}
                                >
                                    <span>{program.icon ?? ''}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="cv__decoration cv__decoration--1">✦</div>
            <div className="cv__decoration cv__decoration--2">★</div>
        </section>
    );
};

export default CVSection;
