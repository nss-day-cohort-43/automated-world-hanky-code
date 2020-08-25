// This file returns a HTML representation of a Celebrity card for Molossia.

export const CelebCard = (celebObj) => {
    return `
    <div class="cont-card">
        <div class="card-imgBox">
            <img src="/images/molossiaImages/${celebObj.img}" alt="${celebObj.name}" class="card-img">
        </div>
        <div class="card-infoBox">
            <h3>${celebObj.name}</h3>
            <p>"${celebObj.info}"</p>
        </div>
    </div>
    `
}