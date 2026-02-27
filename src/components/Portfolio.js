import React from 'react';
import './Portfolio.css';

const Portfolio = ({ sections }) => {
  return (
    <section className="portfolio-section">
      <h2 className="section-title">🗂️ AsArt'sDev Portfolio</h2>
      <p className="section-description">
        Toutes les ressources sont prêtes pour envoi, édition ou consultation.
      </p>
      <div className="portfolio-grid">
        {sections.map((section) => (
          <div
            key={section.id}
            className="portfolio-card"
            style={{ borderTopColor: section.color }}
          >
            <div className="portfolio-icon">{section.icon}</div>
            <h3 className="portfolio-card-title">{section.title}</h3>
            <p className="portfolio-card-description">{section.description}</p>
            <div className="portfolio-card-footer">
              <span className="portfolio-folder">{section.folder}</span>
              <span className="portfolio-status">{section.status}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
