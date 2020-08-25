const landmarksArr = [
    {
        name: "The Pyramids of Giza",
        img: "pyramidsGizaCamels.jpg",
        imgAlt: "four pyramids and camels in foreground",
        description: "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex. Please let covid end so that I can leave this country again."
    },
    {
        name: "The Great Sphinx",
        img: "Great-Sphinx-of-Giza.jpg",
        imgAlt: "ancient sphinx monument",
        description: "A sphinx is a mythical creature with the head of a human, a falcon, a cat, or a sheep and the body of a lion with the wings of an eagle and it is awesome I love it."
    }
]

export const LandmarkCardArrCopy = () => {
    return landmarksArr.slice();
}