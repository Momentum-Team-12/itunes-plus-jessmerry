console.log("music!")
const audioEl = document.querySelector ('#playMusic')
console.log(audioEl)

let kahunaDiv = document.querySelector('#kahuna')

let musicContainer = document.querySelector('#musicDiv')

let formBox = document.querySelector('#search')

formBox.addEventListener ('submit', function(event) {
    event.preventDefault()
    // let message = document.createElement('p')
    // let text = document.createTextNode ("Time to jam out!")
    // message.appendChild(text)

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

    if (data.resultCount === 0) {
        console.log('no results')
        let noResultsDiv = document.createElement('div')
        noResultsDiv.innerText = "No Results"
        noResultsDiv.classList.add('no-results')
        kahunaDiv.appendChild(noResultsDiv)
        return;
    }

    let results = data.results
    console.log(data)
        for (let result of results) {
        let musicCard = document.createElement('div')
            musicCard.classList.add('musicCard') 
            
        let pictureDiv = document.createElement('img')
            pictureDiv.classList.add('img')
            pictureDiv.src = result.artworkUrl100
            musicCard.appendChild(pictureDiv)

        let nameDiv = document.createElement('div')
            nameDiv.classList.add('track')
            nameDiv.innerText = result.trackName
            musicCard.appendChild(nameDiv)  
            
        let bandDiv = document.createElement('div')
            bandDiv.classList.add('band')
            bandDiv.innerText = result.artistName
            musicCard.appendChild(bandDiv)

        let audioDiv = document.createElement('a')
            audioDiv.classList.add('sound')
            audioDiv.href = `${result.trackViewUrl}`
            audioDiv.innerText = "Play"
            audioDiv.addEventListener('click', (event) => {
                event.preventDefault()
                audioEl.src = result.previewUrl
                audioEl.play()
            })
        musicCard.appendChild(audioDiv)

        musicContainer.appendChild(musicCard)
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

//need it to clear
//add song preview
