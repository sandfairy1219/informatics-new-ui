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
        const element = document.getElementById('container');
        element.innerHTML = "<div>#include <stdio.h><br>main(){<br>int n, a;    *p.137 활동1*<br>scanf(%d%d, &n, &a);<br>printf(%d+%d=%d\n, n, a, n+a);<br>printf(%d-%d=%d\n, n, a, n-a);<br>printf(%d*%d=%d\n, n, a, n*a);<br>printf(%d/%d=%d\n, n, a, n/a);<br>printf(%d% %%d=%d\n, n, a, n%a);<br>int a, n;    *p.137 활동2*  <br>scanf(%d%d, &a, &n);  <br>printf(넒이 = %d, a*n/2);<br>int n ;p.137 활동3  <br>scanf(%d, &n);    <br>printf(넓이 = %1lf, n*n*3.14);<br>}</div>"
    
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "<div>#include <stdio.h> <br>main() <br>{ <br>int a, b; <br>freopen(input.txt, r, stdin); <br>scanf(%d%d, &a, &b); <br>printf(%d\n, a+b);   <br>}   </div>";
    
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "<div>#include <stdio.h> <br>main() <br>{<br>int c;  <br>float a;    <br>scanf(%d, &c);    <br>freopen(input.txt, r, stdin);   <br>scanf(%f, &a);    <br>printf(%lf\n, a*c*c); <br>}   <br></div>";
    
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream> <br>main()  <br>                                 {<br>int n;												//p.144 실습1<br> scanf(%d, &n); <br>if(n>=10)<br>printf(성공);<br></br>int n;												//p.145 실습2 <br></br>scanf(%d, &n);<br></br>if(n>=10)<br></br>printf(성공);<br></br>if(n<10)<br></br>printf(실패); <br></br>int n; 												//p.146 실습3 <br></br>scanf(%d, &n);      				<br></br>				 if(n>=10)<br></br>printf(성공);<br></br>else<br></br>printf(실패);<br></br>    int n;												//p.146 실습4 % 응용 <br></br>scanf(%d, &n);<br></br>if(n>=80&&n<=100)<br></br>printf(성공);else if(n>100)<br></br>printf(오류입니다); <br></br>else <br></br>printf(실패);<br></br>        };"
    
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream> <br>main()  <br>                                 {<br> char n;<br></br>scanf(%c, &n);<br></br>if(n == 'A')<br></br>printf(good good);<br></br>else if(n == 'B')<br></br>printf(good);<br></br>else if(n == 'C')<br></br>printf(god);<br></br>else<br></br>printf(oh my god);<br></br>}"
    
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = " #include <iostream> <br>main(){<br>int n;                               // p.147 활동 1 <br> scanf(%d, &n);<br> if(n%2 == 0)<br>  printf(짝수입니다);<br>   else<br>  printf(홀수입니다);        <br>   int n;							  	// P.148 활동2 <br>   scanf(%d, &n);<br>   if(n ==2)<br>   printf(바위);<br>   else if(n==3)<br>   printf(보); <br>  else if (n==1)<br>  printf(가위);<br>   else <br>  printf(다시 입력);<br>   int n;                             // p.149 실습5 <br>   scanf(%d, &n)<br>   if(n>=90)<br>    printf(A);<br>    if (n<90 && n>=80)<br>    printf(B);<br>  if (n<80 && n>=70)<br>   printf(C);<br>   if(n<70)<br>     printf(F)<br>   int n;                            // p.150 실습6 <br>   scanf(%d, &n)<br>   if(n>=90)<br>   printf(A);<br>   else if (n>=80)<br>   printf(B);<br>   else if(n>=70)<br>   printf(C);<br>  else <br>  printf(F);<br>   }"
    
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream><br>main()<br>{<br> int n ;<br>  scanf(%d, &n);<br>    if(n>=3&&n<=5)<br>   printf(봄);<br>  else if(n>=6&&n<=8)<br>  printf(여름);<br>  else if(n>=9 &&n<=11)<br>  printf(가을);<br> else<br> printf(겨울);<br>}"
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream><br>main()<br>{<br>  int a =1;<br>  while(a<=100)<br>{<br>  printf(%d\n, a);<br>    a = a+1;<br>}<br> "
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream><br> main()<br>   {<br>       int a =1;<br>     for(a=1;a<=100;a++)<br>      printf(%d\n, a);<br>    }"
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream><br> main()<br>  {<br>     int a;<br>   for (a=1;a<=100;a++)<br>   {<br>      if(a%2 == 0)<br>     printf(%d\n, a);<br>  }"
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "#include <iostream><br> main()<br> {<br>   int a;                                 // p.154 1번<br>   int i;<br>   scanf(%d, &a);<br>   for (i = 1;i<=a;i++)<br>   {<br>      printf%d\n, i);<br>   }<br>   int a;                                 // p.154 2번<br>    int i;<br>    scanf(%d, &a);<br>    for (i = 1;i<=a;i++)<br>    {<br>        if(a%i == 0)<br>        printf(%d\n, i);<br>    }<br>    int a, i;                            //p.154 3번<br>    scanf(%d, &a);<br>   for (i = a;i>=1;i--)<br>   {<br>       if(a%i ==0)<br>      printf(%d\n, i);<br>  }<br> }"
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
        const element = document.getElementById('container');
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
        const element = document.getElementById('container');
        element.innerHTML = "미완성"
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
        const element = document.getElementById('container');
        element.innerHTML = ""
    }
})

const rawcode = document.querySelector('#rawcode')
rawcode.addEventListener('click', function(){
    location.href = 'https://github.com/sandfairy1219/informatics-new-ui'
})
const exe = document.querySelector('#exe')
exe.addEventListener('click', function(){
    location.href = 'https://www.mediafire.com/file/m06j9lmcgw3xibq/main.zip/file'
})
const cat = document.querySelector('#cat')
let ca = document.querySelector('#ca')
cat.addEventListener('click',function(){
    if(ca.style.display !== 'none'){
        ca.style.display = 'none'
    }else{
        ca.style.display = 'block'
    }

})
const line = document.querySelector('#line')
let container = document.querySelector('#container')
line.addEventListener('click', function(){
    
    const isActive = line.classList.contains('active');
    if(isActive)
    {
        line.classList.remove('active'); //자신만 active 클래스 지우기
        line.classList.add('bluebutton'); //자신만 bluebutton 클래스 추가하기
        text.style.border = '0.05cm solid black'
        container.style.border = '0.05cm solid black';
    }
    else{
        line.classList.add('active'); //자신만 active 클래스 추가하기
        line.classList.remove('bluebutton'); // 모두의 bluebutton 클래스 지우기
        text.style.border = 'none'
        container.style.border =  'none';
    }
})
const option = document.querySelector('#options')
let text = document.querySelector('#optext')
option.addEventListener('change', function(){
    if(option.value =='1'){
        text.innerHTML = ''
    }
    else if(option.value == '2'){
        text.innerHTML = '<div>int - 정수</div> <br> <div>char - 문자</div> <br> <div>float, double -소수</div>'
    }
    else if(option.value == '3'){
        text.innerHTML = '<div>for 반복분 - for(변수값설정;조건문;증감식)</div><br><div>while 반복문 = 변수값설정-while(조건문){증감식, 명령문}</div>'
    }
    else if(option.value == '4'){
        text.innerHTML = '<div>if (조건문) {명령문}</div> <br><div>else if (조건문) {명령문} -if가 아닐때 실행 </div> <br><div>else {명령문} 아무것도 적용되지 않을때 실행</div>'
    }
    else if(option.value == '5'){
        text.innerHTML = '<div>입력 - 변수선언 scanf("%d", &변수)</div> <br><div>출력 - 변수 선언 printf("%d", 변수) %d 뒤에 슬래시n 넣으면 문단 넘기기</div>'
    }
    else if(option.value =='6'){
        text.innerHTML = '<div>#include 뒤에 쓰는 헤더파일 포함 명령문은 C일떄 stdio.h, C++일땐 iostream (둘 다 인풋 아웃풋 역할 갖고있음)</div><br><div>모든 명령문 뒤엔 ; 붙히기</div><br><div>조건문은 소괄호, 명령문은 대괄호 쓰기</div>'
    }
    else{
        text.innerHTML = '잘못된 요청입니다.'
    }
})