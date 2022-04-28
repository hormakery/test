import React, { useState } from "react";
import logo from "./logo.svg";
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
        <ul>
          <li>
            <p>crowdfunding</p>
          </li>
        </ul>

        <div className="list-nav">
          <ul>
            <li>About</li>
            <li>Discover</li>
            <li>Get started</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="hero-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Motorola_M_symbol_black.svg/1200px-Motorola_M_symbol_black.svg.png"
            width={50}
            height={50}
            alt=""
          ></img>
        </div>
        <div className="hero">
          <div className="hero-header">
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eyes strain.</p>
          </div>

          <div className="hero-button">
            <div className="hero-btn">
              <button>Back this project</button>
            </div>
            <div className="hero-btn-img">
              <img
                className="btn-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngsJOdiYUUlKKW2bnMs66sHctMkQRnRGNEg&usqp=CAU"
                width={50}
                height={50}
                alt=""
              />
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
            <li className="vertical-line"></li>
            <li>
              <h2>5,007</h2>
              <p>total backers</p>
            </li>
            <li className="vertical-line"></li>
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
            Devanagari design is particularly new, and is the first ever Devanagari typeface with a range of weights in
            this genre. Just like the Latin, the Devanagari is based on pure geometry, particularly circles.
          </p>

          <div className="about-list">
            <div className="about-header">
              <h3>Bamboo Stand</h3>
              <p>Pledge $25 or more</p>
            </div>

            <p className="about-list-text">
              Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary to
              maintain an even typographic color. The Devanagari base character height and the Latin ascender height are
              equal; Latin capital letters are shorter than the Devanagari characters, and the Latin x-height is set
              rather high.
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
              Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary to
              maintain an even typographic color. The Devanagari base character height and the Latin ascender height are
              equal; Latin capital letters are shorter than the Devanagari characters, and the Latin x-height is set
              rather high.
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
              <h3>Mahogamy Special Edition</h3>
              <p>Pledge $200 or more</p>
            </div>

            <p className="about-list-text">
              Each letterform is nearly monolinear, with optical corrections applied to stroke joints where necessary to
              maintain an even typographic color. The Devanagari base character height and the Latin ascender height are
              equal; Latin capital letters are shorter than the Devanagari characters, and the Latin x-height is set
              rather high.
            </p>

            <div className="about-bottom">
              <div className="about-btn">
                <h2>0</h2>
                <p>left</p>
              </div>

              <button className="last-btn">Select Reward</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
