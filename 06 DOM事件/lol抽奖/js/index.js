
//准备抽奖数据
	var imgs = ['images/img-1.jpg','images/img-2.jpg','images/img-3.jpg','images/img-4.jpg','images/img-5.jpg','images/img-6.jpg','images/img-7.jpg','images/img-8.jpg','images/img-9.jpg','images/img-10.jpg']; //图片数据
	
	var heros = ['龙的传人 李青','海克斯科技 安妮','摄魂使者 薇恩','银龙裁决 泰隆','钢铁军团 拉克丝','定海神针 孙悟空','安妮漫游仙境','你看见过我的熊猫吗','地底世界 崔斯特','古琴余韵 索娜'];//英雄名称
	
	var types = ['龙年限定','限定皮肤','限定皮肤','龙年限定','限定皮肤','龙年限定','一周年限定','蛇年限定','限定皮肤','龙年限定'];//皮肤的类型
	
	//加载英雄数据
	var htmlStr = '' ;//用于存储循环生成的li标签
	var heroList = document.getElementById("heroList");
	
	//获取元素对象
	var heroName = document.getElementById("hero-name");
	var heroBg = document.getElementById("hero-bg");
	var heroImg = document.getElementById("hero-img");
	
	var shadow = document.getElementById("shadow");
	var modal = document.getElementById("modal");
	
	for(var i=0;i<imgs.length;i++){
		htmlStr+='<li> <i></i> <img src="'+imgs[i]+'" alt="" width="132px" height="240px"><p> <span> '+heros[i]+' </span> '+types[i]+' </p></li>';
		}
		
	//将生成的li标签插入到展示的容器中
	heroList.innerHTML = htmlStr;	
	
	
	//绑定一个抽奖事件
	var lucky = document.getElementById("lucky");
	
	lucky.onclick = function(){
		//生成随机数字，0 - 9 整数
		var num = parseInt(Math.random()*imgs.length);
		
		//处理弹出框的显示的内容
		heroName.innerHTML = '【'+heros[num]+'】';
		
		heroImg.style.backgroundImage = 'url("'+imgs[num]+'")';
		heroBg.style.backgroundImage = 'url("'+imgs[num]+'")';
		
		shadow.style.display="block";//显示遮罩层
		modal.style.display = "block";//显示弹出框	
		}
		
		//关闭弹出框 及遮罩层
		function hideModal(){
			shadow.style.display="none";//隐藏遮罩层
			modal.style.display = "none";//隐藏弹出框	
			}