
var ctx; // 캔버스 콘텍스트 저장
var canvas1;
var cwidth=250;
var cheight=400;
var i;

var phone_x = 320; //액정 x 위치
var phone_y = 130; //액정 y 위치
var phone_width=250; //액정 너비
var phone_height=400; //액정 높이
var dotrad=23; //점의 반경 저장

var dotx = []; //도트 x 위치 저장 
var doty = []; //도트 y 위치 저장

var click_count=0;  //비밀번호 카운트 
var password =[]; // 비밀번호 순서대로 저장
var number; 

var mail_page=0; //비밀번호를 맞춘 후 페이지 계속 이동 
var mail_count=0; 

var first = 0; //사용자가 계속 핸드폰만 누르지 못하게 제지
var show_chat_count = 0; //처음 클릭했을 때 카운트
var show_count=-1; //처음 클릭했을 때 카운트 


//(320,110)(320,500)
//(570,110)(570,500)

  function create_pattern() //화면에 패턴 생성
  {
     ctx=document.getElementById("canvas").getContext("2d");
     /*
     7 8 9
     4 5 6
     1 2 3
     */
    
     ctx.fillRect(phone_x, phone_y-23, phone_width+5, phone_height);
     ctx.clearRect(phone_x+50, phone_y+10, 165,30);
	 
	 //7번 자리 위치
     ctx.fillStyle="#fff"
     ctx.beginPath();
     dotx[7]=phone_x+40;
     doty[7]=phone_y+80;
     ctx.arc(dotx[7], doty[7], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     //8번 자리 위치
      
     ctx.beginPath();
     dotx[8]=(phone_width*0.5)+phone_x;
     doty[8]=(phone_height*0.5)+phone_y-120;
     ctx.arc(dotx[8], doty[8], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
     //9번 자리 위치
    ctx.beginPath();
     dotx[9]=phone_width+phone_x-40;
     doty[9]=phone_y+80;
     ctx.arc(dotx[9], doty[9], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
	 
	
     //4번 자리 위치
     ctx.beginPath();
     dotx[4]=phone_x+40;
     doty[4]=(phone_height*0.5)+phone_y;
     ctx.arc(dotx[4], doty[4], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
     //정 중앙 위치(5번 자리 위치)
     ctx.beginPath();
     dotx[5]=(phone_width*0.5)+phone_x;
     doty[5]=(phone_height*0.5)+phone_y;
     ctx.arc(dotx[5], doty[5], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
     //6번 자리 위치
     ctx.beginPath();
     dotx[6]=(phone_width*0.5)+phone_x+85;
     doty[6]=(phone_height*0.5)+phone_y;
     ctx.arc(dotx[6], doty[6], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
     //1번 자리 위치
     ctx.beginPath();
     dotx[1]=(phone_width*0.5)+phone_x-85;
     doty[1]=(phone_height*0.5)+phone_y+120;
     ctx.arc(dotx[1], doty[1], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
     //2번 자리 위치
     ctx.beginPath();
     dotx[2]=(phone_width*0.5)+phone_x;
     doty[2]=(phone_height*0.5)+phone_y+120;
     ctx.arc(dotx[2], doty[2], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
     //3번 자리 위치
     ctx.beginPath();
     dotx[3]=(phone_width*0.5)+phone_x+85;
     doty[3]=(phone_height*0.5)+phone_y+120;
     ctx.arc(dotx[3], doty[3], dotrad, 0, Math.PI*2, true);
     ctx.closePath();
     ctx.fill();
     
	  for(i=1; i<10; i++)
	  {
	    // 왼쪽 귀
        ctx.beginPath();
        ctx.arc(dotx[i]-20,doty[i]-20,10,0,Math.PI*2,true);
        ctx.fill();
        // 오른쪽 귀
        ctx.beginPath();
        ctx.arc(dotx[i]+20,doty[i]-20,10,0,Math.PI*2,true);
        ctx.fill();
	  }
  }
  
   function phoneStart() //처음 시작 화면
   {
      ctx = document.getElementById('canvas').getContext('2d'); 
      canvas1 = document.getElementById('canvas');
     // canvas1.style.display = "block";
      
      var mx;
      var my;

      create_pattern(); //아홉개의 원을 생성
      
        null_text2();
        ctx.fillStyle = "#fff";
        ctx.font = "20px arial";
        ctx.textBaseline = "top";
        ctx.fillText(" __ __ __ __ __",phone_x+60, phone_y+10);

       if(first == 0)
      {
        ctx.fillText("핸드폰에 비밀번호가 걸려있다.",phone_x+phone_width+45, phone_y+35);
        setTimeout(null_text,1000);
        setTimeout(show_count = 0, 1000);
        password_show(); //비밀번호 입력 시 보여 줌
      
        canvas1.onmousedown = function(e)
        {
          //대화창 보여줌
               if(show_count == 0)
               {
                  setTimeout(show_chat,1000);
               }
               else if(show_count == 1)
               {
                  setTimeout(show_chat,1000);
               }
               else
               {
                  setTimeout(show_chat,1000);
               }
          
         
           //displayMap();
        }
      }
      else if(first == 1)
      {
        
           ctx.fillText("핸드폰에 비밀번호가 걸려있다.",phone_x+phone_width+45, phone_y+35);
           setTimeout(null_text,1300);
           password_show(); //비밀번호 입력 시 보여 줌
         
         canvas1.onmousedown = function(e)
        {
            mx = e.offsetX ;
            my = e.offsetY ;
            
            if(mx<phone_x)
            {
           // alert("잘못 된 영역 눌림");
            }
            else if(my<phone_y)
            {
              // alert("잘못 된 영역 눌림");
            }
            else if(mx>phone_x+phone_width)
            {
              // alert("잘못 된 영역 눌림");
            } 
            else if(my>phone_y+phone_height)
            {
              //   alert("잘못 된 영역 눌림");
            }
            else
            {
              if(click_count<6 && mail_page==0)
                 get_xy(mx,my);
              //alert(click_count);
              else if(mail_page==1)
                 get_mail_xy(mx,my);
              else if(mail_page==2)
                  get_mailpage_xy(mx,my);
            }
        }
      }
	  else
      {
        ctx.fillText("이럴 때가 아니야!",phone_x+phone_width+45, phone_y+35);
		ctx.fillText("얼른 교수님께 가봐야지",phone_x+phone_width+45, phone_y+75);
        setTimeout(null_text3,3000);   
        setTimeout(null_text,3000);
        canvas1.onmousedown = function(e)
        {
        
          //화면 종료 
           displayMap();
           canvas1.style.display = "none";
         }
      }
  }
 
  function get_xy(get_x,get_y)
  {
     
   if((dotx[2]-20<get_x&&dotx[2]+20>get_x) && (doty[2]+60<get_y&&doty[2]+80>get_y)) //핸드폰에서 빠져나가기
    {
       //   alert("핸드폰에서 벗어나기"); 
         displayMap();
          canvas1.style.display = "none";     
    }
     
   if(click_count < 6)
   {  
     if((dotx[1]-20<get_x&&dotx[1]+20>get_x) && (doty[1]-20<get_y&&doty[1]+20>get_y))
     {
      //alert("1번이 눌렸습니다.");
      click_count++;
      number = 1;
      click_point();
    
     }
     else if((dotx[2]-20<get_x&&dotx[2]+20>get_x) && (doty[2]-20<get_y&&doty[2]+20>get_y))
     {
       //alert("2번이 눌렷습니다.");
       click_count++;
       number = 2;
       click_point();
     }
     else if((dotx[3]-20<get_x&&dotx[3]+20>get_x) && (doty[3]-20<get_y&&doty[3]+20>get_y))
     {
       //alert("3번이 눌렷습니다.");
       click_count++;
       number = 3;
       click_point();
     }
     else if((dotx[4]-20<get_x&&dotx[4]+20>get_x) && (doty[4]-20<get_y&&doty[4]+20>get_y))
     {
       //alert("4번이 눌렷습니다.");
       click_count++;
       number = 4;
       click_point();
     }
     else if((dotx[5]-20<get_x&&dotx[5]+20>get_x) && (doty[5]-20<get_y&&doty[5]+20>get_y))
     {
       //alert("5번이 눌렷습니다.");
       click_count++;
       number = 5;
       click_point();
     }
     else if((dotx[6]-20<get_x&&dotx[6]+20>get_x) && (doty[6]-20<get_y&&doty[6]+20>get_y))
     {
       //alert("6번이 눌렷습니다.");
       click_count++;
       number = 6;
       click_point();
     }
     else if((dotx[7]-20<get_x&&dotx[7]+20>get_x) && (doty[7]-20<get_y&&doty[7]+20>get_y))
     {
       //alert("7번이 눌렷습니다.");
       click_count++;
       number = 7;
       click_point();
     }
     else if((dotx[8]-20<get_x&&dotx[8]+20>get_x) && (doty[8]-20<get_y&&doty[8]+20>get_y))
     {
       //alert("8번이 눌렷습니다.");
       click_count++;
       number = 8;
       click_point();
     }
     else if((dotx[9]-20<get_x&&dotx[9]+20>get_x) && (doty[9]-20<get_y&&doty[9]+20>get_y))
     {
       //alert("9번이 눌렷습니다.");
       click_count++;
       number = 9;
       click_point();
     }
    }
  }
  
  function click_point() //비밀번호 입력 시 무슨 번호를 눌렀는지 저장
  {
    var password_c;
    
    switch(click_count)
    {
      case 1 : password[1] = number; password_show(number);  break;
      case 2 : password[2] = number; password_show(number); break;
      case 3 : password[3] = number; password_show(number); break;
      case 4 : password[4] = number; password_show(number); break;
      case 5 :{
                 password[5] = number; password_show(number);
           password_c=password[1].toString()+password[2].toString()+
		   password[3].toString()+password[4].toString()+password[5].toString();
                 password_check(password_c);
           break;
               }
    }
  }
  
  function password_show(number_n) //비밀번호 입력 시 각 자리 출력
  { //password 창
  
      ctx.fillStyle = "#fff";
      ctx.font = "20px arial";
      ctx.textBaseline = "top";
  
       switch(click_count) 
      {   //문자 출력
        case 1: ctx.fillText("*",phone_x+70, phone_y+10);
             break;
             
        case 2: ctx.fillText("*",phone_x+100, phone_y+10);
             break;
             
        case 3: ctx.fillText("*",phone_x+127, phone_y+10);
             break;
                
        case 4: ctx.fillText("*",phone_x+155, phone_y+10);
             break;
             
        case 5: ctx.fillText("*",phone_x+183, phone_y+10);
             break;
             
        /*  //숫자 출력   
        case 1: ctx.fillText(password[1].toString(),phone_x+70, phone_y+10);
             break;
             
        case 2: ctx.fillText(password[2].toString(),phone_x+100, phone_y+10);
             break;
             
        case 3: ctx.fillText(password[3].toString(),phone_x+127, phone_y+10);
             break;
                
        case 4: ctx.fillText(password[4].toString(),phone_x+155, phone_y+10);
             break;
             
        case 5: ctx.fillText(password[5].toString(),phone_x+183, phone_y+10);
             break;
        */
      
        }
        
  }
  
  function password_check(passwd)
  {
    if(passwd == "25698") //비밀번호 입력 성공
    {
      ctx.clearRect(phone_x+50, phone_y+10, 165,30);
      mail_page = 1;
      ctx.fillText("비밀번호를 푸는 데 성공했다.",phone_x+phone_width+45, phone_y+35);
      setTimeout(null_text,1300);
      setTimeout(draw_screen,1300);
    }     
    else //비밀번호 입력 오류
    {   
      ctx.fillStyle="#000"
      ctx.fillRect(phone_x+phone_width+40, phone_y+30, 300, 30);
      ctx.fillStyle="#fff";
      ctx.fillText("이게 아닌데..",phone_x+phone_width+45, phone_y+35);
      setTimeout(null_text, 1500);
      ctx.fillStyle="#fff";
      setTimeout(null_text2,1500);
    }  
  }
  
  function null_text() //말풍선 박스 null
  {
   ctx.fillStyle="#000"
   ctx.clearRect(phone_x+phone_width+40, phone_y+30, 300, 30);
  }
  
  function null_text2() //비밀번호 틀렸을 때 박스 null
  {
    ctx.fillStyle="#fff";
    ctx.clearRect(phone_x+50, phone_y+10, 165,30);
    ctx.fillText(" __ __ __ __ __",phone_x+60, phone_y+10);
    click_count = 0;
  }
  
  function null_text3() //말풍선 박스 null2
  {
	ctx.fillStyle="#000"
    ctx.clearRect(phone_x+phone_width+40, phone_y+70, 300, 30);	  
   }
  
  function draw_screen() //핸드폰 비밀번호 해제한 다음 화면 표시
  {
    ctx.clearRect(phone_x, phone_y-23, phone_width+5, phone_height);
    ctx.fillStyle="#444";
    ctx.fillRect(phone_x, phone_y-23, phone_width+5, phone_height);
    ctx.fillStyle="#fff"; 
   
    var imageObj = new Image(); //이미지 표시
        imageObj.onload = function() {
          ctx.drawImage(this, phone_x, phone_y-23);
        };
    
        imageObj.src = "./images/show_phone_img.jpg";
  }
  
  function get_mail_xy(get_x,get_y)
  {
    //alert("get_mail_xy");
    var mailmx=phone_x+72;
    var mailmy=phone_y+348;
    var mailsx=phone_x+122;
    var mailsy=phone_y+384;
   
     
   if((dotx[2]-20<get_x&&dotx[2]+20>get_x) && (doty[2]+60<get_y&&doty[2]+80>get_y)) //핸드폰에서 빠져나가기
    {
         // alert("핸드폰에서 벗어나기"); 
            
         displayMap();
          canvas1.style.display = "none";     
    }
   
     if(((get_x>phone_x&&get_x<phone_x+phone_width)&&(get_y>phone_y&&get_y<phone_y+phone_height))
	 &&((mailmx+10>get_x||mailsx<get_x)) && (mailmy-20>get_y||mailsy-15<get_y)) //다른 곳을 누르면 오류 메세지 출력
    { 
       ctx.fillStyle="#fff";
     //ctx.fillText("지금 다른 걸 할 때가 아니야.",phone_x+phone_width+45, phone_y+35);
	   ctx.fillText("지금 다른 걸 할 때가 아니야.",phone_x+phone_width+45, phone_y+75);
       setTimeout(null_text3,1000);   
    }
    if((mailmx+10<get_x&&mailsx>get_x) && (mailmy-20<get_y&&mailsy-15>get_y)) //문자메세지 확인
    {  
       ctx.fillStyle="#fff";
       ctx.fillText("문자를 확인해보자.",phone_x+phone_width+45, phone_y+35);
       setTimeout(null_text,1200); 
       setTimeout(mailpage,1200);
       mail_page = 2; 
    }
  }
  
  function mailpage() //메일 열기
  {
      var imageObj = new Image();
        imageObj.onload = function() {
          ctx.drawImage(this, phone_x, phone_y-23);
        };
    
        imageObj.src = "./images/message.jpg";
    
      ctx.fillStyle="#fff";
      ctx.fillText("교수님께서 문자를 보내셨다.",phone_x+phone_width+45, phone_y+35);
      setTimeout(null_text,1000); 
  }
  
  function get_mailpage_xy(get_x, get_y)
  {
       
   if((dotx[2]-20<get_x&&dotx[2]+20>get_x) && (doty[2]+60<get_y&&doty[2]+80>get_y)) //핸드폰에서 빠져나가기
    {
          //alert("핸드폰에서 벗어나기");   
         displayMap();
         canvas1.style.display = "none";     
    }
    if(mail_count == 0)
    {
      text_check();
	  setTimeout(mail_count = 1, 1700);  
    }
	else if(mail_count == 1)
	{
	  text_check();
	  setTimeout(mail_count = 2, 4000);
	} 
    else
    {
        //화면 종료
           displayMap();
           canvas1.style.display = "none";
		   first = 2;
    }
  }
  
  
  function text_check() //핸드폰 비밀번호를 해제하고 나오는 텍스트
  {
    if(mail_count == 0)
    {
      ctx.fillStyle="#fff";
      //ctx.fillText("무슨 일인지 알아봐야 겠네..",phone_x+phone_width+45, phone_y+35);
	  //ctx.fillText("무슨 일이지?",phone_x+phone_width+45, phone_y+75);
	  setTimeout(null_text3,1000);
    }
    else if(mail_count == 1)
    {
     ctx.fillStyle="#fff";
	 ctx.fillText("무슨 일이지?",phone_x+phone_width+45, phone_y+35);
     ctx.fillText("교수님께 찾아가보자.",phone_x+phone_width+45, phone_y+75);
	 setTimeout(null_text,3000);
	  setTimeout(null_text3,3000);
    }
  }
  
  
  function show_chat() //처음 핸드폰 클릭했을 때 나오는 텍스트
  {
   if(show_chat_count == 0)
    {
      ctx.fillStyle="#fff";
      ctx.fillText("가방에 내가 뭘 넣어뒀더라...",phone_x+phone_width+45, phone_y+35);
      setTimeout(null_text,1000);
      setTimeout(show_count = 1, 1000);
      setTimeout(show_chat_count = 1, 1000);
    }
    else if(show_chat_count == 1)
    {
      setTimeout(show_chout = 2, 1000);
      setTimeout(show_chat_count = 2, 1000);
   }
   else
   {
         //화면 종료
           first = 1;
           setTimeout(displayMap(),1000);
           setTimeout(canvas1.style.display = "none",1000);
    }
   
  }
  
  
  window.addEventListener("load", phoneStart, true); //페이지 로드시 핸들러 등록