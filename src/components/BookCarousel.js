import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BookCarousel.css';

const BookCarousel = ({ pages }) => {
  const renderPage = (page) => {
    if (page.type === 'cover') {
      return (
        <div key={page.id} className="carousel-page carousel-page--cover" style={{ backgroundColor: page.color }}>
          <div className="page-logo">{page.logo}</div>
          <div className="page-illustration">{page.illustration}</div>
          <div className="cover-title">{page.title}</div>
          <div className="cover-subtitle">{page.subtitle}</div>
          <div className="page-number">Couverture</div>
        </div>
      );
    }

    if (page.type === 'chapter') {
      return (
        <div key={page.id} className="carousel-page carousel-page--chapter" style={{ backgroundColor: page.color }}>
          <div className="page-illustration">{page.illustration}</div>
          <div className="chapter-title">{page.chapterTitle}</div>
          <div className="chapter-subtitle">{page.chapterSubtitle}</div>
          <div className="page-text"><p>{page.text}</p></div>
          <div className="page-number">Page {page.id}</div>
        </div>
      );
    }

    if (page.type === 'double-page') {
      return (
        <div key={page.id} className="carousel-page carousel-page--double" style={{ backgroundColor: page.color }}>
          <div className="double-page-illustration">{page.illustration}</div>
          <div className="double-page-label">{page.illustrationLabel}</div>
          <div className="page-text"><p>{page.text}</p></div>
          <div className="page-number">Page {page.id}</div>
        </div>
      );
    }

    if (page.type === 'thanks') {
      return (
        <div key={page.id} className="carousel-page carousel-page--thanks" style={{ backgroundColor: page.color }}>
          <div className="page-illustration">{page.illustration}</div>
          <div className="page-text thanks-text">
            {page.text.split('\n').map((line, i) => (
              <p key={`thanks-${i}`}>{line}</p>
            ))}
          </div>
          <div className="page-number">Page {page.id}</div>
        </div>
      );
    }

    if (page.type === 'signature') {
      return (
        <div key={page.id} className="carousel-page carousel-page--signature" style={{ backgroundColor: page.color }}>
          <div className="page-logo signature-logo">{page.logo}</div>
          <div className="page-illustration">{page.illustration}</div>
          <div className="page-text signature-text">
            {page.text.split('\n').map((line, i) => (
              <p key={`sig-${i}`}>{line}</p>
            ))}
          </div>
          <div className="page-number">Page {page.id}</div>
        </div>
      );
    }

    return (
      <div key={page.id} className="carousel-page" style={{ backgroundColor: page.color }}>
        <div className="page-illustration">{page.illustration}</div>
        <div className="page-text">
          <p>{page.text}</p>
        </div>
        <div className="page-number">Page {page.id}</div>
      </div>
    );
  };

  return (
    <div className="book-carousel-container">
      <Carousel
        showArrows={true}
        showStatus={true}
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        className="book-carousel"
      >
        {pages.map((page) => renderPage(page))}
      </Carousel>
    </div>
  );
};

export default BookCarousel;
