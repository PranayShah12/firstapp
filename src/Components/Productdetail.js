import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductList } from "./ProductList";
import { IoArrowBackSharp } from "react-icons/io5";
import { jquery } from "react";
// import "../Css/Zoom.css/Example.css"
import "../Css/Zoom.css/Product.css"
import "../Css/Zoom.css/Pygment.css"
import diomondimg from '../images/diamondimg.webp'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"


export default function Productdetail() {
    const { id } = useParams();
    const [Productdetail, setProductdetail] = useState({});
    const [serachvalue, setserachvalue] = useState("")

    useEffect(() => {
        const finditem = ProductList.find((item) => item.id === Number(id));
        setProductdetail(finditem);
    }, [serachvalue]);

    return (<>
        <div className="container py-5">
            <Link to="/Diamond" className="btn btn-danger">
                <IoArrowBackSharp />
            </Link>
            <hr />
            <div className="container row" >
                <div className="row">
                    <div className="col-md-6 ">
                        <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                            <TransformComponent>
                                <img src={Productdetail.img} alt="" width="400px" height="400px" />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>

                    <div className="col-md-6 pro-detail">
                        <h1>{Productdetail.Title}</h1>
                        <p>From Shah Collection</p>
                        <hr />
                        <h3 className="pro-price">{Productdetail.price}</h3>
                        <p style={{ fontSize: "13px" }}>MRP Incl. of all taxes</p>
                        <hr />
                        <p>{Productdetail.desp}</p>
                        <hr />
                        <button className="btn btn-danger">BUY NOW</button>
                    </div>
                </div>
                <div className="row pt-3">
                    <div id="carouselExample" className="carousel1slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={diomondimg} className="d-block w-50" height="100px" width="50px" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={diomondimg} className="d-block w-50" height="100px" width="50px" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={diomondimg} className="d-block w-50" height="100px" width="50px" alt="..." />
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
                    </div>

                </div>
            </div>
        </div>
    </>
    );

}