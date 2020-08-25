
import { useCityData } from "./CityDataProvider.js";
import { CityCard } from "./CityCard.js";


export const CityList = () => {

    // targets the element holding the list of cards
    const contentElement = document.querySelector(".cities");

    const cityList = useCityData();


    let cityHTMLRepresentation = "";
    for (const city of cityList) {
        cityHTMLRepresentation += CityCard(city);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${cityHTMLRepresentation}
    `
}