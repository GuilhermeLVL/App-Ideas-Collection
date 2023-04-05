const button = document.getElementById('button')
const toast = document.getElementById('toast')

const messages = [
'Ola 1',
'Ola 2',
'Ola 3',
'Ola 4',
]

const types = ['info', 'success', 'error']
button.addEventListener('click', () => createNotification('This is invalid data','success'))

function createNotification(message = null, type = null){

const notif = document.createElement('div')
notif.classList.add('toast')
notif.classList.add(type ? type : 'info')


notif.innerText = message ?  message : getRandomMessage()

toasts.appendChild(notif)

setTimeout(() =>{
    notif.remove()
},3000)

}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]    
}