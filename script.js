addEventListener("DOMContentLoaded", async function(){
    const response = await this.fetch("https://cynder97.github.io/mod4tut/api/songs")
    const songs = await response.json()

    let html = ""
    for(let song of songs){
        html +=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
})
