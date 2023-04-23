import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductList } from "./ProductList";

export default function Diamond() {
    const [list, setlist] = useState(ProductList);
    const [serachvalue, setserachvalue] = useState();
    return (
        <div className="row pt-5 pb-5">
            {
                list.map((item) => {
                    let { id, name, desp, img } = item;
                    return (
                        <>
                            <div className="col-3 ">
                                <div className="card" style={{ width: '18rem' }} key={id}>
                                    <img src={img} className="card-img-top" alt="..." height="200px" width="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to={`/Diamond/${id}`} className="btn btn-danger">View Details >></NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div >
    )







    // return (<>
    //     <div className="container d-flex justify-content-center py-5">
    //         <img src={img11} alt="" height="250px" width="250px"></img>
    //     </div>
    // </>)
}

