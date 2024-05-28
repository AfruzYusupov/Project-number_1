const mirzo = document.getElementById('but1') 
const mirza = document.getElementById('but') 
const pirzo = document.getElementById('form-mail')
const title = document.getElementById('title')
const a = document.getElementById('pass')
const aa = document.getElementById('name')


mirzo.addEventListener('click' , () =>{
    title.innerText='sing in'
    pirzo.classList.add('hide')
    pirzo.classList.remove('form')
    pirzo.classList.remove('form-phone')


    const name = a
    const pass = aa.name.value

    const auth = auth(pass,name)

    if(auth){
        alert('correct')
    }
    else{
        alert('wrong')
    }

})
mirza.addEventListener('click' , () =>{
    title.innerText='sing up'
    pirzo.classList.remove('hide')
    pirzo.classList.add('form')
    pirzo.classList.remove('form-phone')
})

function auth(pass,name){
    if(name === 'afruz' && pass === 123456){
        return true
    }
    else{
        return false
    }
}