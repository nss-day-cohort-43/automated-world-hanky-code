const landmarkCollection = [
{
    img: "0nortonPark.jpg",
    name: "Norton Park",
    info: "Home to some shrubs, a bit of gravel, and the Great Molossian Railroad."
},
{
    img: "0presidentialOffice.jpg",
    name: "The Presidential Office",
    info: "I mean, it's the office of the president. it's a shack. what do you want, a book?"
},
{
    img: "0heroMonument.jpg",
    name: "The Hero Monument",
    info: "Current Heroes of Molossia: "
}
]


export const useLandmarkData = () => {
return landmarkCollection.slice()
}