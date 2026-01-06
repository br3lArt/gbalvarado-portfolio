import { profileData } from '../data';
import './CVSection.css';

const CVSection = () => {
    return (
        <section id="cv" className="cv section">
            <div className="cv__container container">
                {/* Section Header */}
                <h2 className="section-title">About Me</h2>

                <div className="cv__grid">
                    {/* Left Column */}
                    <div className="cv__left">
                        {/* Bio */}
                        <div className="cv__card cv__bio">
                            <h3 className="cv__card-title">Hello, I'm</h3>
                            <h4 className="cv__name gradient-text">{profileData.name}</h4>
                            <p className="cv__bio-text">{profileData.bio}</p>
                        </div>

                        {/* Experience */}
                        <div className="cv__card">
                            <h3 className="cv__card-title">Experience</h3>
                            <ul className="cv__list">
                                {profileData.experience.map((exp, index) => (
                                    <li key={index} className="cv__list-item">
                                        <span className="cv__item-title">{exp.title}</span>
                                        {exp.company && <span className="cv__item-subtitle">{exp.company}</span>}
                                        <span className="cv__item-period">{exp.period}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Languages */}
                        <div className="cv__card">
                            <h3 className="cv__card-title">Languages</h3>
                            <ul className="cv__list cv__list--inline">
                                {profileData.languages.map((lang, index) => (
                                    <li key={index} className="cv__lang-item">
                                        <span className="cv__lang-name">{lang.name}</span>
                                        <span className="cv__lang-level">{lang.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="cv__right">
                        {/* Profile Card */}
                        <div className="cv__card cv__profile-card">
                            <div className="cv__profile-image">
                                <div className="cv__profile-placeholder">
                                    <span className="cv__profile-icon">👩‍🎨</span>
                                </div>
                            </div>
                            <div className="cv__profile-info">
                                <h4 className="cv__profile-name">{profileData.name}</h4>
                                <span className="cv__profile-nickname">@{profileData.nickname}</span>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="cv__card">
                            <h3 className="cv__card-title">Achievements</h3>
                            <ul className="cv__achievements">
                                {profileData.achievements.map((achievement, index) => (
                                    <li key={index} className="cv__achievement-item">
                                        <span className="cv__achievement-icon">✦</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="cv__card">
                            <h3 className="cv__card-title">Education</h3>
                            <ul className="cv__list">
                                {profileData.education.map((edu, index) => (
                                    <li key={index} className="cv__list-item">
                                        <span className="cv__item-title">{edu.degree}</span>
                                        <span className="cv__item-subtitle">{edu.institution}</span>
                                        <span className="cv__item-period">{edu.period}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="cv__card">
                            <h3 className="cv__card-title">Skills</h3>
                            <div className="cv__skills">
                                {profileData.skills.map((skill, index) => (
                                    <div key={index} className="cv__skill">
                                        <div className="cv__skill-header">
                                            <span className="cv__skill-name">{skill.name}</span>
                                            <span className="cv__skill-level">{skill.level}%</span>
                                        </div>
                                        <div className="cv__skill-bar">
                                            <div
                                                className="cv__skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programs */}
                        <div className="cv__card">
                            <h3 className="cv__card-title">Programs</h3>
                            <div className="cv__programs">
                                {profileData.programs.map((program, index) => (
                                    <div key={index} className="cv__program" title={program.name}>
                                        <span className="cv__program-icon">{program.icon}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CVSection;
