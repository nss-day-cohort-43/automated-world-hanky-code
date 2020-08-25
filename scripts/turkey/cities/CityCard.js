export const CityCard = (cityObj) => {
    return `
    <div class="cont-card">
        <div class="card-imgBox">
            <img src="/images/turkeyImages/${cityObj.img}" alt="${cityObj.name}" class="card-img">
        </div>
        <div class="card-infoBox">
            <h2>${cityObj.name}</h2>
            <p>${cityObj.description} </p>
        </div>
    </div>
    `
}