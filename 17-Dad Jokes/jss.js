const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeABtn')

generateJoke()

function generateJoke() {

    const config = {
        headers: { 'Accept': 'application/json'
        }
    }
    
    fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => console.log(data))
}
