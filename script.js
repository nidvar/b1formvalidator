const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm = document.getElementById('confirm')

const fail = (target, message)=>{
    target.parentElement.className = `userinput lose`
    target.parentElement.querySelector('span').innerHTML = message
}

const win = (target)=>{
    target.parentElement.className = `userinput win`
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateData = (arrayOfData)=>{
    arrayOfData.forEach(a=>{
        if(a.value ===''){
            return fail(a, 'empty field')
        }else if(a.id == 'email'){
            if(!validateEmail(a.value)){
                return fail(a, 'Not a valid email')
            }else{
                return win(a)
            }
        }else{
            return win(a)
        }
        
    })
}

document.querySelector('.form').addEventListener('submit',(e)=>{
    e.preventDefault()
    
    validateData([username, email, password, confirm])
})