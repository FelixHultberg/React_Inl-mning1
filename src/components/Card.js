import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card">

            <img src={props.image} alt="Card" />
            <div className="card-info">
                <h5>{props.title}</h5>
                {/* <p>{props.description}</p> */}
                <div className="card-book">
                    <Link style={{ textDecoration: 'none' }} to="/"><button> Info </button ></Link>
                    <div>
                        <p><span>{props.price}</span> kr</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;