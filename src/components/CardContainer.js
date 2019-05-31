import React from "react";

function Cards(props){
    return(
        <div className="card">
            <a href="#">
            <img class="card-img" src={props.char.image} alt="Card image cap">
        </div>

    );

}

export default Cards;