import React from 'react';
import QuotesData from "../api/Quotes.json";

export const Quotes = () => {
  return (
    <>
      <section>
        <div className="banner">
          <img
            src="./image2.webp"
            alt="Lord Krishna and Arjuna"
            style={{ position: 'absolute', zIndex: -1, opacity: 0.95 }}
          />
          <div className="content">
            <div style={{ color: 'white', fontWeight: 900, fontSize: '4rem' }}>
              Bhagavad Gita Quotes By
            </div>
            <div style={{ color: '#fedf89', fontWeight: 900, fontSize: '4rem' }}>
              Lord Krishna
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid my-5">
        <div id="quotesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {QuotesData.map((quote, index) => (
              <div
                key={quote.id || index}
                className={`carousel-item ${index === 0 ? 'active' : ''}` }
              >
                <div className="quote-card p-4 text-center">
                  <h4 className="quote-number" style={{color:"orange"}}>Quote {quote.id}</h4>
                  <p className="lead container">{quote.quote}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#quotesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon bg-dark"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#quotesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon bg-dark"></span>
          </button>
        </div>
      </div>
    </>
  );
};