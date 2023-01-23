import React from 'react'
import { useState } from 'react';
import "./Item.css"


function Item() {
    /*let textoBtn = 'No me clickeaste'*/
    const [isActive, setIsActive] = useState("false")

    const handleClick = () => setIsActive(! isActive);
    return (
        <div>
            <button className="item-card_favicon" onClick={handleClick}>
                🧡
            </button>
        </div>
    )
}
export default Item;