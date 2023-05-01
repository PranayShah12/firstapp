import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ProductList } from "./ProductList";
import { WrapperContext } from "./App";

export default function Diamond() {

    const { list, setList } = useContext(WrapperContext);
    const { filterList, setFilterList } = useContext(WrapperContext);
    const { searchFormValue, setSearchFormValue } = useContext(WrapperContext);

    useEffect(() => {
        const searchProducts = filterList.filter((item) => {
            return (
                item.name.includes(searchFormValue)
            );
        });
        setList(searchProducts);
    }, [searchFormValue]);

    return (
        <div className="row pt-5 pb-5">

            {
                list.map((item) => {
                    let { id, name, desp, img } = item;
                    return (
                        <>
                            <div className="container col-md-6 col-sm-12 col-lg-3 pb-4">
                                <div className="card " key={id}>
                                    <img src={img} className="card-img-top" alt="..." height="200px" width="200px" />
                                    <div className="card-body">
                                        <h5 className="card-title">{name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to={`/Diamond/${id}`} className="btn btn-danger">View Details</NavLink>
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

