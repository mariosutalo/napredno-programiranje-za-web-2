// void funkcija
function displayText() {
    let p = document.querySelector('.text-p')
    p.innerHTML = 'Changed from button'
    let surfaceArea = calculateSurfaceArea(40,10)
    let socialStatusP = document.querySelector('.social-status-p')
    if(surfaceArea > 300) {
        socialStatusP.innerHTML = 'You are rich'
    } else {
        socialStatusP.innerHTML = 'Work harder'
    }
    p.innerHTML = `Pool surface area is: ${surfaceArea}`


}


// naming convection camelcase
// width, length - function parameters
// function returns a number
function calculateSurfaceArea(width, length) {
    return width * length
}

