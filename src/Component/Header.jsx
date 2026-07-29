import { MdDarkMode, MdLightMode } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import { FaFileAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


export const Header = () => {
  const [theme, setTheme] = useState("light");

  // apply theme to <body>
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);



  // <button className='btn btn-link' onClick={toggleTheme}>
  //   {theme === "light"
  //     ? <MdDarkMode style={{ fontSize: "2rem", marginRight: "5px" }} />
  //     : <MdLightMode style={{ fontSize: "2rem", marginRight: "5px" }} />
  //   }
  // </button>

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid nav-style">
          <NavLink className="navbar-brand" to='/' style={{ fontWeight: 700, fontSize: '2rem' }}>
            Bhagavad Gita
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* chapters dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Chapters
                </a>
                <ul className="dropdown-menu" style={{ width: '300px' }}>
                  {[
                    [1, 10],
                    [2, 11],
                    [3, 12],
                    [4, 13],
                    [5, 14],
                    [6, 15],
                    [7, 16],
                    [8, 17],
                    [9, 18],
                  ].map(([left, right]) => (
                    <div className="row" key={left}>
                      <div className="col-6" >
                      <NavLink to={`chapter/${left}`} style={{textDecoration:"none"}}>
                        <li>
                          <a className="dropdown-item" href="#" >
                            <FaFileAlt style={{ color: 'orange' }} /> Chapter {left}
                          </a>
                        </li>
                      </NavLink>
                      </div>
                      <div className="col-6">
                        <NavLink to={`chapter/${right}`} style={{textDecoration:"none"}}>
                        <li>
                          <a className="dropdown-item" href="#">
                            <FaFileAlt style={{ color: 'orange' }} /> Chapter {right}
                          </a>
                        </li>
                        </NavLink>
                      </div>
                    </div>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link active" to="/quotes">
                  Quotes
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link active" to='/about'>
                  About Gita
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Gita AI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Donate</a>
              </li>
            </ul>

            {/* Theme toggle button */}

            <button className='btn btn-link' onClick={toggleTheme} style={{color:"inherit"}}>
              {theme === "light"
                ? <MdDarkMode style={{ fontSize: "2rem", marginRight: "5px" }} />
                : <MdLightMode style={{ fontSize: "2rem", marginRight: "5px" }} />
              }
            </button>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
            {/* </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
