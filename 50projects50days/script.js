// we want to switch the class active when we click on the img

// create a variables called panels
const panels = document.querySelectorAll('.panel')

// lop with for each that has a arraw function as an argument.
//we pass inside what we want to use for eact iteration - panel
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})


// another arraw function insiede a for loop to remove the class active from each panel
//we have just an argument so we can remove the pparentesis around panel in the arrow function
// we looping throu panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}

// so before adding the active class it removes the active from all of the panesls