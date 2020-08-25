export const CityCard = (cityObj) => {
    return `
    <h2 class="name">${cityObj.name}</h2>
    <div class="card">
        <div class="imgBox">
            <img src="/images/egypt/${cityObj.img}" alt="${cityObj.imgAlt}" class="img">
        </div>
        <div class="textBox">
            <p class="text">${cityObj.description}</p>
        </div>
    </div>
    `
}