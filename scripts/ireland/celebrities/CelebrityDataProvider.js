

// Array of celebrity objects 
const celebrityCollection = [
    {
        img: "liam-neeson2.jpeg",
        name: "Liam neeson",
        info: "I will look for you, I will find you and I will kill you."

    },
    {
        img: "graham-norton2.jpeg",
        name: "Graham Norton",
        info: "Host of the <i>Graham Norton Show</i> on BBC."

    }
]

export const useCelebData = () => {
    return celebrityCollection.slice() // slice() returns a copy of the array
}