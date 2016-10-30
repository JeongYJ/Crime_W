     /*이미지 객체*/ 
        var nestnet = new Array(6);
        nestnet[0] = new Image();
        nestnet[0].src = "./images/네스트넷1.jpg";
        nestnet[1] = new Image();
        nestnet[1].src = "./images/네스트넷2.jpg";
        nestnet[2] = new Image();
        nestnet[2].src = "./images/네스트넷3.jpg";
        nestnet[3] = new Image();
        nestnet[3].src = "./images/네스트넷4.jpg";
        nestnet[4] = new Image();
        nestnet[4].src = "./images/네스트넷5.jpg";
        nestnet[5] = new Image();
        nestnet[5].src = "./images/네스트넷6.jpg";

        var cabinet = new Array(3);
        cabinet[0] = new Image();
        cabinet[0].src = "./images/사물함.jpg";
        cabinet[1] = new Image();
        cabinet[1].src = "./images/사물함위.jpg";
        cabinet[2] = new Image();
        cabinet[2].src = "./images/사물함아래.jpg";

        var sammaru = new Array(5);
        sammaru[0] = new Image();
        sammaru[0].src = "./images/샘마루1.jpg";
        sammaru[1] = new Image();
        sammaru[1].src = "./images/샘마루2.jpg";
        sammaru[2] = new Image();
        sammaru[2].src = "./images/샘마루3.jpg";
        sammaru[3] = new Image();
        sammaru[3].src = "./images/샘마루4-1.jpg";
       
        var corridor = new Array(8);
        corridor[0] = new Image();
        corridor[0].src = "./images/복도1.jpg"; 
        corridor[1] = new Image();
        corridor[1].src = "./images/복도2.jpg"; 
        corridor[2] = new Image();
        corridor[2].src = "./images/복도3.jpg"; 
        corridor[3] = new Image();
        corridor[3].src = "./images/복도4.jpg"; 
        corridor[4] = new Image();
        corridor[4].src = "./images/복도5-2.jpg"; 
        corridor[5] = new Image();
        corridor[5].src = "./images/복도6.jpg"; 
        corridor[6] = new Image();
        corridor[6].src = "./images/복도7.jpg"; 
        corridor[7] = new Image();
        corridor[7].src = "./images/복도8-2.jpg"; 
        corridor[8] = new Image();
        corridor[8].src = "./images/Professor.jpg"; 

        var elevator = new Array();
        elevator[0] = new Image();
        elevator[0].src = "./images/복도5-1.jpg";


		var nestnetMap = new Array();
		var sammaruMap = new Array();
		var corridorMap = new Array();
		var cabinetMap = new Array();
		var elevatorMap = new Array();
		
		var chatMap =  new Array();
		var Professor = new Array();
		
function createMap()
{
	var i = 0;
	/*nestnet 맵 생성*/
	nestnetMap[0] = new structMap();
	nestnetMap[0].move = new Array();
	nestnetMap[0].move[0] = new move();
	nestnetMap[0].move[0].move_cor = new cooridinate(); 
	nestnetMap[0].move[0].move_cor.sx = 540;
	nestnetMap[0].move[0].move_cor.sy = 200;
	nestnetMap[0].move[0].move_cor.fx = 700;
	nestnetMap[0].move[0].move_cor.fy = 420;
//핸드폰
	nestnetMap[0].get = new Array();
	nestnetMap[0].get[0] = new get();
	nestnetMap[0].get[0].item = "phone";
	nestnetMap[0].get[0].get_cor = new cooridinate();
	nestnetMap[0].get[0].get_cor.sx = 280;
	nestnetMap[0].get[0].get_cor.sy = 470;
	nestnetMap[0].get[0].get_cor.fx = 330;
	nestnetMap[0].get[0].get_cor.fy = 500;

//가방
	nestnetMap[0].get = new Array();
	nestnetMap[0].get[1] = new get();
	nestnetMap[0].get[1].item = "bag";
	nestnetMap[0].get[1].get_cor = new cooridinate();
	nestnetMap[0].get[1].get_cor.sx = 470;
	nestnetMap[0].get[1].get_cor.sy = 378;
	nestnetMap[0].get[1].get_cor.fx = 600;
	nestnetMap[0].get[1].get_cor.fy = 570;

	
	nestnetMap[0].get[0] = new get();
	nestnetMap[0].get[0].item = "phone";
	nestnetMap[0].get[0].get_cor = new cooridinate();
	nestnetMap[0].get[0].get_cor.sx = 280;
	nestnetMap[0].get[0].get_cor.sy = 470;
	nestnetMap[0].get[0].get_cor.fx = 330;
	nestnetMap[0].get[0].get_cor.fy = 500;

	nestnetMap[0].search = new Array();
	nestnetMap[0].search[0] = new search();
	nestnetMap[0].search[1] = new search();

	nestnetMap[0].search[0].get_cor = new cooridinate();
	nestnetMap[0].search[0].get_cor.sx = 280;
	nestnetMap[0].search[0].get_cor.sy = 470;
	nestnetMap[0].search[0].get_cor.fx = 330;
	nestnetMap[0].search[0].get_cor.fy = 500;
	

	nestnetMap[0].search[1].search_cor = new cooridinate();
	nestnetMap[0].search[1].search_cor.sx = 450;
	nestnetMap[0].search[1].search_cor.sy = 378;
	nestnetMap[0].search[1].search_cor.fx = 600;
	nestnetMap[0].search[1].search_cor.fy = 570;
	
	// nestnetMap[0].search[1] = new search();
	// nestnetMap[0].search[1].search_cor = new cooridinate();
	// nestnetMap[0].search[1].search_cor.sx = 450;
	// nestnetMap[0].search[1].search_cor.sy = 378;
	// nestnetMap[0].search[1].search_cor.fx = 600;
	// nestnetMap[0].search[1].search_cor.fy = 570;


	nestnetMap[1] = new structMap();
	nestnetMap[1].move = new Array();
	nestnetMap[1].move[0] = new move();
	nestnetMap[1].move[0].move_cor = new cooridinate(); 
	nestnetMap[1].move[0].move_cor.sx = 350;
	nestnetMap[1].move[0].move_cor.sy = 400;
	nestnetMap[1].move[0].move_cor.fx = 500;
	nestnetMap[1].move[0].move_cor.fy = 530;

	nestnetMap[2] = new structMap();
	nestnetMap[2].move = new Array();
	nestnetMap[2].move[0] = new move();
	nestnetMap[2].move[1] = new move();
	nestnetMap[2].move[0].move_cor = new cooridinate(); 
	nestnetMap[2].move[1].move_cor = new cooridinate(); 

	nestnetMap[2].move[0].move_cor.sx = 80;
	nestnetMap[2].move[0].move_cor.sy = 475;
	nestnetMap[2].move[0].move_cor.fx = 250;
	nestnetMap[2].move[0].move_cor.fy = 570;

	nestnetMap[2].move[1].move_cor.sx = 345;
	nestnetMap[2].move[1].move_cor.sy = 330;
	nestnetMap[2].move[1].move_cor.fx = 400;
	nestnetMap[2].move[1].move_cor.fy = 510;

	nestnetMap[3] = new structMap();
	nestnetMap[3].move = new Array();
	nestnetMap[3].move[0] = new move();
	nestnetMap[3].move[0].move_cor = new cooridinate(); 

	nestnetMap[3].move[0].move_cor.sx = 250;
	nestnetMap[3].move[0].move_cor.sy = 480;
	nestnetMap[3].move[0].move_cor.fx = 540;
	nestnetMap[3].move[0].move_cor.fy = 570;
	
	nestnetMap[4] = new structMap();
	nestnetMap[4].move = new Array();
	nestnetMap[4].move[0] = new move();
	nestnetMap[4].move[0].move_cor = new cooridinate(); 

	nestnetMap[4].move[0].move_cor.sx = 470;
	nestnetMap[4].move[0].move_cor.sy = 440;
	nestnetMap[4].move[0].move_cor.fx = 780;
	nestnetMap[4].move[0].move_cor.fy = 600;
	
	nestnetMap[5] = new structMap();
	nestnetMap[5].move = new Array();
	nestnetMap[5].move[0] = new move();
	nestnetMap[5].move[1] = new move();
	nestnetMap[5].move[0].move_cor = new cooridinate(); 
	nestnetMap[5].move[1].move_cor = new cooridinate(); 
	
	nestnetMap[5].move[0].move_cor.sx = 0;
	nestnetMap[5].move[0].move_cor.sy = 330;
	nestnetMap[5].move[0].move_cor.fx = 200;
	nestnetMap[5].move[0].move_cor.fy = 600;

	nestnetMap[5].move[1].move_cor.sx = 200;
	nestnetMap[5].move[1].move_cor.sy = 50;
	nestnetMap[5].move[1].move_cor.fx = 540;
	nestnetMap[5].move[1].move_cor.fy = 430;
	for(i = 0; i < nestnetMap.length; i++)
		{
			nestnetMap[i].img = new Image();
			nestnetMap[i].img.src = nestnet[i].src;
		}

	sammaruMap[0] = new structMap();
	sammaruMap[0].move = new Array();
	sammaruMap[0].move[0] = new move();
	sammaruMap[0].move[0].move_cor = new cooridinate(); 
	sammaruMap[0].move[0].move_cor.sx = 390;
	sammaruMap[0].move[0].move_cor.sy = 250;
	sammaruMap[0].move[0].move_cor.fx = 580;
	sammaruMap[0].move[0].move_cor.fy = 600;

	sammaruMap[1] = new structMap();
	sammaruMap[1].move = new Array();
	sammaruMap[1].move[0] = new move();
	sammaruMap[1].move[0].move_cor = new cooridinate(); 
	sammaruMap[1].move[0].move_cor.sx = 400;
	sammaruMap[1].move[0].move_cor.sy = 360;
	sammaruMap[1].move[0].move_cor.fx = 640;
	sammaruMap[1].move[0].move_cor.fy = 530;

	sammaruMap[2] = new structMap();
	sammaruMap[2].move = new Array();
	sammaruMap[2].move[0] = new move();
	sammaruMap[2].move[0].move_cor = new cooridinate(); 

	sammaruMap[2].move[0].move_cor.sx = 600;
	sammaruMap[2].move[0].move_cor.sy = 340;
	sammaruMap[2].move[0].move_cor.fx = 900;
	sammaruMap[2].move[0].move_cor.fy = 480;

	sammaruMap[3] = new structMap();


	for(i = 0; i < sammaruMap.length; i++)
		{
			sammaruMap[i].img = new Image();
			sammaruMap[i].img.src = sammaru[i].src;
		}

	corridorMap[0] = new structMap();
	corridorMap[0].move = new Array();
	corridorMap[0].move[0] = new move();
	corridorMap[0].move[0].move_cor = new cooridinate(); 
	corridorMap[0].move[0].move_cor.sx = 260;
	corridorMap[0].move[0].move_cor.sy = 470;
	corridorMap[0].move[0].move_cor.fx = 630;
	corridorMap[0].move[0].move_cor.fy = 600;

	corridorMap[1] = new structMap();
	corridorMap[1].move = new Array();
	corridorMap[1].move[0] = new move();
	corridorMap[1].move[1] = new move();
	corridorMap[1].move[0].move_cor = new cooridinate(); 
	corridorMap[1].move[1].move_cor = new cooridinate(); 
	

	corridorMap[1].move[0].move_cor.sx = 330;
	corridorMap[1].move[0].move_cor.sy = 300;
	corridorMap[1].move[0].move_cor.fx = 580;
	corridorMap[1].move[0].move_cor.fy = 520;

	corridorMap[1].move[1].move_cor.sx = 330;
	corridorMap[1].move[1].move_cor.sy = 300;
	corridorMap[1].move[1].move_cor.fx = 580;
	corridorMap[1].move[1].move_cor.fy = 520;

	corridorMap[2] = new structMap();
	corridorMap[2].move = new Array();
	corridorMap[2].move[0] = new move();
	corridorMap[2].move[0].move_cor = new cooridinate(); 
	corridorMap[2].move[0].move_cor.sx = 330;
	corridorMap[2].move[0].move_cor.sy = 300;
	corridorMap[2].move[0].move_cor.fx = 580;
	corridorMap[2].move[0].move_cor.fy = 520;

	corridorMap[3] = new structMap();
	corridorMap[3].move = new Array();
	corridorMap[3].move[0] = new move();
	corridorMap[3].move[1] = new move();
	corridorMap[3].move[0].move_cor = new cooridinate(); 
	corridorMap[3].move[1].move_cor = new cooridinate(); 
	
	corridorMap[3].move[0].move_cor.sx = 330;
	corridorMap[3].move[0].move_cor.sy = 300;
	corridorMap[3].move[0].move_cor.fx = 580;
	corridorMap[3].move[0].move_cor.fy = 520;

	corridorMap[3].move[1].move_cor.sx = 650;
	corridorMap[3].move[1].move_cor.sy = 560;
	corridorMap[3].move[1].move_cor.fx = 900;
	corridorMap[3].move[1].move_cor.fy = 600;

	
	corridorMap[4] = new structMap();
	corridorMap[4].move = new Array();
	corridorMap[4].move[0] = new move();
	corridorMap[4].move[1] = new move();
	corridorMap[4].move[0].move_cor = new cooridinate(); 
	corridorMap[4].move[1].move_cor = new cooridinate(); 
	
	corridorMap[4].move[0].move_cor.sx = 330;
	corridorMap[4].move[0].move_cor.sy = 300;
	corridorMap[4].move[0].move_cor.fx = 580;
	corridorMap[4].move[0].move_cor.fy = 520;
	
	corridorMap[4].move[1].move_cor.sx = 650;
	corridorMap[4].move[1].move_cor.sy = 480;
	corridorMap[4].move[1].move_cor.fx = 900;
	corridorMap[4].move[1].move_cor.fy = 600;

	corridorMap[5] = new structMap();
	corridorMap[5].move = new Array();
	corridorMap[5].move[0] = new move();
	corridorMap[5].move[0].move_cor = new cooridinate(); 
	corridorMap[5].move[0].move_cor.sx = 330;
	corridorMap[5].move[0].move_cor.sy = 300;
	corridorMap[5].move[0].move_cor.fx = 580;
	corridorMap[5].move[0].move_cor.fy = 520;

	corridorMap[6] = new structMap();
	corridorMap[6].move = new Array();
	corridorMap[6].move[0] = new move();
	corridorMap[6].move[1] = new move();
	corridorMap[6].move[0].move_cor = new cooridinate(); 
	corridorMap[6].move[1].move_cor = new cooridinate(); 
	
	corridorMap[6].move[0].move_cor.sx = 0;
	corridorMap[6].move[0].move_cor.sy = 300;
	corridorMap[6].move[0].move_cor.fx = 200;
	corridorMap[6].move[0].move_cor.fy = 580;
	
	corridorMap[6].move[1].move_cor.sx = 730;
	corridorMap[6].move[1].move_cor.sy = 300;
	corridorMap[6].move[1].move_cor.fx = 900;
	corridorMap[6].move[1].move_cor.fy = 590;


	corridorMap[7] = new structMap();
	corridorMap[8] = new structMap();
	for(i = 0; i < corridorMap.length; i++)
	{
			corridorMap[i].img = new Image();
			corridorMap[i].img.src = corridor[i].src;
	}

	cabinetMap[0] = new structMap();
	for(i = 0; i < cabinetMap.length; i++)
	{
			cabinetMap[i].img = new Image();
			cabinetMap[i].img.src = cabinet[i].src;
	}

	elevatorMap[0] = new structMap();
	for(i = 0; i < elevatorMap.length; i++)
	{
			elevatorMap[i].img = new Image();
			elevatorMap[i].img.src = elevator[i].src;
	}

	nestnetMap[0].chatContent = new Array();
	nestnetMap[0].chatContent[0] = "띵동 하는 알림 소리에 눈이 번쩍 떠졌다.";//"후아암...잘잤다."; //
	nestnetMap[0].chatContent[1] = "과제하느라 밤을 샜더니 깜빡 잠이 들은 모양이다.";//"어제 밤샜더니 피곤하군.";
	nestnetMap[0].chatContent[2] = "다들 집에 간 모양인지 주변엔 아무도 없었다.";//"뭐야... 아무도 없네. 지금 몇시지?";
	nestnetMap[0].chatContent[3] = "문자가 온 소리를 들었는데.. 내 핸드폰은 어디있지?";//"아, 내 핸드폰.";
	nestnetMap[0].chatContent[4] = "'돋보기 버튼'을 이용해 핸드폰을 찾아보자.";

	Professor[0] = "류교수님 : W! 와줘서 정말 고맙네.";
	Professor[1] = "류교수님께 무슨일인지 여쭈어보았다.";
	Professor[2] = "류교수님 : 음..다름이 아니라 아무래도 USB가....";
	Professor[3] = "류교수님의 강의자료와 시험문제를 담은 USB가 사라졌다고 한다.";
	Professor[4] = "류교수님 : 부탁인데 USB를 찾는데 도움을 줄 수 있나?";
	Professor[5] = "류교수님을 도와드려야겠다.";
	Professor[6] = "류교수님 : W 자네만 믿겠네.";
}

function structMap()
{
	var img;						//맵 이미지
	var move = new Array();			//이동 구조체
	var get = new Array();			//획득 구조체
	var search = new Array();		//탐색 구조체
	var chatContent  = new Array();
}

function move()
{
	var move_cor = new cooridinate(); 
} 
function get()
{
	var get_cor = new cooridinate();
	var getChat;
	var item;
}
function search()
{
	var search_cor = new cooridinate();
}

function cooridinate()
{
	var sx = 0;
	var sy = 0;
	var fx = 0;
	var fy = 0;
}
