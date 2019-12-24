//模拟数据
var picUrl = ['img/MUHT2.png','img/MTER2.png','img/MRX62.png']; //图片

var shopList = ['urBeats3 新款入耳式耳机，这个世界上最好听的耳机，男女都很适合 适配新款 iPhone','iPhone 皮革保护套，防摔防水，保护你的 iPhone 现在只需要很低的价格即可拥有','手机充电皮革保护套，可一边充电一边玩王者荣耀 吃鸡 LOL 游戏 10000毫安大电亮'];

var prices = [52,36,62];
var myCart = [];//加入购物车的商品的信息 = > [0,3] 0:商品的索引, 3 数量
var commodity_section = document.getElementsByClassName("commodity_section")[0];
//购物车列表
var cart_list_content = document.getElementsByClassName("cart_list_content")[0];
var empty_cart_info = document.getElementsByClassName("empty_cart_info")[0];

//生成对应的商品标签
var htmlStr = '';//用于存储生成到HTML标记内容
	
	for(var i=0;i<shopList.length;i++){
		htmlStr +='<div class="commodity_content"><div class="content_pic"><a href="javascript:void(0)"><img src="'+picUrl[i]+'" alt=""></a></div><p class="commodity_details"><a href="javascript:void(0)">'+shopList[i]+'</a></p><p class="price_tag">售价：￥<span class="cost">'+prices[i]+'</span></p><button class="cart_button" data-index="'+i+'">加入购物车</button></div>';		
		}
		
		//将生成到HTML内容插入到商品容器
		commodity_section.innerHTML = htmlStr; 


/*****************************************************************************/
//加入购物车事件
	commodity_section.addEventListener('click',function(e){
	var ele = e.target;
	if(ele.className=='cart_button'){
		var index = ele.getAttribute('data-index');
		console.log('正在加入购物车!',index);
		 //加入购物车数组 (判断同一款商品是否已经加入过购物车)
		 if(isInCart(index)){
			 //更新商品的数量
			 console.log('您当选择商品,在购物车列表中的索引为:',getIndex(index));
			    myCart[getIndex(index)][1]+=1;	
			}else{
				myCart.push([index,1]);	 
			} 
			//渲染更新购物车
			render();
		}
	});		
		
		
//定义一个方法用于检测当前商品是否已经加入过购物
	function isInCart(index){//index 需要检测商品的索引
		var flag = false; //标记
		for(var i=0;i<myCart.length;i++){
			if(myCart[i][0] == index){
				 flag = true;
				 break;
				}
			}			
			return flag;
		}		
		
		
//定义一个方法, 用于查找到当前商品在购车数组中的索引值
	function getIndex(index){//index 需要检测商品的索引
		for(i in myCart){
			if(myCart[i][0] == index){
				return i;
				}
			}
		}		
		
//定义一个方法 ,用于渲染购车列表
function render(){
	if(myCart.length<1){
		  empty_cart_info.style.display="block";
	 }else{
		  empty_cart_info.style.display="none";
	    var htmlStr = '';
	for(var i=0;i<myCart.length;i++){
		htmlStr+='<li class="cart_list_0"><div><a href="javascript:void(0);"><img src="'+picUrl[myCart[i][0]]+'" alt=""></a></div><div class="cart_content_details"><a href="javascript:void(0)">'+shopList[myCart[i][0]]+'</a></div><div><button class="cartButtonMinus" data-index="'+i+'">-</button><input class="quantity_input" type="text" value="'+myCart[i][1]+'"><button class="cartButtonPlus" data-index="'+i+'">+</button><p>小计：￥<span class="amount">'+(prices[myCart[i][0]] * myCart[i][1])+'</span></p></div><div><a class="deleteBtn" href="javascript:;" data-index="'+i+'">删除</a></div></li>';
		}
	//插入到购物车容器
	cart_list_content.innerHTML = htmlStr;
		}
	}		
	
/***************************监听购物车列表 + - 删除等操作**************************/
cart_list_content.addEventListener('click',function(e){
		var e = e || window.event;
		var ele = e.target;
		var className = ele.className;
		var index = ele.getAttribute('data-index');
		switch(className){
			case 'cartButtonPlus':		
				console.log('递增...',index);
				myCart[index][1]+=1;
				render();
			break;
			case 'cartButtonMinus':
				if(myCart[index][1]<=1)return;
				myCart[index][1]-=1;
				render();
				console.log('递减...');
			break;
			case 'deleteBtn':
				myCart.splice(index,1);
				//清空一下
		  		cart_list_content.innerHTML = '';
				render();
				console.log('删除...');
			break;
			}
			
	});