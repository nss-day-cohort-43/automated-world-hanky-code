
import { useLandmarkData } from "./LandmarkDataProvider.js";
import { LandmarkCard } from "./LandmarkCard.js";


export const LandmarkList = () => {

    // targets the element holding the list of cards
    const contentElement = document.querySelector(".landmarks");

    const landList = useLandmarkData();


    let landmarkHTMLRep = "";
    for (const lm of landList) {
        landmarkHTMLRep += LandmarkCard(lm);
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${landmarkHTMLRep}
    `
}