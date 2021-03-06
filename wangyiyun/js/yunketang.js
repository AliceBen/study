/****课程体系下拉菜单*****/
$('.qubie .nav_items .course').hover(function(){
	$('.nav_items .course .course_items').fadeToggle(15);
	$('.nav_items>.course>a').toggleClass('hover');
	$('#course_items').css('display','none');
});
/****下载APP下拉菜单*****/
$('.qubie .nav_items .load').hover(function(){
	$('.nav_items .load .load_items').fadeToggle(15);
	$('.nav_items>.load>a').toggleClass('hover');
	$('#load_items').css('display','none');
});


$('#nav_items .course').hover(function(){
	$('#nav_items .course #course_items').fadeToggle(15);
});
$('#nav_items .load').hover(function(){
	$('#nav_items .load #load_items').fadeToggle(15);
})

/****************左侧导航菜单****************************/
$('#cate_box li').mouseover(function(){
	$(this).children('.suit_cate_box').css('display','block');
});
$('#cate_box li').mouseout(function(){
	$(this).children('.suit_cate_box').css('display','none');
});
$('.close1').click(function(){
	$(this).parent().css('display','none');
})

/*********************广告轮播******************************************/
var imgs=[
    {"i":0,"img":"img/slider1.jpg",'bg':'#ffd664','url':'#'},
    {"i":1,"img":"img/slider2.png",'bg':'#0e449c','url':'#'},
    {"i":2,"img":"img/slider3.jpg",'bg':'#042c24','url':'#'},
    {"i":3,"img":"img/slider4.png",'bg':'#d92da2','url':'#'},
    {"i":4,"img":"img/slider5.png",'bg':'#161616','url':'#'},
	{"i":5,"img":"img/slider6.jpg",'bg':'#1d2339','url':'#'},
];
function imgList(){
	for(var i=0,strImg="",strIdx="";i<imgs.length;i++){      
		if(i==0){
			strIdx+="<li class='hover'><span>"+(i+1)+"</span></li>";
			strImg+='<li data-num=n'+(i+1)+' class="active"><a href="'+imgs[i].url+'"><img src="'+imgs[i].img+'"></li>';
		}else{ 
			strImg+='<li data-num=n'+(i+1)+'><a href="'+imgs[i].url+'"><img src="'+imgs[i].img+'"></li>';
			strIdx+="<li><span>"+(i+1)+"</span></li>";
		}
    }
	$('#imgs').html(strImg);
	$('#idxs').html(strIdx);
	$('article').css('background',imgs[0].bg);
}
imgList();
var slider={
	timer:null,
	WAIT:3000,
	canAuto:true,
	init:function(){
		this.canMove();
		this.move();
	},
	getN:function(){
		return $('#imgs li.active').attr('data-num').slice(1);
	},
	move:function(){
		var me=this;
		me.canMove();
		me.timer=setInterval(function(){
			var n=parseFloat(me.getN());
			if(me.canAuto){
				if(n==imgs.length){
					$('#imgs li:nth-child('+n+')').removeClass('active');
					$('#idxs li:nth-child('+n+')').removeClass('hover');
					n=1;	
					$('#imgs li:nth-child('+n+')').addClass('active');
					$('#idxs li:nth-child('+n+')').addClass('hover');
					$('article').css('background',imgs[n-1].bg);
				}else{
					$('#imgs li:nth-child('+n+')').removeClass('active');
					$('#idxs li:nth-child('+n+')').removeClass('hover');
					$('#imgs li:nth-child('+(n+1)+')').addClass('active');
					$('#idxs li:nth-child('+(n+1)+')').addClass('hover');
					$('article').css('background',imgs[n].bg);
				}
			}		
		},me.WAIT);	
	},
	canMove:function(){
		var me=this;
		$('#imgs img').mouseover(function(){
			me.canAuto=false;
		});
		$('#imgs img').mouseout(function(){
			me.canAuto=true;
		});
	}
}
$('.lbtn').click(function(){
	var n=parseFloat(slider.getN());
	slider.canAuto=false;
	if(n>1){
		$('#imgs li:nth-child('+n+')').removeClass('active');
		$('#idxs li:nth-child('+n+')').removeClass('hover');
		$('#imgs li:nth-child('+(n-1)+')').addClass('active');
		$('#idxs li:nth-child('+(n-1)+')').addClass('hover');
		$('aricle').css('background',imgs[n-2].bg);
	}else{
		$('#imgs li:nth-child('+n+')').removeClass('active');
		$('#idxs li:nth-child('+n+')').removeClass('hover');
		n=imgs.length;
		$('#imgs li:nth-child('+(n)+')').addClass('active');
		$('#idxs li:nth-child('+(n)+')').addClass('hover');
		$('article').css('background',imgs[n-1].bg);
	}
	
});
$('.lbtn').mouseout(function(){
	slider.canAuto=true;
});
$('.rbtn').click(function(){
	var n=parseFloat(slider.getN());
	slider.canAuto=false;
	if(n<imgs.length){
		$('#imgs li:nth-child('+n+')').removeClass('active');
		$('#idxs li:nth-child('+n+')').removeClass('hover');
		$('#imgs li:nth-child('+(n+1)+')').addClass('active');
		$('#idxs li:nth-child('+(n+1)+')').addClass('hover');
		$('article').css('background',imgs[n].bg);
	}else{
		$('#imgs li:nth-child('+n+')').removeClass('active');
		$('#idxs li:nth-child('+n+')').removeClass('hover');
		n=1;
		$('#imgs li:nth-child('+(n)+')').addClass('active');
		$('#idxs li:nth-child('+(n)+')').addClass('hover');
		$('article').css('background',imgs[n-1].bg);
	}

});
$('.rbtn').mouseout(function(){
	slider.canAuto=true;
});

$('#idxs li').click(function(e){
	slider.canAuto=false;
	var m=parseFloat($(e.target).children().html());
	var n=parseFloat(slider.getN());
	$('#imgs li:nth-child('+n+')').removeClass('active');
	$('#idxs li:nth-child('+n+')').removeClass('hover');
	$('#imgs li:nth-child('+m+')').addClass('active');
	$('#idxs li:nth-child('+m+')').addClass('hover');
	$('article').css('background',imgs[m-1].bg);

})
$('#idxs li').mouseout(function(){
	slider.canAuto=true;
});
/***************轮播左右箭头显示**********************/
$('#slider_box').mouseover(function(){
	$('.lbtn').css('display','block');
	$('.rbtn').css('display','block');
});
$('#slider_box').mouseout(function(){
	$('.lbtn').css('display','none');
	$('.rbtn').css('display','none');
});
window.addEventListener("load",function(){slider.init();});

var majorImgs=[
{url:'img/shuju.jpg',job:'数据分析师',intro:'用Excel玩转商业智能'},
{url:'img/chanpin.jpg',job:'产品运营',intro:'最强运营导师团倾囊相授'},
{url:'img/ITjingli.jpg',job:'IT项目经理',intro:'凝结15年PMP培训经验'},
{url:'img/dashuju.jpg',job:'大数据工程师',intro:'世界名企高管开发'},
{url:'img/anzhuo.jpg',job:'Android开发工程师',intro:'覆盖应用开发核心技能'},
{url:'img/IOSpingguo.jpg',job:'IOS开发工程师',intro:'三个月学会IOS构建'},
{url:'img/ITjingli.jpg',job:'测试工程师',intro:'打造最专业的测试人'},
{url:'img/jiaohu.jpg',job:'交互设计师',intro:'网易&浙大最强交互设计导师'},
{url:'img/kuaiji.jpg',job:'会计主管',intro:'2个月掌握财会技能升级主管'},
{url:'img/cjiajia.jpg',job:'C++开发工程师',intro:'侯捷大师亲自教学'},
{url:'img/weidaikuan.jpg',job:'小微贷款实务',intro:'银行业公认实务型专家设计'},


{url:'img/yinyue.jpg',job:'独立音乐制作人',intro:'最易懂的音乐制作课程'},

{url:'img/uisheji.jpg',job:'UI设计师',intro:'网易UEDC首席设计师亲授'},
{url:'img/xiangji.jpg',job:'自由职业摄影师',intro:'培养一个赚钱的爱好'},

];
function majorImgsList(){
	var str='';
	for(var k in majorImgs){
		str+='<li><a href="#"><img src="'+majorImgs[k].url+'"/></a><h3><a href="#">'+majorImgs[k].job+'</a></h3><p><a href="#">'+majorImgs[k].intro+'</a></p></li>';
	}
	$('div.zhonglei>ul.kinds').html(str);
	$('div.zhonglei>ul.kinds').css('width',majorImgs.length*238+'px');
}

majorImgsList();
/*********************微专业课程**********************************************/
var l=parseFloat($('div.zhonglei>ul.kinds').css('left'));
	$('.forward').click(function(){
		if(majorImgs.length-4>(l/-238)){
			l-=238;
			$('div.zhonglei>ul.kinds').css('left',l+'px');
		}
	});		
	$('.backward').click(function(){
		if(l<0){
			//$('.forward').css('cursor','pointer');
			l+=238;
			$('div.zhonglei>ul.kinds').css('left',l+'px')
		}
		/*else{
			$('div.zhonglei>ul.kinds').css('cursor','default');
		}*/
	});
	$('.forward').mouseover(function(){
		if(majorImgs.length-4>(l/-238)){
			$('.forward').css('background-position','-78px -69px');
		}
	});
	$('.forward').mouseout(function(){
		$('.forward').css('background-position','-26px -69px');
	});
	$('.backward').mouseover(function(){
		if(l<0){
			$('.backward').css('background-position','-53px -69px');
		}
	});
	$('.backward').mouseout(function(){
		$('.backward').css('background-position','0px -69px');
	});
/**********************微专业按钮显示*****************************************/
$('.zhonglei').mouseover(function(){
	$('.backward').css('display','block');
	$('.forward').css('display','block');
});
$('.zhonglei').mouseout(function(){
	$('.backward').css('display','none');
	$('.forward').css('display','none');
});
/************************************************/
/*
function getTop(elem){
	//声明变量sum，初始为elem的offsetTop
	var sum=elem.offsetTop;
	//反复判断elem的offsetParent不等于null
	while(elem.offsetParent){
		//将elem.offsetParent的offsetTop累加到sum上
		sum+=elem.offsetParent.offsetTop
		//将elem换成elem的offsetParent
		elem=elem.offsetParent
	}//(遍历结束)
	return sum//返回sum
}
*/
var candisplay=true;
$(window).scroll(function(){
	var free=$('#free').offset().top;
	var article=$('article').offset().top;
	var totalTop=document.body.scrollTop;
	if(totalTop>free&&candisplay){	
		$('#daheikuang').css('display','block');
	}else{
		$('#daheikuang').css('display','none');
	}

	if(totalTop>article){	
		$('.dadaohang').css('display','block');
	}else{
		$('.dadaohang').css('display','none');
	}
});
$('.chazi').click(function(){
	$('#daheikuang').css('display','none');
	candisplay=false;
});
/**********************************************************/
$('#denglu1').click(function(){
	$('.modal').css('display','block');
});
$('.close2').click(function(){
	$('.modal').css('display','none');
});
$('#denglu2').click(function(){
	$('.modal').css('display','block');
});
$('#denglu3').click(function(){
	$('.modal').css('display','block');
});



	/*
	$.post('data/login.php',result,function(data){
		//console.log('开始处理响应数据.....');
		//console.log(data);
		if(data.status<0){
			$('.modal .alert p').html(data.msg);
			$('[name="uname"]').val('');
			$('[name="upwd"]').val('');
		}else {
			$('#login-msg').html(data.msg+", 欢迎回来！");
			$('.modal').fadeOut();
			getMyOrder(data.msg,1); //加载我的订单
			$.get('data/lottery-stat.php',{'uname':data.msg},function(data){
				$('#bt-lottery span').html(data['left_count']);
				if(data['left_count']>0){
					$('#bt-lottery').attr('disabled',false);
					drawLottery();
				}
			});
			/*
			$.get('data/lottery-stat.php',{'uname':data.msg},function(data){
				$('#bt-lottery span').html(data['left_count']);
				data['left_count']>0&&$('#bt-lottery').attr('disabled',false);
			});	
			*/
			/*
			$('#bt-lottery').click(function(){
				var lotteryItems = ['鼓励奖', '一等奖', '二等奖', '三等奖','特等奖'];
				var time=new Date();
				time=time.toISOString();
				var level=lotteryItems[Math.round(Math.random()*4)];
				$.post('data/save-lottery.php',{'uname':data.msg,'time':time,'level':level},function(data){
					$('#bt-lottery span').html($('#bt-lottery span').html()-1);
					$('#bt-lottery span').html()<=0&&$('#bt-lottery').attr('disabled',true);
				
				});
			});
			
		}
	});
	*/
/*
$('#nav_items .course').mouseover(function(){
	$('#nav_items .course #course_items').show(500);
})
$('#nav_items .course').mouseout(function(){
	$('#nav_items .course #course_items').hide(500);
})
*/
/*********************************************/
var str="";
function yanzhengma(){
	var bg=document.createElementNS('http://www.w3.org/2000/svg','rect')
	bg.setAttribute('width','80');
	bg.setAttribute('height','30');
	bg.setAttribute('fill',rgb(180,250));
	svg.appendChild(bg);
	var arr='abcdefghijkmnpqrstwxyzABCDEFGHJKLMNPQRSTWXYZ23465789';
	var t=document.createElementNS('http://www.w3.org/2000/svg','text');
	t.setAttribute('x',20);
	t.setAttribute('y',25);
	var a=arr[Math.floor(Math.random()*arr.length)];
	t.setAttribute('font-size','20');
	t.setAttribute('id','t1');
	t.innerHTML=a;
	str+=a;
	t.setAttribute('fill',rgb(20,160));
	t.setAttribute('rotate',rn(-45,45));
	svg.appendChild(t);

	/*2*/
	var t=document.createElementNS('http://www.w3.org/2000/svg','text');
	t.setAttribute('x',35);
	t.setAttribute('y',25);
	var a=arr[Math.floor(Math.random()*arr.length)];
	t.setAttribute('font-size','20');
	t.setAttribute('id','t1');
	t.innerHTML=a;
	str+=a;
	t.setAttribute('fill',rgb(20,160));
	t.setAttribute('rotate',rn(-45,45));
	svg.appendChild(t);
				
				/*3*/
	var t=document.createElementNS('http://www.w3.org/2000/svg','text');
	t.setAttribute('x',50);
	t.setAttribute('y',25);
	var a=arr[Math.floor(Math.random()*arr.length)];
	t.setAttribute('font-size','20');
	t.setAttribute('id','t1');
	t.innerHTML=a;
	str+=a;
	t.setAttribute('fill',rgb(20,160));
	t.setAttribute('rotate',rn(-45,45));
	svg.appendChild(t);
				/*4*/
	var t=document.createElementNS('http://www.w3.org/2000/svg','text');
	t.setAttribute('x',65);
	t.setAttribute('y',25);
	var a=arr[Math.floor(Math.random()*arr.length)];
	t.setAttribute('font-size','20');
	t.setAttribute('id','t1');
	t.innerHTML=a;
	str+=a;
	t.setAttribute('fill',rgb(20,160));
	t.setAttribute('rotate',rn(-45,45));
	svg.appendChild(t);
	function rn(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	for(var i=0;i<5;i++){
		var line=document.createElementNS('http://www.w3.org/2000/svg','line');
		line.setAttribute('x1',rn(0,80));
		line.setAttribute('y1',rn(0,30));
		line.setAttribute('x2',rn(0,80));
		line.setAttribute('y2',rn(0,30));
		line.setAttribute('stroke',rgb(20,150));
		svg.appendChild(line);
	}
	function txt(){		
		var b=arr[Math.floor(Math.random()*arr.length)];
		var c=arr[Math.floor(Math.random()*arr.length)];
		var d=arr[Math.floor(Math.random()*arr.length)];
		return a+b+c+d+'';
	}
	//t1.innerHTML=txt();
	function rgb(min,max){
		var r=Math.floor(Math.random()*(max-min+1)+min);
		var g=Math.floor(Math.random()*(max-min+1)+min);
		var b=Math.floor(Math.random()*(max-min+1)+min);
		return 'rgb('+r+','+g+','+b+')';
	}
	console.log(str);
}

yanzhengma();
$('#svg').click(function(){
	str=""
	yanzhengma();
	
})
/****************登录***************************************/
$('.modal_login_login').click(function(){
	var result=$('#login-form').serialize();
	console.log(result);
	//if($('[name="yanzhengma"]').val()==str){									
		$.post('data/login.php',result,function(data){
			if(data.verify==0){
				
					$('.alert').css('display','block');
					$('.alert').html(data.msg);
					$('[name="uname"]').val('');
					$('[name="upwd"]').val('');
					$('[name="yanzhengma"]').val('');
				
			}else if(data.verify==1&&$('[name="yanzhengma"]').val()!=str){
				$('.alert').css('display','block');
				$('.alert').html('用户名或密码或验证码错误');
				$('[name="uname"]').val('');
					$('[name="upwd"]').val('');
					$('[name="yanzhengma"]').val('');
			}else{
				$('.basic').html('<li class="xin"><a href="#">消息</a></li><li class="xin"><a href="#">购物车</a></li><li class="xin xinren"></li>');
				$('div.daohang>.login').html('');
				$('div.daohang>.login').addClass('xinren');
				$('div.daohang>.login').addClass('jiaxin');
				$('div.join>div.login').css('display','none');
				$('.modal').fadeOut();
			}
		
		})
	/*}else{
		$('.alert').html('用户名或密码或验证码错误');	
	}*/

});