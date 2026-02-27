import React from 'react';
import BookDetails from './components/BookDetails';
import BookCarousel from './components/BookCarousel';
import CV from './components/CV';
import { bookData } from './data/bookData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1 className="site-title">📚 AsartsDev E-commerce</h1>
          <p className="site-tagline">Livres Illustrés pour Enfants</p>
        </div>
      </header>

      <main className="App-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2 className="hero-title">✨ Découvrez Notre Histoire Illustrée ✨</h2>
            <p className="hero-description">
              Un récit d'après un souvenir, publié lors de l'écriture d'une autobiographie
            </p>
          </div>
        </section>

        <BookDetails book={bookData} />
        
        <section className="preview-section">
          <h2 className="section-title">📖 Aperçu du Livre - Carrousel Illustré</h2>
          <p className="section-description">
            Parcourez les pages illustrées de notre livre en utilisant les flèches
          </p>
          <BookCarousel pages={bookData.pages} />
        </section>

        <section className="cv-page-section">
          <h2 className="section-title">📄 CV Professionnel – Asmir Milianni</h2>
          <p className="section-description">
            Consultez et téléchargez le CV au format PDF avec compétences, liens cliquables et logo AsArt'sDev
          </p>
          <CV />
        </section>

        <section className="info-section">
          <div className="info-card">
            <div className="info-icon">📝</div>
            <h3>Écrit par l'Auteur</h3>
            <p>Histoire authentique basée sur des souvenirs personnels</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🎨</div>
            <h3>Illustrations Originales</h3>
            <p>Chaque page est magnifiquement illustrée</p>
          </div>
          <div className="info-card">
            <div className="info-icon">🌐</div>
            <h3>Disponible en Ligne</h3>
            <p>Accessible sur internet et en format livre</p>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 AsartsDev E-commerce - Tous droits réservés</p>
        <p>Livre bientôt disponible</p>
      </footer>
    </div>
  );
}

export default App;
