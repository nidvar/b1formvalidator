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

document.querySelector('.form').addEventListener('submit',(e)=>{
    e.preventDefault()
    
    if(username.value===''){
        fail(username, 'field is empty')
    }else{
        win(username)
    }

    if(email.value===''){
        fail(email, 'field is empty')
    }else if(!validateEmail(email)){
        fail(email, 'email not valid')
    }else{
        win(email)
    }

})