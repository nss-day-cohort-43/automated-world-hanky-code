export const LandmarkCard = (landmarkObj) => {
    return `
    <h2 class="name">${landmarkObj.name}</h2>
                <div class="card">
                    <div class="imgBox">
                        <img src="/images/egypt/${landmarkObj.img}" alt="${landmarkObj.imgAlt}" class="img">
                    </div>
                    <div class="textBox">
                        <p class="text">${landmarkObj.description}</p>
                    </div>
                </div>
    `
}