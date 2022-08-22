const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
// const submit = document.getElementsByTagName('button');


// show success function

function showSuccess(input){
    let formControl = input.parentElement;
    formControl.classList.add('success')


}

// show error function
function showError (input, message){
    const formControl = input.parentElement;
    formControl.classList.add('error')
    const small = formControl.querySelector('small')
    small.innerText = message
}



// adding event listeners
    // form.addEventListener('submit', function (e) {
    //     e.preventDefault();
    //     if(username.value === ''){
    //         showError(username, 'Username is required')
    //     } else{
    //         showSuccess(username)
    //     };


    //     if(email.value === ''){
    //         showError(email, 'Email is required')
    //     } else{
    //         showSuccess(email)
    //     };

    //     if(password.value === ''){
    //         showError(password, 'Password is required')
    //     } else{
    //         showSuccess(password)
    //     };

    //     if(password2.value === ''){
    //         showError(password2, 'Password does not match')
    //     } else{
    //         showSuccess(password2)
    //     }
    // })//






    function checkRequired(inputArray){
        inputArray.forEach(input =>{
            if(input.value.trim() === ''){
                showError(input, `${getField(input)} is required`)
            }else{
                showSuccess(input)
            }
        })
    }
    function getField(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1)
    }

    function checkLength (input, min, max){
        if (input.value.length < min){
            showError(input, `${getField(input)} must be atleast ${min} characters`)
        }else if(input.value.length > max){
            showError(input, `${getField(input)} must be less than ${max} characters`)
        }else{
            showSuccess(input)
        }
    }

    function checkPasswordsMatch(input1, input2){
        if(input1.value !== input2.value){
            showError(input2, 'Passwords do not match')
        }else{
            showSuccess(input)
        }
    }

    form.addEventListener('submit', function (e){
        e.preventDefault();

        checkRequired([username, email, password, password2])
        checkLength (username, 3, 15)
        checkLength (password, 6, 25)
        checkPasswordsMatch (password, password2)
        username = ''
        email = ''
        password = ''
        password2 =''
    })
