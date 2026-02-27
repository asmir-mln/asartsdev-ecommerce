import React from 'react';
import './CV.css';

const StarRating = ({ level, max = 5 }) => (
  <span className="star-rating" aria-label={`${level} sur ${max}`}>
    {Array.from({ length: max }, (_, i) => (
      <span key={i} className={i < level ? 'star filled' : 'star empty'}>★</span>
    ))}
  </span>
);

const cvData = {
  name: 'Asmir Milianni',
  title: 'Développeur Web Full-Stack & Auteur-Illustrateur',
  tagline: 'Fondateur de AsArt\'sDev | Créateur de livres illustrés pour enfants',
  contact: {
    email: 'contact@asartsdev.com',
    website: 'https://asartsdev.com',
    github: 'https://github.com/asmir-mln',
    location: 'France',
  },
  about:
    "Passionné par le développement web et la création artistique, je suis le fondateur d'AsArt'sDev, une plateforme dédiée aux livres illustrés pour enfants. Je conçois des expériences numériques modernes tout en écrivant et illustrant des histoires qui captivent les jeunes lecteurs.",
  skills: [
    { name: 'JavaScript (ES6+)', level: 5 },
    { name: 'React.js', level: 5 },
    { name: 'HTML5 / CSS3', level: 5 },
    { name: 'Node.js', level: 4 },
    { name: 'Git / GitHub', level: 4 },
    { name: 'Responsive Design', level: 5 },
    { name: 'UI/UX Design', level: 4 },
    { name: 'Illustration Numérique', level: 4 },
  ],
  languages: [
    { name: 'Français', level: 5 },
    { name: 'Anglais', level: 4 },
  ],
  experience: [
    {
      title: 'Fondateur & Développeur',
      company: "AsArt'sDev",
      period: '2023 – Présent',
      description:
        "Création et développement d'une plateforme e-commerce pour livres illustrés pour enfants. Conception du site React, intégration d'un carrousel interactif, gestion des données produits.",
    },
    {
      title: 'Développeur Web Full-Stack',
      company: 'Projets Freelance',
      period: '2021 – Présent',
      description:
        'Développement d\'applications web modernes avec React et Node.js. Création d\'interfaces utilisateur responsives et accessibles.',
    },
    {
      title: 'Auteur-Illustrateur',
      company: 'Publication Indépendante',
      period: '2022 – Présent',
      description:
        'Écriture et illustration de "Souvenirs d\'Enfance", un roman illustré publié lors de l\'écriture d\'une autobiographie. Disponible prochainement en livre et sur internet.',
    },
  ],
  education: [
    {
      degree: 'Formation Développement Web',
      school: 'Formation en ligne',
      period: '2020 – 2021',
      details: 'JavaScript, React, Node.js, bases de données',
    },
  ],
};

const CV = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-wrapper">
      <div className="cv-actions no-print">
        <button className="cv-btn-back" onClick={onBack}>
          ← Retour au site
        </button>
        <button className="cv-btn-download" onClick={handlePrint}>
          ⬇ Télécharger en PDF
        </button>
      </div>

      <div className="cv-document" id="cv-document">
        {/* Header */}
        <header className="cv-header">
          <div className="cv-logo">
            <span className="cv-logo-icon">🎨</span>
            <span className="cv-logo-text">AsArt'sDev</span>
          </div>
          <div className="cv-identity">
            <h1 className="cv-name">{cvData.name}</h1>
            <h2 className="cv-title">{cvData.title}</h2>
            <p className="cv-tagline">{cvData.tagline}</p>
          </div>
          <div className="cv-contact-header">
            <a href={`mailto:${cvData.contact.email}`} className="cv-contact-link">
              ✉ {cvData.contact.email}
            </a>
            <a href={cvData.contact.website} target="_blank" rel="noopener noreferrer" className="cv-contact-link">
              🌐 asartsdev.com
            </a>
            <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="cv-contact-link">
              💻 github.com/asmir-mln
            </a>
            <span className="cv-contact-link">📍 {cvData.contact.location}</span>
          </div>
        </header>

        <div className="cv-body">
          {/* Left sidebar */}
          <aside className="cv-sidebar">
            <section className="cv-section">
              <h3 className="cv-section-title">Compétences</h3>
              <ul className="cv-skills-list">
                {cvData.skills.map((skill) => (
                  <li key={skill.name} className="cv-skill-item">
                    <span className="cv-skill-name">{skill.name}</span>
                    <StarRating level={skill.level} />
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h3 className="cv-section-title">Langues</h3>
              <ul className="cv-skills-list">
                {cvData.languages.map((lang) => (
                  <li key={lang.name} className="cv-skill-item">
                    <span className="cv-skill-name">{lang.name}</span>
                    <StarRating level={lang.level} />
                  </li>
                ))}
              </ul>
            </section>

            <section className="cv-section">
              <h3 className="cv-section-title">Contact</h3>
              <div className="cv-contact-list">
                <a href={`mailto:${cvData.contact.email}`} className="cv-contact-item">
                  <span className="cv-contact-icon">✉</span>
                  <span>{cvData.contact.email}</span>
                </a>
                <a href={cvData.contact.website} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                  <span className="cv-contact-icon">🌐</span>
                  <span>asartsdev.com</span>
                </a>
                <a href={cvData.contact.github} target="_blank" rel="noopener noreferrer" className="cv-contact-item">
                  <span className="cv-contact-icon">💻</span>
                  <span>github.com/asmir-mln</span>
                </a>
                <span className="cv-contact-item">
                  <span className="cv-contact-icon">📍</span>
                  <span>{cvData.contact.location}</span>
                </span>
              </div>
            </section>
          </aside>

          {/* Main content */}
          <main className="cv-main">
            <section className="cv-section">
              <h3 className="cv-section-title">Profil</h3>
              <p className="cv-about">{cvData.about}</p>
            </section>

            <section className="cv-section">
              <h3 className="cv-section-title">Expérience</h3>
              <div className="cv-timeline">
                {cvData.experience.map((exp, idx) => (
                  <div key={idx} className="cv-timeline-item">
                    <div className="cv-timeline-header">
                      <div>
                        <h4 className="cv-job-title">{exp.title}</h4>
                        <p className="cv-job-company">{exp.company}</p>
                      </div>
                      <span className="cv-job-period">{exp.period}</span>
                    </div>
                    <p className="cv-job-desc">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="cv-section">
              <h3 className="cv-section-title">Formation</h3>
              <div className="cv-timeline">
                {cvData.education.map((edu, idx) => (
                  <div key={idx} className="cv-timeline-item">
                    <div className="cv-timeline-header">
                      <div>
                        <h4 className="cv-job-title">{edu.degree}</h4>
                        <p className="cv-job-company">{edu.school}</p>
                      </div>
                      <span className="cv-job-period">{edu.period}</span>
                    </div>
                    <p className="cv-job-desc">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>

        <footer className="cv-footer">
          <p>© 2024 Asmir Milianni – AsArt'sDev · <a href={cvData.contact.website} target="_blank" rel="noopener noreferrer">{cvData.contact.website}</a></p>
        </footer>
      </div>
    </div>
  );
};

export default CV;
