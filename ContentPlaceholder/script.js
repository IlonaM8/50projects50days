const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')



setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1636381356943-ea4420de2573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VucmlzZSUyMGJ5JTIwdGhlJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt=""/>'
    title.innerHTML = 'Lorem ipsum dolor sit amoet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, obcaecati.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/28.jpg" alt=""/>'
    name.innerHTML = 'Clair Stweart'
    date.innerHTML = 'Oct 08, 2022'

    //loop and remove class
    animated_bgs.forEach(bg => bg.classList.remove('animated-bg-text'))

}

