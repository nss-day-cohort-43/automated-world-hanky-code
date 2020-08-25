
import { useCelebData } from "./CelebrityDataProvider.js";
import { CelebCard } from "./CelebrityCard.js";


export const CelebCardList = () => {

    // targets the element holding the list of cards
    const contentElement = document.querySelector(".celebrities");

    const celebList = useCelebData();


    let celebHTMLRepresentation = "";
    for (const celeb of celebList) {
        celebHTMLRepresentation += CelebCard(celeb);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${celebHTMLRepresentation}
    `

}