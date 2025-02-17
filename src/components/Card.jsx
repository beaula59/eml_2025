"use client";
import React from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import '../app/card.css'; // Your custom CSS file

const Carousel = () => {
  const [emblaRef, emblaApi] = EmblaCarouselReact();

  const cards = [
    { id: 1, imgSrc: '/eml1.png', title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, imgSrc: 'image2.jpg', title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, imgSrc: 'image3.jpg', title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, imgSrc: 'image4.jpg', title: 'Card 4', description: 'Description for Card 4' },
    // Add more cards as needed
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__viewport">
        <div className="embla__container">
          {cards.map((card) => (
            <div className="embla__slide" key={card.id}>
              <div className="card">
                <img src={card.imgSrc} alt={card.title} className="card__image" />
                <div className="card__info">
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__description">{card.description}</p>
                  <button className="read-more">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
