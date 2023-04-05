const button = document.getElementById('button')
const toast = document.getElementById('toast')

const messages = [
'Ola 1',
'Ola 2',
'Ola 3',
'Ola 4',
]
button.addEventListener('click', () => createNotification())

function createNotification(){

const notif = document.createElement('div')
notif.classList.add('toast')

notif.innerText = getRandomMessage()

toasts.appendChild(notif)

setTimeout(() =>{
    notif.remove()
},3000)

}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]    
}