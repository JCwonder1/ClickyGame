import React from "react";

function Cards(props){
    let image = `/img/${props.id}.jpg`;
    
    return (
      <div className="card click-item">
        <img
          className={"card-img " + props.divclass}
          src={image}
          data-index={props.data}
          alt=""
          id={props.id}
          onClick={props.handleIncrement}
        />
      </div>
    );

}

export default Cards;