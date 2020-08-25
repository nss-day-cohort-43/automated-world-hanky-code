const landmarksArr = [
    {
        name: "Blue Mosque",
        img: "blue.jpg",
        description: "The Blue Mosque is an historical mosque in Istanbul. The mosque is known as the Blue Mosque because of blue tiles surrounding the walls of interior design"
    },
    {
        name: "Göreme",
        img: "balloons.jpeg",
        description: "Göreme, located among the 'fairy chimney' rock formations, is a town in Cappadocia, a historical region of Turkey"
    }
]

export const LandmarkCardArrCopy = () => {
    return landmarksArr.slice();
}