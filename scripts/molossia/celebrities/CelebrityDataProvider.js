// Array of city objects 
const celebrityCollection = [
    {
        img: "0hisExcellency.jpg",
        name: "His Excellency Kevin Baugh",
        info: "His Excellency President Grand Admiral Colonel Doctor Kevin Baugh, President and Raïs of Molossia, Protector of the Nation and Guardian of the People "

    },
    {
        img: "0jackblackmeet.jpg",
        name: "Jack Black",
        info: "Famous funnyguy, rock enthusiast, and all around great dad, Jack Black"

    },
    {
        img: "0JamesDoohan.jpg",
        name: "James Doohan",
        info: "The heroic nine fingered chief engineer aboard the USS Enterprise, on shoreleave in Molossia"

    }
]

export const useCelebData = () => {
    return celebrityCollection.slice() // slice() returns a copy of the array
}