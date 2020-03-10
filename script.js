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

function validatePassword(password){
    let mustInclude = '!@#$%^&*';
    const x = mustInclude.split('')
    if(password.length < 8){
        console.log('smaller than 8')
        return false
    }
    let z = 0
    x.forEach(a=>{
        if(password.includes(a)){
            z = 1
        }
    })
    if(z === 1){
        return true
    }
}

const validateData = (arrayOfData)=>{
    let password = '';
    arrayOfData.forEach(a=>{
        if(a.value.trim() ===''){
            return fail(a, `Requires ${a.id}`)
        }else if(a.id == 'email'){
            if(!validateEmail(a.value)){
                return fail(a, 'Not a valid email')
            }else{
                return win(a)
            }
        }else if(a.id == 'password'){
            if(!validatePassword(a.value)){
                return fail(a, 'Password fail')
            }else{
                password = a.value
                return win(a)
            }
        }else if(a.id == 'confirm'){
            if(a.value === password){
                return win(a)
            }else{
                return fail(a, 'Passwords do not match')
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