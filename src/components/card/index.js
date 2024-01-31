import React, { useEffect, useState } from 'react';
import './index.css';
import { IoBagHandleOutline } from "react-icons/io5";
import CardStars from '../stars';


const Card = ({ user, onCLick }) => {
    const [selectedColor, setSelectedColor] = useState(user.variants[0]);
    const handleColorChange = (variant) => {
        setSelectedColor(variant);
    };

    const handlechange = (e) => {
        onCLick();
    }

    return (
        <div className='single-card-container'>
            <div className='single-card-container-background'>
                <div className='image-wrapper'>
                    <img className='image_prodImg' src={selectedColor.image} alt={user.model} />
                    <div className='hover-container'>
                        <IoBagHandleOutline onClick={handlechange} className='icon-hover-container' />
                    </div>
                </div>
            </div>


            <div className='card-container-card-details'>
                <h4>{user.model}</h4>
                <div className='card-conatiner-color-flex-content'>
                    <div>
                        <h3 className='prod_Price'> ${user.currentPrice}</h3>
                    </div>
                    <div className='card_color_image_variant'>
                        {user.variants.map((variant, key) => (
                            <button
                                key={variant._id}
                                className={`color_buttons_card ${selectedColor.color === variant.color ? 'selected' : 'notselected'}`}
                                style={{ backgroundColor: variant.color }}
                                onClick={() => handleColorChange(variant)}
                            ></button>
                        ))}
                    </div>
               
                </div>

                <div className='selected-color-div-card'>
                        <small>{selectedColor.color}</small>
                </div>

                <br></br>
                <div className="rating_user_data">
                    {/* console.log("use") */}
                   <CardStars rating = {user.rating} />
                </div>
            </div>
        </div>
    );
};

export default Card;
