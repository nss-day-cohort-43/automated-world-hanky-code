

const landmarkCollection = [
    {
        img: "rock-of-cashel.jpg",
        name: "Rock of Cashel",
        info: "There are also sheep."
    },
    {
        img: "newgrange.jpeg",
        name: "Newgrange",
        info: "This tomb is a 5,200-year-old stone passage. Located in the Boyne Valley, it was built by stone-age farmers and is older than the Great Pyramids of Egypt."
    },
    {
        img: "giants-causeway.jpeg",
        name: "Giants Causeway",
        info: "A mesmerizing hexagonal landscape."
    },
    {
        img: "blarney-stone-and-castle.jpeg",
        name: "Blarney stone and castle",
        info: "Whoever kisses the stone is said to be given the gift of eloquence."
    }
]


export const useLandmarkData = () => {
    return landmarkCollection.slice()
}