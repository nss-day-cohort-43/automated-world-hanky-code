

// Array of city objects 
const cityCollection = [
    {
        img: "Belfast-Portrait.jpg",
        name: "Belfast",
        info: "The capital city of Northern Ireland."

    },
    {
        img: "dublin-portrait.jpeg",
        name: "Dublin",
        info: "Ireland's largest city and its capital."

    },
    {
        img: "Limerick-Portrait.jpg",
        name: "Limerick",
        info: "Ireland's 3rd largest city."

    },
    {
        img: "Waterford-Portrait.jpg",
        name: "Waterford",
        info: "Ireland's oldest city."

    },
    {
        img: "Cork-Portrait.jpg",
        name: "Cork",
        info: "What is Cork?"

    },
    {
        img: "Derry-Portrait.jpg",
        name: "Derry",
        info: "What is Derry?"

    },

]

export const useCityData = () => {
    return cityCollection.slice() // slice() returns a copy of the array
}