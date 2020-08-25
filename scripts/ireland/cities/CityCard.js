

export const CityCard = (cityObj) => {
    return `
    <div class="cont-card">
        <div class="card-imgBox">
            <img src="/images/ireland/${cityObj.img}" alt="${cityObj.name}" class="card-img">
        </div>
        <div class="card-infoBox">
            <h3>${cityObj.name}</h3>
            <p>${cityObj.info}</p>
        </div>
    </div>
    `
}