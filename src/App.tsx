import React, { useState } from "react";
import "./App.css";
import { data } from "./components/About";

// interface ItestFunc {
//   name: string;
//   a: number;
//   b: number;
// }

function App() {
  //  const testFunc = ({ name, a, b }: ItestFunc): string => {
  //   return `my name is ${name}, i am ${a + b} years old`;
  // };
  // testFunc({ name: "joseph", a: 12, b: 13 });

  return (
    <div className="App">
      <div className="nav">
        <span className="title">crowdfund</span>

        <ul className="list-nav">
          <li>About</li>
          <li>Discover</li>
          <li>Get started</li>
        </ul>

        <div className="menu"></div>
      </div>

      <div className="hero-container"></div>

      <div className="container">
        <div className="hero-logo">
          <img src="/assets/images/logo-mastercraft.svg" width={55} height={55} alt="" />
        </div>
        <div className="container_contents">
          <div className="hero">
            <div className="hero-header">
              <h1>Mastercraft Bamboo Monitor Riser</h1>
              <p>A beautiful {"&"} handcrafted monitor stand to reduce neck and eyes strain.</p>
            </div>

            <div className="hero-button">
              <div className="hero-btn">
                <button>Back this project</button>
              </div>
              <div className="hero-btn-img">
                <img className="btn-img" src="/assets/images/icon-bookmark.svg" width={47} height={47} alt="" />
                <button>Bookmarked</button>
              </div>
            </div>
          </div>

          <div className="hero-progress">
            <ul>
              <li>
                <h2>$89,914</h2>
                <p>of $100,000 backend</p>
              </li>

              <li>
                <h2>5,007</h2>
                <p>total backers</p>
              </li>

              <li>
                <h2>56</h2>
                <p>days left</p>
              </li>
            </ul>

            <div className="hero-progress-bar">
              <div id="myBar"></div>
            </div>
          </div>

          <div className="about-page">
            <h3 className="about-page-header">About this project</h3>
            <p>
              Geometric sans serif typefaces have been a popular design tool ever since these actors took to the world’s
              stage. Poppins is one of the new comers to this long tradition. With support for the Devanagari and Latin
              writing systems, it is an internationalist take on the genre.
            </p>
            <br />
            <p>
              Many of the Latin glyphs (such as the ampersand) are more constructed and rationalist than is typical. The
              Devanagari design is particularly new, and is the first ever Devanagari typeface with a range of weights
              in this genre. Just like the Latin, the Devanagari is based on pure geometry, particularly circles.
            </p>

            {data.slice(0, 3).map((item) => (
              <div className={`about-list ${item.availability.quantity === 0 ? "out-of-stock" : undefined}`}>
                <div className="about-header" key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.prices}</p>
                </div>

                <p className="about-list-text">{item.content}</p>

                <div className="about-bottom">
                  <div className="about-btn">
                    <h2>{item.availability.quantity}</h2>
                    <p>{item.availability.status}</p>
                  </div>

                  <div>
                    <button>{item.button.text}</button>
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
