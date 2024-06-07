let py = document.querySelector('#py')
let  c = document.querySelector('#c')
const option = document.querySelector('#options')
option.addEventListener('change', function(){
    if(option.value == 'python'){
        document.location.href = 'py.html' 
    }
    else if (option.value == 'C'){
        document.location.href = 'c.html'
    }
})