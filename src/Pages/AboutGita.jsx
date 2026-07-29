import React, { useEffect, useState } from 'react';
import "./AboutGita.css"


export const AboutGita = () => {
  
  return (
    <>
      <section>
        <div className="banner">
          <img
            src="/image2.webp"
            alt="Arjuna and Krishna"
            style={{ position: 'absolute', zIndex: -1, opacity: 0.95 }}
          />
          <div className="content">
            <div style={{ color: 'white', fontWeight: 900, fontSize: '4rem' }}>
              Bhagavad Gita Quotes By
            </div>
            <div style={{ color: '#fedf89', fontWeight: 900, fontSize: '4rem' }}>
              Lord Krishna
            </div>
            {/* <button type="button" className="btn btn-light" style={{ height: '50px', width: '100px' }}>Read now</button> */}
          </div>
        </div>
      </section>

      <section className="container section-write">
        <p>
          Bhagavad Gita, also known as the Gita — "The Song of The Lord" — is a practical guide to one's life that helps reorganize priorities, achieve inner peace, and approach the Supreme Lord (the Ultimate Reality). It is a 700-verse Sanskrit text comprising chapters 23 through 40 in the Bhishma-Parva section of the Mahabharata.
        </p>
        <p style={{ textIndent: '100px' }}>
          The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior, and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready, Arjuna becomes overwhelmed with grief and compassion, fearing the loss of his kin and the moral consequences of battle. He surrenders to Krishna, seeking wisdom. What follows is a profound discourse on life, duty, and the nature of reality. Across 18 chapters, the Gita explores various yogic paths—Jnana, Bhakti, Karma, and Raja—while revealing the distinction between the Self and the material body, culminating in the revelation of life’s ultimate purpose.
        </p>
      </section>
    </>
  );
};