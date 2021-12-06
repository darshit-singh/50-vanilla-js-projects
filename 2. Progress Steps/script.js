const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1 // first circle active

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length) { //so current active doesn't go beyond the specified length
        currentActive = circles.length
    }
    update() // update circles
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

const update = () => {
    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    circles.forEach((circle, id) => {
        if (id < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}