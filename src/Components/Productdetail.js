import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductList } from "./ProductList";
import { IoArrowBackSharp } from "react-icons/io5";
import { jquery } from "react";
// import "../Css/Zoom.css/Example.css"
import "../Css/Zoom.css/Product.css"
import "../Css/Zoom.css/Pygment.css"

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
                <div className="col-md-6 easyzoom easyzoom--overlay">
                    <img src={Productdetail.img} alt="" width="400px" height="400px" />
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
        </div>
    </>
    );

}