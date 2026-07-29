import React, { useEffect, useState, useTransition } from 'react';
import './Home.css';
import { VscThreeBars } from "react-icons/vsc";
import { Loader } from './Loader';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [data, setData] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18", {
          method: 'GET',
          headers: {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
}

        });
        const json = await res.json();
        startTransition(() => {
          setData(json);
        });
      } catch (error) {
        console.error("Failed to fetch chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  if (isPending) return <Loader />;

  const filteredData = data.filter((chapter) =>
    chapter.name_translated.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.chapter_summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.chapter_number.toString().includes(searchTerm)
  );

  return (
    <>
      <section>
        <div className="banner">
          <img
            src="/image.png"
            alt="Gita Banner"
            style={{ position: 'absolute', zIndex: -1, opacity: 0.95 }}
          />
          <div className="content">
            <div style={{ color: 'white', fontWeight: 900, fontSize: '4rem' }}>
              Experience the Gita
            </div>
            <div style={{ color: '#fedf89', fontWeight: 900, fontSize: '4rem' }}>
              Anywhere, Anytime
            </div>
            <button
              type="button"
              className="btn btn-light"
              style={{ height: '50px', width: '100px' }}
            >
              Read now
            </button>
          </div>
        </div>
      </section>

      <div className="back container-fluid"></div>

      <div className="back2-box container" style={{ backgroundColor: 'white', height: '200px' }}>
        <h4 style={{ color: 'orangered' }}>Verse of the day</h4>
        <p style={{ color: 'grey', fontSize: '1.25rem' }}>
          With the senses, mind and intellect ever controlled, having liberation as
          their supreme goal, free from desire, fear, and anger, the sage is truly liberated forever.
        </p>
        <div style={{ cursor: 'pointer', fontWeight: 700 }}>SEE MORE</div>
      </div>

      <div className="fill-data container-fluid">
        <h1>
          Have the Shloka of the Day delivered to your <br /> inbox each morning
        </h1>
        <div className="input-detail">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Your Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
          />
          <button type="button" className="btn btn-warning">
            Subscribe
          </button>
        </div>
      </div>


      <div className="container my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search chapters by name, summary, or number..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row container mt-5 " style={{margin:"auto"}}>
        {filteredData.map((chapter) => (
          <div key={chapter.id} className="col-md-6 col-sm-12 mb-4">
            <NavLink style={{textDecoration:"none", color:"inherit"}} to={`chapter/${chapter.chapter_number}`}>
              <div className="card-body border p-3 rounded shadow-sm">
                <h6 className="card-title">
                  Chapter {chapter.chapter_number}
                </h6>
                <h5 className="title pt-2" style={{ fontWeight: 600 }}>
                  {chapter.name_translated}
                </h5>
                <p className="card-text">
                  {chapter.chapter_summary?.length > 250
                    ? chapter.chapter_summary.slice(0, 250) + '...'
                    : chapter.chapter_summary || "No summary available"}
                </p>
                <div>
                  <VscThreeBars />
                  <span className="ms-2">{chapter.verses_count} Verses</span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
