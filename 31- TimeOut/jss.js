const header = document.getElementById('header')
const title = document.getElementById('title')
const except = document.getElementById('except')
const profile_img = document.getElementById('profile')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

function getData(){
    
   header.innerHTML = '<img src="https://m.media-amazon.com/images/I/51WG6cmUhyL._AC_SL1000_.jpg" alt="">'
   title.innerHTML = 'Lorem ipsum dolor sit amet'
   except.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae!'
   profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
   name.innerHTML = 'John Doe'
   date.innerHTML = 'oct 08, 2020'
}