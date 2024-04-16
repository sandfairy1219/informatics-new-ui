const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
let toggle = document.querySelector('#toggle');
function remove(){
    const element = document.getElementById('container');
    element.innerHTML = ""
}
function changecolor1(){
    btn1.style.backgroundColor = "rgb(190, 229, 255)";
    btn1.style.border = "0.05cm solid";
}
function returncolor1(){
    btn1.style.backgroundColor = "white"
    btn1.style.border = "0.05cm solid";
}
function changecolor2(){
    btn2.style.backgroundColor = "rgb(190, 229, 255)";
    btn2.style.border = "0.05cm solid";
}
function returncolor2(){
    btn2.style.backgroundColor = "white"
    btn2.style.border = "0.05cm solid";
}
function changecolor3(){
    btn3.style.backgroundColor = "rgb(190, 229, 255)";
    btn3.style.border = "0.05cm solid";
}
function returncolor3(){
    btn3.style.backgroundColor = "white";
    btn3.style.border = "0.05cm solid";
}
function changecolor4(){
    btn4.style.backgroundColor = "rgb(190, 229, 255)";
    btn4.style.border = "0.05cm solid";
}
function returncolor4(){
    btn4.style.backgroundColor = "white";
    btn4.style.border = "0.05cm solid";
}
function changecolor5(){
    btn5.style.backgroundColor = "rgb(190, 229, 255)";
    btn5.style.border = "0.05cm solid";
}
function returncolor5(){
    btn5.style.backgroundColor = "white";
    btn5.style.border = "0.05cm solid";
}

function setInnerHTML()  {
    const element = document.getElementById('container');
    element.innerHTML = "<div>#include <stdio.h><br>main(){<br>int n, a;    *p.137 활동1*<br>scanf(%d%d, &n, &a);<br>printf(%d+%d=%d\n, n, a, n+a);<br>printf(%d-%d=%d\n, n, a, n-a);<br>printf(%d*%d=%d\n, n, a, n*a);<br>printf(%d/%d=%d\n, n, a, n/a);<br>printf(%d% %%d=%d\n, n, a, n%a);<br>int a, n;    *p.137 활동2*  <br>scanf(%d%d, &a, &n);  <br>printf(넒이 = %d, a*n/2);<br>int n ;p.137 활동3  <br>scanf(%d, &n);    <br>printf(넓이 = %1lf, n*n*3.14);<br>}</div>"
}
function setInnerHTML2()  {
    const element = document.getElementById('container');
    element.innerHTML = "<div>#include <stdio.h> <br>main() <br>{ <br>int a, b; <br>freopen(input.txt, r, stdin); <br>scanf(%d%d, &a, &b); <br>printf(%d\n, a+b);   <br>}   </div>";
}  
function setInnerHTML3()  {
    const element = document.getElementById('container');
    element.innerHTML = "<div>#include <stdio.h> <br>main() <br>{<br>int c;  <br>float a;    <br>scanf(%d, &c);    <br>freopen(input.txt, r, stdin);   <br>scanf(%f, &a);    <br>printf(%lf\n, a*c*c); <br>}   <br></div>";
} 
function setInnerHTML4()  {
    const element = document.getElementById('container');
    element.innerHTML = "#include <iostream> <br>main()  <br>                                 {<br>int n;												//p.144 실습1<br> scanf(%d, &n); <br>if(n>=10)<br>printf(성공);<br></br>int n;												//p.145 실습2 <br></br>scanf(%d, &n);<br></br>if(n>=10)<br></br>printf(성공);<br></br>if(n<10)<br></br>printf(실패); <br></br>int n; 												//p.146 실습3 <br></br>scanf(%d, &n);      				<br></br>				 if(n>=10)<br></br>printf(성공);<br></br>else<br></br>printf(실패);<br></br>    int n;												//p.146 실습4 % 응용 <br></br>scanf(%d, &n);<br></br>if(n>=80&&n<=100)<br></br>printf(성공);else if(n>100)<br></br>printf(오류입니다); <br></br>else <br></br>printf(실패);<br></br>        };"
}
function setInnerHTML5()  {
    const element = document.getElementById('container');
    element.innerHTML = "#include <iostream> <br>main()  <br>                                 {<br> char n;<br></br>scanf(%c, &n);<br></br>if(n == 'A')<br></br>printf(good good);<br></br>else if(n == 'B')<br></br>printf(good);<br></br>else if(n == 'C')<br></br>printf(god);<br></br>else<br></br>printf(oh my god);<br></br>}"
}    
const rawcode = document.querySelector('#rawcode')
rawcode.addEventListener('click', function(){
    location.href = 'https://github.com/sandfairy1219/informatics-new-ui'
})
