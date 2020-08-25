const citiesArr = [
    {
        name: "Istanbul",
        img: "umberela.jpeg",
        description: "The city of the past, the present and the future, Istanbul is Turkey's largest city and the country's undisputed cultural and financial centre."
    },
    {
        name: "Antalya",
        img: "antalya.jpg",
        description: "Antalya, which is the largest city on the Mediterranean, is also known as the Turkish Riviera."
    }
]

export const CitiesCardArrCopy = () => {
    return citiesArr.slice()
}