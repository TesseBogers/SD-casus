import React from "react";


function DecimalsComma({priceDeal, className}) {

// In dit component wordt er gekeken hoeveel cijfers er na de komma zijn.
// Of er al dan niet een 0 aan toegevoegd moet worden.
// Wordt het punt vervangen door een komma.
// Dit is een herbruikbaar component.

    const countDecimals = function (value) {
        if (Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    }

    let price;

    if (Number.isInteger(priceDeal)) {
        price = priceDeal;
    } else {
        if (countDecimals(priceDeal) === 1) {
            price = priceDeal + "0";
        } else {
            price = priceDeal;
        }
    }
    let finalPrice = `${price}`;
    finalPrice = finalPrice.replace(/\./, ',');

    return(
        <p className={className}>€ {finalPrice}</p>
    );
}
export default DecimalsComma;