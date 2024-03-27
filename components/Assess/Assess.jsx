"use client"
import React, { useState } from 'react'
import './assess.module.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const Assess = () => {
    let [star, setStar] = useState(0);
    return (
        <div className="assess">
            <h3>What is your rating for sports news?</h3>
            {/* <div className="stars">
                <span className="star" onClick={setStar(1)}><FaStar /></span>
                <span className="star" onClick={setStar(2)}><FaStar /></span>
                <span className="star" onClick={setStar(3)}><FaStar /></span>
                <span className="star" onClick={setStar(4)}><FaStar /></span>
                <span className="star" onClick={setStar(5)}><FaStar /></span>
            </div> */}
        </div>
    )
}

export default Assess
