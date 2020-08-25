const citiesArr = [
    {
        name: "Cairo",
        img: "cairo.jpeg",
        imgAlt: "ancient city with temples and pyramids in distance",
        description: "Cairo is the capital of Egypt and its most important city, and with almost 20 million inhabitants."
    },
    {
        name: "Alexandria",
        img: "alexandria.png",
        imgAlt: "overhead view of coastal anciet city",
        description: "Founded by Alexander the Great in 332 BCE, Alexandria was an Egyptian capital for over 1000 years."
    }
]

export const CitiesCardArrCopy = () => {
    return citiesArr.slice()
}