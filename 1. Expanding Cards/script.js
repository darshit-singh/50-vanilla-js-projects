const panels = document.querySelectorAll('.panel') //gives me a nodelist of all panels

//adding a click event listener for each panel
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panels.forEach((panel) => {
            panel.classList.remove('active')
        })
        panel.classList.add('active')
    })
})