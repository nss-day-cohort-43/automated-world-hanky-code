// Array of city objects 
const cityCollection = [
    {
        img: "0harmonyProvince.jpg",
        name: "Harmony Provence",
        info: "The Primary place of residence for the presidential family."

    },
    {
        img: "0farfalla.jpg",
        name: "Farfalla",
        info: "Home to a flagpole and an excellent example of the raw and powerful infrastructure of the Republic of Molossia in the form of a small (10ftx1.5ft) bridge made out of 2x4s."

    },
    {
        img: "0desertHomestead.jpg",
        name: "Desert Homestead",
        info: "This land, found within California, is home to the national Molossian monument dedicated to his excellency's late grandfather."

    },
   

]

export const useCityData = () => {
    return cityCollection.slice() // slice() returns a copy of the array
}