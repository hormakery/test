import React, { useState } from "react";
import "./App.css";

// interface ItestFunc {
//   name: string;
//   a: number;
//   b: number;
// }

function App() {
  // const testFunc = ({ name, a, b }: ItestFunc): string => {
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

            <div className="about-list">
              <div className="about-header">
                <h3>Bamboo Stand</h3>
                <p>Pledge $25 or more</p>
              </div>

              <p className="about-list-text">
                Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary
                to maintain an even typographic color. The Devanagari base character height and the Latin ascender
                height are equal; Latin capital letters are shorter than the Devanagari characters, and the Latin
                x-height is set rather high.
              </p>

              <div className="about-bottom">
                <div className="about-btn">
                  <h2>101</h2>
                  <p>left</p>
                </div>

                <button>Select Reward</button>
              </div>
            </div>

            <div className="about-list">
              <div className="about-header">
                <h3>Black Edition Stand</h3>
                <p>Pledge $75 or more</p>
              </div>

              <p className="about-list-text">
                Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary
                to maintain an even typographic color. The Devanagari base character height and the Latin ascender
                height are equal; Latin capital letters are shorter than the Devanagari characters, and the Latin
                x-height is set rather high.
              </p>

              <div className="about-bottom">
                <div className="about-btn">
                  <h2>65</h2>
                  <p>left</p>
                </div>

                <button className="mid-btn">Select Reward</button>
              </div>
            </div>

            <div className="about-list">
              <div className="about-header">
                <h3 className="dark-gray-title">Mahogamy Special Edition</h3>
                < p className="aout-header-subtitle">Pledge $200 or more</p>
              </div>

              <p className="about-list-text">
                Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary
                to maintain an even typographic color. The Devanagari base character height and the Latin ascender
                height are equal; Latin capital letters are shorter than the Devanagari characters, and the Latin
                x-height is set rather high.
              </p>

              <div className="about-bottom">
                <div className="about-btn">
                  <h2>0</h2>
                  <p>left</p>
                </div>

                <button className="last-btn">Out of Stock</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
