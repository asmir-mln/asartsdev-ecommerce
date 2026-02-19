import React from 'react';
import './BookDetails.css';

const BookDetails = ({ book }) => {
  const handlePreorder = () => {
    alert('Merci pour votre intérêt ! Le livre sera bientôt disponible. Nous vous contacterons dès sa sortie.');
  };

  return (
    <div className="book-details">
      <div className="book-header">
        <h1 className="book-title">{book.title}</h1>
        <h2 className="book-subtitle">{book.subtitle}</h2>
        <p className="book-author">Par {book.author}</p>
      </div>
      
      <div className="book-info">
        <p className="book-description">{book.description}</p>
        
        <div className="book-meta">
          <div className="meta-item">
            <span className="meta-label">Prix:</span>
            <span className="meta-value price">{book.price}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Statut:</span>
            <span className="meta-value status">{book.status}</span>
          </div>
        </div>
        
        <button className="preorder-button" onClick={handlePreorder}>
          Pré-commander
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
