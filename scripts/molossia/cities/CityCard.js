// This file returns a HTML representation of a City card for Molossia.

export const CityCard = (cityObj) => {
    return `
    <div class="city-cont-card">
        <div class="card-imgBox">
            <img src="/images/molossiaImages/${cityObj.img}" alt="${cityObj.name}" class="card-img">
        </div>
        <div class="card-infoBox">
            <h3>${cityObj.name}</h3>
            <p>"${cityObj.info}"</p>
        </div>
    </div>
    `
}