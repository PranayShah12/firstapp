import { Route, Routes } from 'react-router-dom';
import React, { useState, createContext, useNavigate } from 'react'
import About from './About';
import Home from './Home'
import Navbar from './Navbar';
import Footer from './Footer';
import Service from './Service';
import Contact from './Contact';
import Gold from './Gold';
import Diamond from './Diamond';
import Platinum from './Platinum';
import Productdetail from './Productdetail';
import { ProductList } from './ProductList';

export const WrapperContext = createContext();


function App() {

    // const [searchFormValue, setSearchFormValue] = useState("")
    const [list, setList] = useState(ProductList)
    const [filterList, setFilterList] = useState(ProductList)
    const [searchFormValue, setSearchFormValue] = useState("");


    return (<>
        <WrapperContext.Provider value={{ searchFormValue, setSearchFormValue, list, setList, filterList, setFilterList }}>
            <Navbar />
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/Service" element={<Service />}></Route>
                <Route path="/Gold" element={<Gold />}></Route>
                <Route path="/Diamond" element={<Diamond />}></Route>
                <Route path="/Platinum" element={<Platinum />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/Diamond/:id" element={<Productdetail />}></Route>
            </Routes>
            <Footer />
        </WrapperContext.Provider>
    </>
    )
}
export default App;