const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
let toggle = document.querySelector('#toggle');
btn1.addEventListener('click', function(){
    const isActive = btn1.classList.contains('active');
    if (isActive) {
        btn1.classList.remove('active');
        btn1.classList.add('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = "<div>#include <stdio.h><br>main(){<br>int n, a;    *p.137 활동1*<br>scanf(%d%d, &n, &a);<br>printf(%d+%d=%d\n, n, a, n+a);<br>printf(%d-%d=%d\n, n, a, n-a);<br>printf(%d*%d=%d\n, n, a, n*a);<br>printf(%d/%d=%d\n, n, a, n/a);<br>printf(%d% %%d=%d\n, n, a, n%a);<br>int a, n;    *p.137 활동2*  <br>scanf(%d%d, &a, &n);  <br>printf(넒이 = %d, a*n/2);<br>int n ;p.137 활동3  <br>scanf(%d, &n);    <br>printf(넓이 = %1lf, n*n*3.14);<br>}</div>"
    
    } else {
        btn1.classList.add('active');
        btn1.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = ""
    }
})
btn2.addEventListener('click', function(){
    const isActive = btn2.classList.contains('active');
    if (isActive) {
        btn2.classList.remove('active');
        btn2.classList.add('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = "<div>#include <stdio.h> <br>main() <br>{ <br>int a, b; <br>freopen(input.txt, r, stdin); <br>scanf(%d%d, &a, &b); <br>printf(%d\n, a+b);   <br>}   </div>";
    
    } else {
        btn2.classList.add('active');
        btn2.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = ""
    }
})
btn3.addEventListener('click', function(){
    const isActive = btn3.classList.contains('active');
    if (isActive) {
        btn3.classList.remove('active');
        btn3.classList.add('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = "<div>#include <stdio.h> <br>main() <br>{<br>int c;  <br>float a;    <br>scanf(%d, &c);    <br>freopen(input.txt, r, stdin);   <br>scanf(%f, &a);    <br>printf(%lf\n, a*c*c); <br>}   <br></div>";
    
    } else {
        btn3.classList.add('active');
        btn3.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = ""
    }
})
btn4.addEventListener('click', function(){
    const isActive = btn4.classList.contains('active');
    if (isActive) {
        btn4.classList.remove('active');
        btn4.classList.add('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream> <br>main()  <br>                                 {<br>int n;												//p.144 실습1<br> scanf(%d, &n); <br>if(n>=10)<br>printf(성공);<br></br>int n;												//p.145 실습2 <br></br>scanf(%d, &n);<br></br>if(n>=10)<br></br>printf(성공);<br></br>if(n<10)<br></br>printf(실패); <br></br>int n; 												//p.146 실습3 <br></br>scanf(%d, &n);      				<br></br>				 if(n>=10)<br></br>printf(성공);<br></br>else<br></br>printf(실패);<br></br>    int n;												//p.146 실습4 % 응용 <br></br>scanf(%d, &n);<br></br>if(n>=80&&n<=100)<br></br>printf(성공);else if(n>100)<br></br>printf(오류입니다); <br></br>else <br></br>printf(실패);<br></br>        };"
    
    } else {
        btn4.classList.add('active');
        btn4.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = ""
    }
})
btn5.addEventListener('click', function(){
    const isActive = btn5.classList.contains('active');
    if (isActive) {
        btn5.classList.remove('active');
        btn5.classList.add('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream> <br>main()  <br>                                 {<br> char n;<br></br>scanf(%c, &n);<br></br>if(n == 'A')<br></br>printf(good good);<br></br>else if(n == 'B')<br></br>printf(good);<br></br>else if(n == 'C')<br></br>printf(god);<br></br>else<br></br>printf(oh my god);<br></br>}"
    
    } else {
        btn5.classList.add('active');
        btn5.classList.remove('bluebutton')
        const element = document.getElementById('container');
        element.innerHTML = ""
    }
})  
const rawcode = document.querySelector('#rawcode')
rawcode.addEventListener('click', function(){
    location.href = 'https://github.com/sandfairy1219/informatics-new-ui'
})
