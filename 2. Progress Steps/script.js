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
    circles.forEach((circle, id) => {
        if (id < currentActive) {
            circle.classList.add('active')
        } else {
            circles.classList.remove('active')
        }
    })
}