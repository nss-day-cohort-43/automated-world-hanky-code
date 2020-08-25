
export const LandmarkCard = (landObj) => {
    return `
    <div class="cont-card">
        <div class="card-imgBox">
            <img src="/images/ireland/${landObj.img}" alt="${landObj.name}" class="card-img">
        </div>
        <div class="card-infoBox">
            <h3>${landObj.name}</h3>
            <p>${landObj.info}</p>
        </div>
    </div> 
    `
}