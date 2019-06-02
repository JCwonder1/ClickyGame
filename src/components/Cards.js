import React from "react";

function Cards(props){
    
    
    return (
      <div className="card click-item">
        <img
          className={"card-img " + props.divclass}
          src={props.image}
          data-index={props.data}
          alt=""
          id={props.id}
          onClick={props.handleIncrement}
        />
      </div>
    );

}

export default Cards;