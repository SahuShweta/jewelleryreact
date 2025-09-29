import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";



const Star = ({ stars, reviews }) => {
    // console.log(" ~ file: Star.js ~ line 4 ~ Star ~ star", stars);
    const ratingStar = Array.from({ length: 5 }, ( elem, index) => {
        let number = index + 0.5;

        return <span key={index}>
            { stars >= index + 1 ? (
                <FaStar className="feedback"/>
                ) : stars >= number ? (
                    <FaStarHalfAlt className="feedback"/>
                    ) : (
                        <AiOutlineStar className="feedback"/>
                        ) }
        </span>
    })
    return (
    
            <div className='icon-style'>
                {ratingStar}
                <p>({reviews} customer reviews)</p>
            </div>
        
    );
};



export default Star
