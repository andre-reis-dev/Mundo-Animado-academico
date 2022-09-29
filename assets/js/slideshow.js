let slideIndex = 0

function getValues(value) {
    slideIndex = value
}

toggleImages()
function toggleImages() {
    let slides = document.getElementsByClassName('slides')
    let buttons = document.getElementsByClassName('dots')

    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
    }

    slides[slideIndex].style.display = 'block'
    buttons[slideIndex].classList.add('active')
    slideIndex++
    setTimeout (toggleImages, 5000)
} 