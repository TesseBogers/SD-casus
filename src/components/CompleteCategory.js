import React, {useState, useEffect} from 'react';
import Navigatie from "./navigatieHeader/Navigatie";
import axios from "axios";
import SocialDeal from "./socialDeal/SocialDeal";


// In de CompleteCategory.js pas ik de lifecycle method met hooks toe.
// Als eerste gebruik ik het Navigatie.js component.
// om de prop die hierbij meegegeven wordt aan te passen, wordt met behulp van de useState, de data bij de OnClick aangepast.
// Aan de hand van een ternary operator wordt er gekeken welke .JSON data er gemapt moet worden.
// Is de categoryChange === 1, worden alle deals weergegeven.
// Is de categoryChange gelijk aan een andere category, wordt deze gefilterd en daarna gemapt zodat enkel de deals
// van de specifieke categorie worden weergegeven.
// Ook is er een error-melding als er wat fout gaat met het ophalen van de data en een loading-melding als het laden
// van de data iets langer duurt.

function CompleteCategory() {

    const [categoryChange, setCategoryChange] = useState(null);
    const [socialDeals, setSocialDeals] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const {data} = await axios.get("https://media.socialdeal.nl/demo/deals.json")
                setCategoryChange(1);
                setSocialDeals(data.deals);
            } catch (error) {
                setError(true);
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <div className="container">

            <Navigatie setCategoryChange={setCategoryChange}/>

            <div className="category">
                <ul >
                    {socialDeals &&
                    categoryChange === 1 ? socialDeals.map(socialDeal => <SocialDeal key={socialDeal.unique} socialDeal={socialDeal}/>)
                        :
                        socialDeals
                            .filter( socialDeal=> socialDeal.category === categoryChange)
                            .map(socialDeal => <SocialDeal key={socialDeal.unique} socialDeal={socialDeal}/>)}
                </ul>
            </div>

            { error && <p>Er ging wat mis bij het ophalen van de Social Deals, refresh de pagina!</p> }
            { loading && <p>De pagina is aan het laden, bedankt voor uw geduld!</p> }
        </div>
    );
}
export default CompleteCategory;