let form = document.getElementById('parking-form')

let nameInput = document.getElementById('name')

form.addEventListener('submit', (e) => {

    e.preventDefault()
    validateName(nameInput)
})


// checks the name input on the form.
// changes the input box to red and show message if invalid.
// changes the input box to green, and removes message if it was prompted.
// if something exists as input, it is a valid name.

function validateName(input) {
    let errorEl = document.createElement('p')
    errorEl.id = 'name-error'

    if(nameInput.value) {
        if(document.getElementById('name-error')) {
            document.getElementById('name-error').remove()
        }
        nameInput.parentElement.classList.remove('input-invalid')
        nameInput.parentElement.classList.add('input-valid')
    } else {
        if(document.getElementById('name-error')) {
            document.getElementById('name-error').remove()
        }
        errorEl.innerText = "User Name Required"
        document.getElementById('name-field').appendChild(errorEl)
        nameInput.parentElement.classList.remove('input-valid')
        nameInput.parentElement.classList.add('input-invalid')
    }
}

// checks the car year input on the form
// changes the input box to red if invalid, and green if valid.
// car year must be a number, and must be after 1900

function validateCar(input) {

}
