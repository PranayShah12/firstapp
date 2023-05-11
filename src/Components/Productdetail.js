import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductList } from "./ProductList";
import { IoArrowBackSharp } from "react-icons/io5";
import { jquery } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../Css/Sliderimg.css";
import 'swiper/css/bundle';
import diomondimg from '../images/diamondimg.webp'
import diamondimg1 from '../images/diamondimg1.webp'
import diamondimg2 from '../images/diamondimg2.webp'
import diamondimg3 from '../images/diamondimg3.webp'
import diamondimg4 from '../images/diamondimg4.webp'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"


export default function Productdetail() {
    const { id } = useParams();
    const [Productdetail, setProductdetail] = useState({});
    const [serachvalue, setserachvalue] = useState("")
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


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
                <div className="row pd">
                    <div className="col-md-6 ">
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <React.Fragment>


                                            <TransformComponent>
                                                <div className="slideImage">
                                                    <img src={Productdetail.img} alt="" />
                                                    <div className="zoomButton">
                                                        <button className="btn btn-primary " onClick={() => zoomIn()}>Zoom in +</button><br />
                                                        <button className="btn btn-primary" onClick={() => zoomOut()}>zoom out -</button><br />
                                                        <button className="btn btn-primary" onClick={() => resetTransform()}> reset </button>

                                                    </div>
                                                </div>
                                                <div>examampletest</div>
                                            </TransformComponent>
                                        </React.Fragment>
                                    )}
                                </TransformWrapper>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                                    <TransformComponent>
                                        <img src={diamondimg2} alt="" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </SwiperSlide>

                            <SwiperSlide>
                                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                                    <TransformComponent>
                                        <img src={diamondimg3} alt="" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </SwiperSlide>
                            <SwiperSlide>
                                <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                                    <TransformComponent>
                                        <img src={diamondimg3} alt="" />
                                    </TransformComponent>
                                </TransformWrapper>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={Productdetail.img} alt="" style={{ border: "1px solid black" }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={diamondimg2} alt="" style={{ border: "1px solid black" }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={diamondimg3} alt="" style={{ border: "1px solid black" }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={diamondimg3} alt="" style={{ border: "1px solid black" }} />
                            </SwiperSlide>
                        </Swiper>
                        {/* <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                            <TransformComponent>
                                <img src={Productdetail.img} alt="" width="400px" height="400px" />
                            </TransformComponent>
                        </TransformWrapper> */}
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
                        <div className="buyBtn">
                            <button className="btn btn-danger" >BUY NOW</button>
                            <button className="btn btn-danger">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                {/* <div className="row pt-3">
                    <div class="bxslider">
                        <div>
                            <div className="imgSlider">
                                <div className="row ">
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg1} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg2} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg3} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg4} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div className="imgSlider">
                                <div className="row ">
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg1} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg2} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg3} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                    <div className="col-md-3 p-2">
                                        <img src={diamondimg4} height="90px" width="90px" style={{ border: "1px solid black" }} />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    </>
    );

}