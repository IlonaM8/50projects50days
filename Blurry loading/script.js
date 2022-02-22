const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0 


let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int)
    }

    loadText.innerText = ` ${load}% ` 
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = ` blur(${scale(load, 0, 100, 30, 0 )}px)`

}


console.log(blurring)

// map a range of numbers 0-100 for the opacity to go from 0-1
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
