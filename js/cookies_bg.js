function getCookie(name){ 
var strCookie=document.cookie; 
var arrCookie=strCookie.split("; "); 
for(var i=0;i<arrCookie.length;i++){ 
var arr=arrCookie[i].split("="); 
if(arr[0]==name)return arr[1]; 
} 
return ""; 
} 

function setCookie(name,value,expiredays)
{
var exdate=new Date();
exdate.setTime(exdate.getTime()+expiredays*24*3600*1000)
document.cookie=name+ "=" +escape(value)+
((expiredays==null) ? "" : "; expires="+exdate.toGMTString()+";path=/")
}
function addCookie(){
		var bg_st=getCookie('bglist')
		if (bg_st!=null && bg_st!="")
		{
		  for(var i=0;i<10;i++){
		    if(i==bg_st){
			   if(bg_st>0){
				$("#bg_3").attr("src","bg/list/bg_"+bg_st+".jpg").fadeIn(800);
				$("#bg_1,#bg_2").fadeOut(1000);
			  }
			  var bi="list_2_"+bg_st;
			  var id="list_"+bg_st;
			  $("."+bi).fadeIn().animate({"opacity":"1"},500); 
			  $("#"+id).addClass("on_list");
			  }else{
			  var bi="list_2_"+i;
			  var id="list_"+i;
			  $("."+bi).fadeOut().animate({"opacity":"0"},500); 
			  $("#"+id).removeClass("on_list")
			}
		  }
		}
}