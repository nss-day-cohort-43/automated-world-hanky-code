import { CityCard } from "./CityCard.js"
import { CitiesCardArrCopy } from "./CityDataProvider.js"

export const CityCardList = (aCityArr) => {
    const contentElement = document.querySelector(".cities");

    const cityListArr = CitiesCardArrCopy();

    let cityCardHTMLRep = "";
    for(const cityObj of cityListArr) {
        cityCardHTMLRep += CityCard(cityObj)
    }
    contentElement.innerHTML += `${cityCardHTMLRep}`;
}