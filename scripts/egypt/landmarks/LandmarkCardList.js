import { LandmarkCard } from "./LandmarkCard.js"
import { LandmarkCardArrCopy } from "./LandmarkDataProvider.js"

export const LandmarkCardList = (aLandmarkArr) => {
    const contentElement = document.querySelector(".landmarks");

    const landmarkListArr = LandmarkCardArrCopy();

    let landmarkCardHTMLRep = "";
    for(const landmarkObj of landmarkListArr) {
        landmarkCardHTMLRep += LandmarkCard(landmarkObj);
    }
    contentElement.innerHTML += `${landmarkCardHTMLRep}`
}