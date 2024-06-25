let back = document.querySelector('#back')
back.addEventListener('click', function(){
    document.location.href = 'index.html'
})
const btn1 = document.querySelector('#btn1'); // 버튼 변수로 불러오기
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn10 = document.querySelector('#btn10');
const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector("#btn12");
const btn13 = document.querySelector("#btn13");
const init = document.querySelector('#init');
let toggle = document.querySelector('#toggle');
btn1.addEventListener('click', function(){ 
    const isActive = btn1.classList.contains('active');
    if (isActive) {
        btn1.classList.remove('active'); // 자신만 active 클래스 지우기
        btn2.classList.remove('bluebutton') //자신을 제외한 모두의 bluebutton 클래스 지우기
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn1.classList.add('bluebutton') //자신만 bluebutton 클래스 추가하기
        btn2.classList.add('active'); //자신을 제외한 모두의 active 클래스 추가하기
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn9.classList.add('active');
        btn10.classList.add('active');
        btn11.classList.add('active')
        btn12.classList.add('active')
        btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    }
     else {
        btn1.classList.add('active'); // 자신만 active 클래스 추가하기
        btn1.classList.remove('bluebutton') // 모두의 bluebutton 클래스 지우기
        btn2.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn2.addEventListener('click', function(){
    const isActive = btn2.classList.contains('active');
    if (isActive) {
        btn2.classList.remove('active');
        btn1.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn2.classList.add('bluebutton')
        btn1.classList.add('active');
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn9.classList.add('active');
        btn10.classList.add('active');
        btn11.classList.add('active')
        btn12.classList.add('active')
        btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    } else {
        btn2.classList.add('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn3.addEventListener('click', function(){
    const isActive = btn3.classList.contains('active');
    if (isActive) {
        btn3.classList.remove('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn3.classList.add('bluebutton')
        btn1.classList.add('active');
        btn4.classList.add('active');
btn5.classList.add('active');
btn6.classList.add('active');
btn2.classList.add('active');
btn7.classList.add('active');
btn8.classList.add('active');
btn9.classList.add('active');
btn10.classList.add('active');
btn11.classList.add('active')
btn12.classList.add('active')
btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    } else {
        btn3.classList.add('active');
        btn3.classList.remove('bluebutton')
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn4.addEventListener('click', function(){
    const isActive = btn4.classList.contains('active');
    if (isActive) {
        btn4.classList.remove('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn4.classList.add('bluebutton')
        btn1.classList.add('active');
        btn2.classList.add('active');
btn3.classList.add('active');

btn5.classList.add('active');
btn6.classList.add('active');
btn7.classList.add('active');
btn8.classList.add('active');
btn9.classList.add('active');
btn10.classList.add('active');
btn11.classList.add('active')
btn12.classList.add('active')
btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    } else {
        btn4.classList.add('active');
        btn4.classList.remove('bluebutton')
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn5.addEventListener('click', function(){
    const isActive = btn5.classList.contains('active');
    if (isActive) {
        btn5.classList.remove('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn5.classList.add('bluebutton')
        btn1.classList.add('active');
        btn2.classList.add('active');
btn3.classList.add('active');
btn4.classList.add('active');

btn6.classList.add('active');
btn7.classList.add('active');
btn8.classList.add('active');
btn9.classList.add('active');
btn10.classList.add('active');
btn11.classList.add('active')
btn12.classList.add('active')
btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    } else {
        btn5.classList.add('active');
        btn5.classList.remove('bluebutton')
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})  
btn6.addEventListener('click', function(){
    const isActive = btn6.classList.contains('active');
    if (isActive) {
        btn6.classList.remove('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn6.classList.add('bluebutton')
        btn1.classList.add('active');
        btn2.classList.add('active');
btn3.classList.add('active');
btn4.classList.add('active');
btn5.classList.add('active');

btn7.classList.add('active');
btn8.classList.add('active');
btn9.classList.add('active');
btn10.classList.add('active');
btn11.classList.add('active')
btn12.classList.add('active')
btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
        
    } else {
        btn6.classList.add('active');
        btn6.classList.remove('bluebutton')
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')      
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn7.addEventListener('click', function(){
    const isActive = btn7.classList.contains('active');
    if (isActive) {
        btn7.classList.remove('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn7.classList.add('bluebutton')
        btn1.classList.add('active');
        btn2.classList.add('active');
btn3.classList.add('active');
btn4.classList.add('active');
btn5.classList.add('active');
btn6.classList.add('active');
btn8.classList.add('active');
btn9.classList.add('active');
btn10.classList.add('active');
btn11.classList.add('active')
btn12.classList.add('active')
btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    } else {
        btn7.classList.add('active');
        btn7.classList.remove('bluebutton')
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})  
btn8.addEventListener('click', function(){
    const isActive = btn8.classList.contains('active');
    if (isActive) {
        btn8.classList.remove('active');
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn8.classList.add('bluebutton')
        btn1.classList.add('active');
        btn2.classList.add('active');
btn3.classList.add('active');
btn4.classList.add('active');
btn5.classList.add('active');
btn6.classList.add('active');
btn7.classList.add('active')
btn9.classList.add('active');
btn10.classList.add('active');
btn11.classList.add('active')
btn12.classList.add('active')
btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    
    } else {
        btn8.classList.add('active');
        btn8.classList.remove('bluebutton')
        btn2.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})  
btn9.addEventListener('click', function(){ 
    const isActive = btn9.classList.contains('active');
    if (isActive) {
        btn9.classList.remove('active'); // 자신만 active 클래스 지우기
        btn2.classList.remove('bluebutton') //자신을 제외한 모두의 bluebutton 클래스 지우기
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn9.classList.add('bluebutton') //자신만 bluebutton 클래스 추가하기
        btn2.classList.add('active'); //자신을 제외한 모두의 active 클래스 추가하기
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn1.classList.add('active');
        btn10.classList.add('active');
        btn11.classList.add('active')
        btn12.classList.add('active')
        btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    }
     else {
        btn9.classList.add('active'); // 자신만 active 클래스 추가하기
        btn9.classList.remove('bluebutton') // 모두의 bluebutton 클래스 지우기
        btn2.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn10.addEventListener('click', function(){ 
    const isActive = btn10.classList.contains('active');
    if (isActive) {
        btn10.classList.remove('active'); // 자신만 active 클래스 지우기
        btn2.classList.remove('bluebutton') //자신을 제외한 모두의 bluebutton 클래스 지우기
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn10.classList.add('bluebutton') //자신만 bluebutton 클래스 추가하기
        btn2.classList.add('active'); //자신을 제외한 모두의 active 클래스 추가하기
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn9.classList.add('active');
        btn1.classList.add('active');
        btn11.classList.add('active')
        btn12.classList.add('active')
        btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    }
     else {
        btn10.classList.add('active'); // 자신만 active 클래스 추가하기
        btn10.classList.remove('bluebutton') // 모두의 bluebutton 클래스 지우기
        btn2.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn11.addEventListener('click', function(){ 
    const isActive = btn11.classList.contains('active');
    if (isActive) {
        btn11.classList.remove('active'); // 자신만 active 클래스 지우기
        btn2.classList.remove('bluebutton') //자신을 제외한 모두의 bluebutton 클래스 지우기
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn11.classList.add('bluebutton') //자신만 bluebutton 클래스 추가하기
        btn2.classList.add('active'); //자신을 제외한 모두의 active 클래스 추가하기
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn9.classList.add('active');
        btn10.classList.add('active');
        btn1.classList.add('active');
        btn12.classList.add('active');
        btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = ''
    }
     else {
        btn11.classList.add('active'); // 자신만 active 클래스 추가하기
        btn11.classList.remove('bluebutton') // 모두의 bluebutton 클래스 지우기
        btn2.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn12.addEventListener('click', function(){ 
    const isActive = btn12.classList.contains('active');
    if (isActive) {
        btn12.classList.remove('active'); // 자신만 active 클래스 지우기
        btn2.classList.remove('bluebutton') //자신을 제외한 모두의 bluebutton 클래스 지우기
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        btn12.classList.add('bluebutton') //자신만 bluebutton 클래스 추가하기
        btn2.classList.add('active'); //자신을 제외한 모두의 active 클래스 추가하기
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn9.classList.add('active');
        btn10.classList.add('active');
        btn11.classList.add('active')
        btn1.classList.add('active')
        btn13.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML= ''
    }
     else {
        btn12.classList.add('active'); // 자신만 active 클래스 추가하기
        btn12.classList.remove('bluebutton') // 모두의 bluebutton 클래스 지우기
        btn2.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn13.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
btn13.addEventListener('click', function(){ 
    const isActive = btn13.classList.contains('active');
    if (isActive) {
        btn13.classList.remove('active'); // 자신만 active 클래스 지우기
        btn2.classList.remove('bluebutton') //자신을 제외한 모두의 bluebutton 클래스 지우기
        btn3.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        btn13.classList.add('bluebutton') //자신만 bluebutton 클래스 추가하기
        btn2.classList.add('active'); //자신을 제외한 모두의 active 클래스 추가하기
        btn3.classList.add('active');
        btn4.classList.add('active');
        btn5.classList.add('active');
        btn6.classList.add('active');
        btn7.classList.add('active');
        btn8.classList.add('active');
        btn9.classList.add('active');
        btn10.classList.add('active');
        btn11.classList.add('active')
        btn12.classList.add('active')
        btn1.classList.add('active')
        const element = document.getElementById('container');
        element.style.display = 'block'
        element.innerHTML = "미완성"
    }
     else {
        btn13.classList.add('active'); // 자신만 active 클래스 추가하기
        btn13.classList.remove('bluebutton') // 모두의 bluebutton 클래스 지우기
        btn2.classList.remove('bluebutton')
        btn3.classList.remove('bluebutton')
        btn7.classList.remove('bluebutton')
        btn8.classList.remove('bluebutton')
        btn4.classList.remove('bluebutton')
        btn5.classList.remove('bluebutton')
        btn6.classList.remove('bluebutton')
        btn9.classList.remove('bluebutton')
        btn10.classList.remove('bluebutton')
        btn11.classList.remove('bluebutton')
        btn12.classList.remove('bluebutton')
        btn1.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.style.display = 'none'
        element.innerHTML = ""
    }
})
init.addEventListener('click', function(){
    const isActive = init.classList.contains('active');
    if(isActive){
        init.classList.remove('active');
        init.classList.add('bluebutton');
        const code = document.querySelector('#code');
        code.style.display = 'block'
        code.innerHTML = '#!/usr/bin/env pybricks-micropython<br>from pybricks.hubs import EV3Brick<br>from pybricks.ev3devices import (Motor, TouchSensor, ColorSensor,<br>                             InfraredSensor, UltrasonicSensor, GyroSensor)<br>from pybricks.parameters import Port, Stop, Direction, Button, Color<br>from pybricks.tools import wait, StopWatch, DataLog<br>from pybricks.robotics import DriveBase<br>from pybricks.media.ev3dev import SoundFile, ImageFile<br># This program requires LEGO EV3 MicroPython v2.0 or higher.<br># Click "Open user guide" on the EV3 extension tab for more information.<br># Create your objects here.<br>ev3 = EV3Brick()<br># Write your program here.<br>x = 72 # 전체 길이 144<br>y = 48 # 전체 길이 96<br>while True:<br>ev3.screen.draw_text(x, y, "JWH", Color.BLACK)<br> if ev3.buttons.pressed() == [Button.LEFT]:<br>   ev3.screen.clear()<br>    if x<=0:<br>       x = 0<br>  else:<br>       x = x-0.1<br> elif ev3.buttons.pressed() == [Button.RIGHT]:<br>   ev3.screen.clear()<br>   if x>=144:    <br>       x = 144<br>   else:<br>        x = x+0.1<br>  elif ev3.buttons.pressed() == [Button.UP]:<br>   ev3.screen.clear()<br>   if y<=0:<br>       y = 0<br>   else: <br>       y = y-0.1<br>  elif ev3.buttons.pressed () == [Button.DOWN]:<br>    ev3.screen.clear()<br>   if y>=96:<br>       y = 96<br>    else:<br>       y = y+0.1<br>  else:<br>   ev3.screen.draw_text(x, y, "JWH", Color.BLACK)'
    }
    else{
        init.classList.add('active')
        init.classList.remove('bluebutton')
        const code = document.querySelector('#code');
        code.style.display = 'none'
    }
})