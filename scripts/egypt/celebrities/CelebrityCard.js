export const CelebCard = (celebObj) => {
    return `
    <h2 class="name">${celebObj.name}</h2>
    <div class="card">
        <div class="imgBox">
            <img src="/images/egypt/${celebObj.img}" alt="${celebObj.imgAlt}" class="img">
        </div>
        <div class="textBox">
            <p class="text">${celebObj.description}</p>
        </div>
    </div>
    `
}

