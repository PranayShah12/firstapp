import React from "react";
import "../Css/Header.css";
import img1 from "../images/headimg1.jpg";
import img2 from "../images/headimg2.jpg";
import img3 from "../images/headimg3.jpg";
import Comments from "./Comments";
import Main from "./Main";
// import { Button } from "bootstrap";
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  return (

    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            height="500px"
            width="200px"
          />
          <Carousel.Caption>
            <h3>Turn Your Dream</h3>
            <h2>Jewellery Collection</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            height="500px"
            width="200px"
          />

          <Carousel.Caption>
            <h3>New Classic Items</h3>
            <h2>Beautiful Jewellery</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            height="500px"
            width="200px"
          />

          <Carousel.Caption>
            <h3>Shine With Luxury</h3>
            <h2>
              Unique Jewellery
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <h2>Jewellery Collection</h2>
            <h3>Turn Your Dream</h3>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <h2>Beautiful Jewellery</h2>
            <h3>New Classic Items</h3>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <h2>Unique Jewellery</h2>
            <h3>Shine With Luxury</h3>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <Main />
      <Comments />

    </>
  );
}