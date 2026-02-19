import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './BookCarousel.css';

const BookCarousel = ({ pages }) => {
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
        {pages.map((page) => (
          <div key={page.id} className="carousel-page" style={{ backgroundColor: page.color }}>
            <div className="page-illustration">{page.illustration}</div>
            <div className="page-text">
              <p>{page.text}</p>
            </div>
            <div className="page-number">Page {page.id}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BookCarousel;
