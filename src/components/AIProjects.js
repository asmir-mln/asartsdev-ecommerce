import React, { useState } from 'react';
import './AIProjects.css';

const AIProjects = ({ projects }) => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleCode = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="ai-projects-section">
      <h2 className="section-title">🤖 Projets IA AsArt'sDev</h2>
      <p className="section-description">
        Extraits de code, explications et objectifs de chaque projet d'intelligence artificielle
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <span className="project-icon">{project.icon}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>

            <div className="project-objective">
              <h4>🎯 Objectif</h4>
              <p>{project.objective}</p>
            </div>

            <div className="project-description">
              <h4>📋 Description</h4>
              <p>{project.description}</p>
            </div>

            <button
              className="toggle-code-button"
              onClick={() => toggleCode(project.id)}
              aria-expanded={expandedId === project.id}
              aria-controls={`code-block-${project.id}`}
            >
              {expandedId === project.id ? '▲ Masquer le code' : '▼ Voir l\'extrait de code'}
            </button>

            {expandedId === project.id && (
              <div
                id={`code-block-${project.id}`}
                className="code-block"
                role="region"
                aria-label={`Extrait de code - ${project.title}`}
              >
                <div className="code-header">
                  <span className="code-language">{project.language}</span>
                </div>
                <pre><code>{project.codeExcerpt}</code></pre>
              </div>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="github-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Voir sur GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIProjects;
