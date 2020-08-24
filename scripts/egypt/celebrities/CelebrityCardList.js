import { CelebCard } from "./CelebrityCard.js"
import { CelebCardArrCopy } from "./CelebrityDataProvider.js"


export const CelebCardList = (aCelebArr) => {
    const contentElement = document.querySelector(".celebrities");

    const celebListArr = CelebCardArrCopy();

    let celebCardHTMLRep = "";
    for(const celebObj of celebListArr) {
        celebCardHTMLRep += CelebCard(celebObj)
    }
    contentElement.innerHTML += celebCardHTMLRep;
}