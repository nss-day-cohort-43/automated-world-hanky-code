const celebArr = [
    {
       name: "Rami Malek",
       img: "RMalek.jpg",
       imgAlt: "headshot of man",
       description: "Rami Said Malek (English: /ˈrɑːmi ˈmælɪk/;[1][2] Arabic: رامي سعيد مالك‎, Egyptian Arabic: [ˈɾɑːmi sæˈʕiːd ˈmæːlek]; born May 12, 1981) He is in cool shows and movies."
    },
    {
       name: "Zeeko Zaki",
       img: "zeeko-zaki-.jpg",
       imgAlt: "headshot of man",
       description: "Zaki was born in Alexandria, Egypt, and immigrated to the United States at one month of age.[2][5] Zaki's maternal instincts might surprise you. He loves"
    }
]

export const CelebCardArrCopy = () => {
    return celebArr.slice()
}