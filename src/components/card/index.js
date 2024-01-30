import React, { useEffect, useState } from 'react'
import './index.css'

const Card = ({ user }) => {
    // const [selectedColor,setSelectedColor] = useState([user.variant[0].color]);

    // useEffect = (() =>{

    // },[selectedColor]);

    // console.log("user",user)

    return (
        <div className='single-card-container'>
            <div className='single-card-container-background'>
                <div className="image-wrapper">
                    <img className="image_prodImg" src={user.image} alt={user.model} />
                </div>
            </div>
            <div className="card-container-card-details">
                <h4>{user.model}</h4>
                <div className='card_color_image_variant'>
                    {user.variant.map((variant,key)=>{
                        <button key={user._id} className='color_buttons_card' background-color={variant.color}>
                        </button>
                    })}
                </div>
                <div>
                    <small>{user.color}</small>
                    <h3 className='prod_Price'> ${user.currentPrice}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card