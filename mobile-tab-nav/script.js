const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })

})


/* making the function to remove all content*/
function hideAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}

/* making the function to remove all items */

function hideAllItems(){
    listItems.forEach(item => item.classList.remove('active'))
}
