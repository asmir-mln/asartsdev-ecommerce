import React, { useState, useEffect } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import CVDocument from './CVDocument';
import { cvData } from '../data/cvData';
import './CV.css';

const CV = () => {
  const [isClient, setIsClient] = useState(false);
  const [showViewer, setShowViewer] = useState(false);

  // PDFViewer requires browser environment
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { name, title, brand, contact, skills, languages } = cvData;

  const StarDisplay = ({ level, max = 5 }) => (
    <span className="cv-stars" aria-label={`${level} sur ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < level ? 'cv-star filled' : 'cv-star'}>★</span>
      ))}
    </span>
  );

  return (
    <section className="cv-section">
      <div className="cv-header">
        {/* Logo AsArt'sDev */}
        <div className="cv-logo" aria-label="Logo AsArt'sDev">
          <svg viewBox="0 0 52 52" width="64" height="64">
            <circle cx="26" cy="26" r="26" fill="#764ba2" />
            <circle cx="26" cy="26" r="22" fill="#667eea" />
            <path
              d="M26 10 L38 38 H33 L29.5 29 H22.5 L19 38 H14 Z M24 24 H28 L26 18 Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="cv-header-text">
          <h2 className="cv-name">{name}</h2>
          <p className="cv-title">{title}</p>
          <p className="cv-brand">{brand}</p>
        </div>
      </div>

      <div className="cv-body">
        {/* Sidebar */}
        <aside className="cv-sidebar">
          <div className="cv-block">
            <h3 className="cv-block-title">Contact</h3>
            <ul className="cv-contact-list">
              <li>
                <span className="cv-contact-label">Email</span>
                <a href={`mailto:${contact.email}`} className="cv-link">{contact.email}</a>
              </li>
              <li>
                <span className="cv-contact-label">Tél</span>
                <span>{contact.phone}</span>
              </li>
              <li>
                <span className="cv-contact-label">Lieu</span>
                <span>{contact.location}</span>
              </li>
              <li>
                <span className="cv-contact-label">Web</span>
                <a href={contact.website} target="_blank" rel="noreferrer" className="cv-link">
                  {contact.website.replace('https://', '')}
                </a>
              </li>
              <li>
                <span className="cv-contact-label">GitHub</span>
                <a href={contact.github} target="_blank" rel="noreferrer" className="cv-link">
                  {contact.github.replace('https://', '')}
                </a>
              </li>
              <li>
                <span className="cv-contact-label">LinkedIn</span>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="cv-link">
                  linkedin.com/in/asmir-milianni
                </a>
              </li>
            </ul>
          </div>

          <div className="cv-block">
            <h3 className="cv-block-title">Compétences</h3>
            <ul className="cv-skills-list">
              {skills.map((skill) => (
                <li key={skill.name} className="cv-skill-row">
                  <span className="cv-skill-name">{skill.name}</span>
                  <StarDisplay level={skill.level} />
                </li>
              ))}
            </ul>
          </div>

          <div className="cv-block">
            <h3 className="cv-block-title">Langues</h3>
            <ul className="cv-skills-list">
              {languages.map((lang) => (
                <li key={lang.name} className="cv-skill-row">
                  <span className="cv-skill-name">{lang.name}</span>
                  <StarDisplay level={lang.level} />
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main */}
        <main className="cv-main">
          <div className="cv-block">
            <h3 className="cv-block-title">Profil</h3>
            <p className="cv-summary">{cvData.summary}</p>
          </div>

          <div className="cv-block">
            <h3 className="cv-block-title">Expérience</h3>
            {cvData.experiences.map((exp) => (
              <div key={exp.title} className="cv-entry">
                <strong className="cv-entry-title">{exp.title}</strong>
                <span className="cv-entry-meta">{exp.company} · {exp.period}</span>
                <p className="cv-entry-desc">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="cv-block">
            <h3 className="cv-block-title">Formation</h3>
            {cvData.education.map((edu) => (
              <div key={edu.degree} className="cv-entry">
                <strong className="cv-entry-title">{edu.degree}</strong>
                <span className="cv-entry-meta">{edu.school} · {edu.year}</span>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* PDF Actions */}
      {isClient && (
        <div className="cv-actions">
          <PDFDownloadLink
            document={<CVDocument data={cvData} />}
            fileName={`CV_${name.replace(' ', '_')}.pdf`}
            className="cv-btn cv-btn-download"
          >
            {({ loading }) => loading ? '⏳ Génération…' : '⬇️ Télécharger le CV (PDF)'}
          </PDFDownloadLink>

          <button
            className="cv-btn cv-btn-preview"
            onClick={() => setShowViewer((v) => !v)}
          >
            {showViewer ? '🙈 Masquer l\'aperçu' : '👁️ Aperçu PDF'}
          </button>
        </div>
      )}

      {isClient && showViewer && (
        <div className="cv-pdf-viewer">
          <PDFViewer width="100%" height="600" showToolbar={true}>
            <CVDocument data={cvData} />
          </PDFViewer>
        </div>
      )}
    </section>
  );
};

export default CV;
