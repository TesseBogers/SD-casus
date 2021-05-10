import '../../App.css';
import React from 'react';
import TabletMobile from "./navigatieComponents/TabletMobile";
import Desktop from "./navigatieComponents/Desktop";
import beauty from '../../assets/beauty-logo.png';
import cursussen from '../../assets/cursussen-workshops-logo.png';
import eten from '../../assets/etendrinken-logo.png';
import hotels from '../../assets/hotels-recreatie-logo.png';
import speciaalzaken from '../../assets/speciaalzaken-auto-logo.png';
import sport from '../../assets/sport-logo.png';
import populair from '../../assets/populair-logo.png';
import welness from '../../assets/welness-logo.png';

function Navigatie({setCategoryChange}) {

    // Voor het maken van de navigatie maakte ik gebruik van twee herbruikbare componenten: TabletMobile.js en Desktop.js.
    // In de Navigatie.js roep ik beide aan.
    // Er wordt gebruik gemaakt van een Onclickfunctie, waarvan de "setCategoryChange" (Hier als prop) in CompleteCategory.js
    // aangepast zal worden zodra de gebruiker er op klikt.
    // Er zijn twee <div>, een voor de Tablet/Mobile-navigatie en een voor de Desktop-naviagtie.
    // Deze zijn dan apart te stylen in CSS.

    return (
        <div>
            <div className="navigatie-wrapper">
                <div className="tabletmobile">
                    <nav>
                        <ul>
                            <TabletMobile clickHandler={() => setCategoryChange(1) } name={"Populair"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(7) } name={"Eten & Drinken"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(8) } name={"Beauty"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(6) } name={"Welness"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(11) } name={"Speciaalzaken & Auto's"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(9) } name={"Hotel & Recreatie"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(12) } name={"Sport"}/>
                            <TabletMobile clickHandler={() => setCategoryChange(14) } name={"Cursussen & workshops"}/>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="desktop">
                <nav>
                    <ul>
                        <Desktop clickHandler={() => setCategoryChange(1) } logo={populair} name={"Populair"}/>
                        <Desktop clickHandler={() => setCategoryChange(7) } logo={eten} name={"Eten & Drinken"}/>
                        <Desktop clickHandler={() => setCategoryChange(8) } logo={beauty} name={"Beauty"}/>
                        <Desktop clickHandler={() => setCategoryChange(6) }  logo={welness} name={"Welness"}/>
                        <Desktop clickHandler={() => setCategoryChange(11) } logo={speciaalzaken} name={"Speciaalzaken & Auto's"}/>
                        <Desktop clickHandler={() => setCategoryChange(9) } logo={hotels} name={"Hotel & Recreatie"}/>
                        <Desktop clickHandler={() => setCategoryChange(12) } logo={sport} name={"Sport"}/>
                        <Desktop clickHandler={() => setCategoryChange(14) } logo={cursussen} name={"Cursussen & workshops"}/>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navigatie;
