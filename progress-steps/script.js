const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const cirlces = document.querySelectorAll('.cirlce')

let currentActive = 1

next.addEventListener('click', () => {
 currentActive++

 if(currentActive > cirlces.length) {
     currentActive = cirlces.length
 }

 update()

 console.log(currentActive)
})


prev.addEventListener('click', () => {
    currentActive--
   
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
   
    console.log(currentActive)
   })
   

   function update()  {
       cirlces.forEach((circle, idx) => {
           if(idx < currentActive) {
               circle.classList.add('active')
           } else {
               circle.classList.remove('active')
           }

       })

       const actives = document.querySelectorAll('.active')

       progress.style.width = (actives.length - 1) / (cirlces.length - 1) * 100 + '%'


       if(currentActive === 1) {
           prev.disabled = true
       } else if(currentActive === cirlces.length) {
           next.disabled = true

       } else {
           prev.disabled = false
           next.disabled = false
       }



   }