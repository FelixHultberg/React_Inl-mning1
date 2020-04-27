import React from 'react';
import CardImage from './images/CardImage.jpg';

const Card = () => {
    return (
        <div className="card">
            <img src={CardImage} alt="Card" />
            <div className="card-info">
                <h5>Card Title</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Ipsum quaerat fuga fugit deserunt.</p>
                <div className="card-book">
                    <button>Book Here</button>
                    <div>
                        <p>2000sek</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;