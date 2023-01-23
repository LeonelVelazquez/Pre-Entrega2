import React from "react";
import Button from "../button/Button";

function Cards(props) {
  const { title, price, detail, imgurl } = props;
  return (
    <div className="tarjetas">
      <div>
        <img width="300px" src={imgurl} alt="Imagen" />
        <center>
          <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <p>{detail}</p>
          </div>
          <Button text={"Ver mas"} />
        </center>
      </div>
    </div>
  );
}

export default Cards;
