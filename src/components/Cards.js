import React from "react";

function Cards(props){
    console.log(props);
    return(
        <div className="card"> 
            <img class="card-img" src={props.image} alt="" />
            <p>{props.image}</p>
        </div>

    );

}

export default Cards;