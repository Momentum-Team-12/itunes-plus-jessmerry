console.log("music!")

let tunesDiv = document.querySelector('#tunes')
console.log('tunes')

fetch('https://itunes.apple.com/search?term=freeyourselfup&entity=musicTrack',{
    method: 'GET',
    headers: {},
})
.then (function (response){
    return response.json()
})
.then (function (data){
    console.log(data)
    let nameDiv = document.createElement('div')
    nameDiv.classList.add('name')
    nameDiv.innerText = `${data.artistName}`
    tunesDiv.appendChild(nameDiv)
})