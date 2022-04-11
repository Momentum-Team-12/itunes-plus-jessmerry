console.log("music!")

let kahunaDiv = document.querySelector('#kahuna')

let formBox = document.querySelector('#search')

formBox.addEventListener ('submit', function(event) {
    event.preventDefault()

    let userInput = document.querySelector('#user-input')
    console.log(userInput.value)


fetch(`https://itunes.apple.com/search?term=${userInput.value}&media=music`,{
    method: 'GET',
    headers: {},
})
.then (function (response){
    return response.json()
})
.then (function (data){

    let tunesDiv = document.createElement('div')
    tunesDiv.classList.add("tunes")

    let results = data.results
        for (let result of results) {
        let pictureDiv = document.createElement('img')
            pictureDiv.classList.add('img')
            pictureDiv.src = result.artworkUrl100
            tunesDiv.appendChild(pictureDiv)
        }
        for (let result of results) {
            // console.log(i.trackName)
        let nameDiv = document.createElement('div')
            nameDiv.classList.add('track')
            nameDiv.innerText = result.trackName
            tunesDiv.appendChild(nameDiv)
        }
        for (let result of results) {        
        let bandDiv = document.createElement('div')
            bandDiv.classList.add('band')
            bandDiv.innerText = result.artistName
            tunesDiv.appendChild(bandDiv)

        kahunaDiv.appendChild(tunesDiv)
        }
    })
})