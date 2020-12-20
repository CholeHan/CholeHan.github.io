$(document).ready(function(){
    $(".table_list li").click(function(){
		var st=$(this).attr("class").substring(6,7)
		  for(var i=0;i<8;i++){
			if(i==st){
			var id="baidu_"+st;
			$("."+id).attr({"id":"on_list"});
			  } else{
				 var id="baidu_"+i;
				 $("."+id).attr({"id":""});
				 }
		  }
  })
})





//百度搜索
function a_onclick()
{
    var wd=$(".bd_wd").attr("value");
	   var lis=$("#on_list").attr("class").substring(6,7);
	   if(lis==0){
		   if(wd==""){
			   window.open("http://news.baidu.com/");
			} else{
		   window.open("http://news.baidu.com/ns?word="+wd+"&ie=utf-8");
			}
		}else if(lis==1){
		   window.open("http://www.baidu.com/s?wd="+wd+"&ie=utf-8");
		}else if(lis==2){
			if(wd==""){
			   window.open("http://tieba.baidu.com/");
			} else{
		   window.open("http://tieba.baidu.com/f?kw="+wd+"&ie=utf-8");
			}
		}else if(lis==3){
		   window.open("http://zhidao.baidu.com/search?word="+wd+"&ie=utf-8");
		}else if(lis==4){
		   window.open("http://music.baidu.com/search?key="+wd+"&ie=utf-8");
		}else if(lis==5){
		   window.open("http://image.baidu.com/i?word="+wd+"&ie=utf-8");
		}else if(lis==6){
		   window.open("http://video.baidu.com/v?word="+wd+"&ie=utf-8");
		}else{
		   window.open("http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D"+wd);
		}
}

//google搜索
function b_onclick()
{
    var wd=$(".bd_wd").attr("value");
		   if(wd==""){
			   window.open("http://www.google.com.hk/");
			} else{
		   window.open("http://www.google.com.hk/search?q="+wd+"&ie=utf-8");
			}
}

//360搜索
function c_onclick()
{
    var wd=$(".bd_wd").attr("value");
	   var lis=$("#on_list").attr("class").substring(6,7);
	   if(lis==0){
		   if(wd==""){
			   window.open("http://news.so.com/");
			} else{
		   window.open("http://news.so.com/ns?ie=utf-8&tn=news&q="+wd);
			}
		}else if(lis==1){
		   window.open("http://www.so.com/s?ie=utf-8&q="+wd);
		}else if(lis==2){
			if(wd==""){
			   window.open("http://wenda.so.com/");
			} else{
		   window.open("http://wenda.so.com/search/?ie=utf-8&q="+wd);
			}
		}else if(lis==3){
		   window.open("http://video.so.com/mini.php?kw="+wd+"&ie=utf-8");
		}else if(lis==4){
		   window.open("http://image.so.com/i?ie=utf-8&q="+wd);
		}else if(lis==5){
		   window.open("http://s.music.so.com/s?ie=utf-8&q="+wd);
		}else if(lis==6){
		   window.open("http://map.so.com/?ie=utf-8&t=map&k="+wd);
		}else{
		   window.open("http://liangyi.so.com/s?q="+wd+"&ie=utf-8");
		}
}

//必应搜索
function d_onclick()
{
    var wd=$(".bd_wd").attr("value");
	 window.open("http://cn.bing.com/search?q="+wd+"&ie=utf-8");
}
function BindEnter(obj)
{
    //使用document.getElementById获取到按钮对象
    if(obj.keyCode == 13)
        {	
            $(".butn").click();
		
            obj.returnValue = false;
        }
}
