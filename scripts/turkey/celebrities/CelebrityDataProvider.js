const celebArr = [
    {
        name: "Nusret Gökçe",
        img: "salt.jpeg",
        description: "Nusret Gökçe, nicknamed Salt Bae, is a Turkish butcher, chef, and restaurateur, who owns Nusr-Et, a chain of steak houses."

    },
    { 
        name: "Recep Tayyip Erdoğan",
        img: "erdogan.jpg",
        description: "Recep Tayyip Erdoğan is the 12th President of Turkey. He formerly served as the Prime Minister of Turkey and was also the Mayor of İstanbul."

    }
]

export const CelebCardArrCopy = () => {
    return celebArr.slice()
}