import React from 'react';
import DecimalsComma from "./DecimalsComma";

function SocialDeal({socialDeal}) {

    // In SocialDeal.js kan u 1 deal vinden.
    // De drie logo's, saved/sold-out/new-today, worden al dan niet toegevoegd. Dit wordt bepaald door een
    // ternary-operator.
    // In dit component maak ik gebruik van de DecimalsComma.js, daarmee vervang ik de bij de prijzen het punt met een
    // komma, en voeg ik al dan niet nodig een 0 toe.

    return (
        <section>
            <div className="socialdeal">
                <img className="image" src={`https://media.socialdeal.nl${socialDeal.img}`} alt={socialDeal.title}/>
                    <div className="socialdeal-text">
                        <div className="socialdeal-title">
                            <h1>{socialDeal.title}</h1>
                        </div>
                        <div className="socialdeal-logo">
                            {socialDeal.saved === 50 ? <div className="half-logo"><p>50%</p></div> : "" }
                            {socialDeal.sold === socialDeal.max ? <div className="soldout-logo"><p>SOLD OUT</p></div> : "" }
                            {socialDeal.is_new_today ? <div className="newtoday-logo"><p>NEW TODAY</p></div> : "" }
                        </div>
                        <div className="company">
                            <p className="company-name">{socialDeal.company_name}</p>
                            <p className="city">{socialDeal.location}</p>
                        </div>
                        <div className="sold">
                            <p className="sold-amount">{socialDeal.sold_text}</p>
                            <DecimalsComma className="sold-original" priceDeal={socialDeal.from}/>
                            <DecimalsComma className="sold-current" priceDeal={socialDeal.price}/>
                        </div>
                    </div>
                </div>
        </section>
    );
}
export default SocialDeal;