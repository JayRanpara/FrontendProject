import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from './Loader';
import "./Chapters.css"

export const Chapters = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isPending, startTransition] = useTransition();
  const [verses, setVerses] = useState([]); 
  const [loadingVerses, setLoadingVerses] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const res = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`, {
          method: 'GET',
          headers: {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
}


        });
        const json = await res.json();
        startTransition(() => setData(json));
      } catch (error) {
        console.error("Failed to fetch chapters:", error);
      }
    };

    fetchChapters();
  }, [id]);

  useEffect(() => {
    const fetchVerses = async () => {
      setLoadingVerses(true);
      try {
        const res = await fetch(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/verses/`, {
          method: "GET",
          headers: {
  'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST
}


        });
        const json = await res.json();
        setVerses(json); 
      } catch (err) {
        console.error("Failed to fetch verses:", err);
      } finally {
        setLoadingVerses(false);
      }
    };

    fetchVerses();
  }, [id]);

  if (isPending || loadingVerses) return <Loader />;

  const filteredVerses = verses
    .filter((verse) =>
      searchTerm === "" || verse.verse_number.toString() === searchTerm
    )
    .sort((a, b) => sortAsc 
      ? a.verse_number - b.verse_number 
      : b.verse_number - a.verse_number
    );

  return (
    <>
      <section
        style={{
          textAlign: 'center',
          borderBottom: '2px solid rgb(215, 212, 212)',
          paddingBottom: '1rem',
        }}
      >
        <div style={{ marginBottom: '10px', color: 'orange' }}>
          Chapter {data?.chapter_number}
        </div>
        <h1 style={{ marginBottom: '10px', color:"#FFCC80"}}>{data?.name_translated}</h1>
        <p
          className="container"
          style={{
            fontSize: '1rem',
            lineHeight: '2rem',
            margin: '0 auto',
            maxWidth: '800px'
          }}
        >
          {data?.chapter_summary}
        </p>
      </section>

      <section className="container" style={{ marginTop: '20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '2px solid rgb(215, 212, 212)',
          }}
        >
          <h3>{data?.verses_count} verses</h3>
          <div className="search-bar" style={{ width: '500px' }}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Go To Verse (e.g. 5)"
                aria-label="Go To Verse"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => setSortAsc(!sortAsc)}
              >
                <i className="fa-solid fa-sort"></i> {sortAsc ? "Asc" : "Desc"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {filteredVerses.map((verse) => (
        <section key={verse.id} style={{marginBottom:"10px"}} className="hovered">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection:"row"}}>
            <h4 style={{ width: '200px', color: 'orange' }}>
              VERSE {verse.verse_number}
            </h4>
            <p style={{width:"700px"}}>
              {verse.translations.find(t => t.language === "english")?.description || "No translation available"}
            </p>
          </div>
        </section>
      ))}
    </>
  )
}
