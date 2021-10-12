let form = document.getElementById('parking-form')

let nameInput = document.getElementById('name')

let carYearInput = document.getElementById('car-year')
let carMakeInput = document.getElementById('car-make')
let carModelInput = document.getElementById('car-model')

let daysInput = document.getElementById('days')

let CVVInput = document.getElementById('cvv')

let creditCardInput = document.getElementById('credit-card')

form.addEventListener('submit', (e) => {

    e.preventDefault()
    validateName(nameInput)
    validateCar(carYearInput, carMakeInput, carModelInput)
    validateDays(daysInput)
    validateCVV(CVVInput)
    validateCardNumber()
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
        errorEl.innerText = "User Name is required"
        document.getElementById('name-field').appendChild(errorEl)
        nameInput.parentElement.classList.remove('input-valid')
        nameInput.parentElement.classList.add('input-invalid')
    }
}

// checks the car year input on the form
// changes the input boxs to red and shows message if invlid
// changes the input boxs to green, and removes message if it was prompted
// car year must be a number, and must be after 1900

function validateCar(yearInput, makeInput, modelInput) {
    let errorEl = document.createElement('p')
    errorEl.id = 'car-error'

    if(!yearInput.value || !makeInput.value || !modelInput.value) {
        if(document.getElementById('car-error')) {
            document.getElementById('car-error').remove()
        }
        errorEl.innerText = "Year, Make, and Model of car is required"
        document.getElementById('car-field').appendChild(errorEl)
        carYearInput.parentElement.classList.remove('input-valid')
        carYearInput.parentElement.classList.add('input-invalid')
        carYearInput.parentElement.parentElement.classList.remove('input-valid')
        carYearInput.parentElement.parentElement.classList.add('input-invalid')
    } else if (yearInput.typeof != "number") {
        if(document.getElementById('car-error')) {
            document.getElementById('car-error').remove()
        }
        errorEl.innerText = "Car Year must be a number"
        document.getElementById('car-field').appendChild(errorEl)
        carYearInput.parentElement.classList.remove('input-valid')
        carYearInput.parentElement.classList.add('input-invalid')
        carYearInput.parentElement.parentElement.classList.remove('input-valid')
        carYearInput.parentElement.parentElement.classList.add('input-invalid')
    } else if (yearInput.value < '1900') {
        if(document.getElementById('car-error')) {
            document.getElementById('car-error').remove()
        }
        errorEl.innerText = "Car must be newer than 1899"
        document.getElementById('car-field').appendChild(errorEl)
        carYearInput.parentElement.classList.remove('input-valid')
        carYearInput.parentElement.classList.add('input-invalid')
        carYearInput.parentElement.parentElement.classList.remove('input-valid')
        carYearInput.parentElement.parentElement.classList.add('input-invalid')
    } else {
        if(document.getElementById('car-error')) {
            document.getElementById('car-error').remove()
        }
        carYearInput.parentElement.classList.remove('input-invalid')
        carYearInput.parentElement.classList.add('input-valid')
        carYearInput.parentElement.parentElement.classList.remove('input-invalid')
        carYearInput.parentElement.parentElement.classList.add('input-valid')
    }
}

function validateDays (input) {
    let errorEl = document.createElement('p')
    errorEl.id = 'days-error'

    if(daysInput.value < '1' || daysInput.value > '30') {
        if(document.getElementById('days-error')) {
            document.getElementById('days-error').remove()
        }
        errorEl.innerText = "Enter a Value between 1 and 30 Days"
        document.getElementById('days-field').appendChild(errorEl)
        daysInput.parentElement.classList.remove('input-valid')
        daysInput.parentElement.classList.add('input-invalid')
    } else {
        if(document.getElementById('days-error')) {
            document.getElementById('days-error').remove()
        }
        daysInput.parentElement.classList.remove('input-invalid')
        daysInput.parentElement.classList.add('input-valid')
    }
}

function validateCVV (input) {
    let errorEl = document.createElement('p')
    errorEl.id = 'cvv-error'

    if(input.value.length != 3 || isNaN(input.value)) {
        if(document.getElementById('cvv-error')) {
            document.getElementById('cvv-error').remove()
        }
        errorEl.innerText = "Enter 3 digit CVV code"
        document.getElementById('cvv-field').appendChild(errorEl)
        CVVInput.parentElement.classList.remove('input-valid')
        CVVInput.parentElement.classList.add('input-invalid')
    } else {
        if(document.getElementById('cvv-error')) {
            document.getElementById('cvv-error').remove()
        }
        CVVInput.parentElement.classList.remove('input-invalid')
        CVVInput.parentElement.classList.add('input-valid')
    }
}

function validateCardNumber(number) {
let errorEl = document.createElement('p')
errorEl.id = 'cc-error'

    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number)) {
    if(document.getElementById('cc-error')) {
        document.getElementById('cc-error').remove()
    }
    errorEl.innerText = "Enter a valid 16-digit credit card"
    document.getElementById('credit-card-field').appendChild(errorEl)
    creditCardInput.parentElement.classList.remove('input-valid')
    creditCardInput.parentElement.classList.add('input-invalid')
    } else {
        creditCardInput.parentElement.classList.remove('input-invalid')
        creditCardInput.parentElement.classList.add('input-valid')
        return luhnCheck(number);
    }
    
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}