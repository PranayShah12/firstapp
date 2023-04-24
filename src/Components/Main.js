import React from "react";
import img4 from '../images/infoimg.jpg';
import img5 from '../images/proimg1.jpg';
import img6 from '../images/proimg3.jpg';
import img7 from '../images/proimg4.jpg';
import img8 from '../images/proimg5.jpg';
import "../Css/Main.css";
export default function Main() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="image col-lg-6 col-md-6 col-sm-12 ">
            <img
              className="imgstart img-fluid"
              src={img4}
              alt=""
              height="400px"
              width="500px"
            ></img>
          </div>
          <div className="container info col-lg-6 col-md-6 col-sm-12">
            <h1>
              Perfect Jewellery <br />
              For You
            </h1>
            <p className="imginfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
              Lorem ipsum dolor sit amet
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
      <section className="gallary conatainer-fluid  my-5">
        <div>
          <h1 className="head pt-3">Our Metals</h1>
        </div>
        <div className="container">
          <div className="proinfo row">
            <div className="gallaryimg col-lg-3 col-md-6 col-sm-12">
              <img src={img5} alt="" className="img-fluid"></img>
              <div className="imgHeading">
                <h1>Gold</h1>
              </div>
            </div>
            <div className="gallaryimg col-lg-3 col-md-6 col-sm-12">
              <img src={img6} alt="" className="img-fluid"></img>
              <div className="imgHeading">
                <h1>Diamond</h1>
              </div>
            </div>
            <div className="gallaryimg col-lg-3 col-md-6 col-sm-12">
              <img src={img7} alt="" className="img-fluid"></img>
              <div className="imgHeading">
                <h1>Stone</h1>
              </div>
            </div>
            <div className="gallaryimg col-lg-3 col-md-6 col-sm-12">
              <img src={img8} alt="" className="img-fluid"></img>
              <div className="imgHeading">
                <h1>RoseGold</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

