export const LandmarkCard = (landmarkObj) => {
    return `
    <div class="cont-card">
        <div class="card-imgBox">
            <img src="/images/turkeyImages/${landmarkObj.img}" alt="${landmarkObj.name}" class="card-img">
        </div>
        <div class="card-infoBox">
            <h3>${landmarkObj.name}</h3>
            <p>${landmarkObj.description}</p>
        </div>
    </div>
    `
}