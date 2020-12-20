

var containerObj;

(function($) {
	// plugin definition
	$.fn.ezBgResize = function(options) {
		// First position object
		containerObj = this;
		
		containerObj.css("visibility","hidden");
		
		$(window).load(function() {
			resizeImage();
		});
		
		$(window).bind("resize",function() {
			resizeImage();
		});
		
	};
	
	function resizeImage() {
		
		containerObj.css({
			"position":"fixed",
			"top":"0px",
			"left":"0px",
			"z-index":"-1",
			"overflow":"hidden",
			"width":getWindowWidth() + "px",
			"height":getWindowHeight() + "px"
		});
		
		// Resize the img object to the proper ratio of the window.
		var iw = containerObj.children('img').width();
		var ih = containerObj.children('img').height();
		if (getWindowWidth() > getWindowHeight()) {
			if (iw > ih) {
				var fRatio = iw/ih;
				containerObj.children('img').css("width",getWindowWidth() + "px");
				containerObj.children('img').css("height",Math.round(getWindowWidth() * (1/fRatio)));

				var newIh = Math.round(getWindowWidth() * (1/fRatio));

				if(newIh < getWindowHeight()) {
					var fRatio = ih/iw;
					containerObj.children('img').css("height",getWindowHeight());
					containerObj.children('img').css("width",Math.round(getWindowHeight() * (1/fRatio)));
				}
			} else {
				var fRatio = ih/iw;
				containerObj.children('img').css("height",getWindowHeight());
				containerObj.children('img').css("width",Math.round(getWindowHeight() * (1/fRatio)));
			}
		} else {
			var fRatio = ih/iw;
			containerObj.children('img').css("height",getWindowHeight());
			containerObj.children('img').css("width",Math.round(getWindowHeight() * (1/fRatio)));
		}
		containerObj.css("visibility","visible");
	}
	
	// private function for debugging
	function debug($obj) {
		if (window.console && window.console.log) {
			window.console.log('Window Width: ' + $(window).width());
			window.console.log('Window Height: ' + $(window).height());
		}
	};
	
	// Dependable function to get Window Height
	function getWindowHeight() {
		var windowHeight = 0;
		if (typeof(window.innerHeight) == 'number') {
			windowHeight = window.innerHeight;
		}
		else {
			if (document.documentElement && document.documentElement.clientHeight) {
				windowHeight = document.documentElement.clientHeight;
			}
			else {
				if (document.body && document.body.clientHeight) {
					windowHeight = document.body.clientHeight;
				}
			}
		}
		return windowHeight;
	};
	
	// Dependable function to get Window Width
	function getWindowWidth() {
		var windowWidth = 0;
		if (typeof(window.innerWidth) == 'number') {
			windowWidth = window.innerWidth;
		}
		else {
			if (document.documentElement && document.documentElement.clientWidth) {
				windowWidth = document.documentElement.clientWidth;
			}
			else {
				if (document.body && document.body.clientWidth) {
					windowWidth = document.body.clientWidth;
				}
			}
		}
		return windowWidth;
	};
})(jQuery);


var timelist;
$(document).ready(function() {
	$("#bodybackground").ezBgResize();
	$(".center_right").click(function(){
		$("#data").attr("src","player/radio/index/data.html")
		$(".date_box").fadeIn(500);
	})
	$(".date_box").click(function(){
		$("#data").attr("src","")
		$(".date_box").fadeOut(500);
	})
});

$(document).ready(function(){
	   var now=new Date();
       var hours=now.getHours();
       var minutes=now.getMinutes();
       var seconds=now.getSeconds();
	   var time=((0-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time1=((1-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time2=((2-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time3=((5-hours)*3600+(60-minutes)*60-seconds)*1000;        
	   var time6=((6-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time7=((7-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time8=((8-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time9=((9-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time10=((10-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time11=((11-hours)*3600+(60-minutes)*60-seconds)*1000;
       var time12=((12-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time13=((13-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time14=((14-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time15=((15-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time16=((16-hours)*3600+(60-minutes)*60-seconds)*1000;
       var time17=((17-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time18=((18-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time19=((19-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time20=((20-hours)*3600+(60-minutes)*60-seconds)*1000;      
	   var time21=((21-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time22=((22-hours)*3600+(60-minutes)*60-seconds)*1000;
	   var time23=((23-hours)*3600+(60-minutes)*60-seconds)*1000;   
	   
	if(hours==0)
	{ 
	  $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_1.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_2.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time1)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_3.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time2)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_6.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time3)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_7.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time6)
	 timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_8.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time7)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	}
	
	if(hours==1)
	{
	  $("#bg_1").attr({"src":"bg/bg_1.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_2.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time1)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_3.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time2)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_6.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time3)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_7.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time6)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_8.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time7)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	 timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	}
	
	if(hours==2)
	{
	  $("#bg_1").attr({"src":"bg/bg_2.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_3.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time2)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_6.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time3)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_7.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time6)
	 timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_8.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time7)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	}

	if(hours>=3 && hours<6)
	{   
	$("#bg_1").attr({"src":"bg/bg_3.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_6.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time3)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_7.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time6)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_8.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time7)
	 timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	}
	
    if(hours==6)
	{ 
	$("#bg_1").attr({"src":"bg/bg_6.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_7.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time6)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_8.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time7)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time9)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	 timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	}

    if(hours==7)
	{ 
	$("#bg_1").attr({"src":"bg/bg_7.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_8.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time7)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time10)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	 timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	}
	
	if(hours==8)
	{ 
	$("#bg_1").attr({"src":"bg/bg_8.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_9.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time8)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time11)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	}
	
	if(hours==9)
	{ 
	$("#bg_1").attr({"src":"bg/bg_9.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_10.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time9)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time12)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	}
	
	if(hours==10)
	{ 
	$("#bg_1").attr({"src":"bg/bg_10.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_11.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time10)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time13)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	}
	
	if(hours==11)
	{ 
	$("#bg_1").attr({"src":"bg/bg_11.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_12.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time11)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time14)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	  
	if(hours==12)
	{ 
	$("#bg_1").attr({"src":"bg/bg_12.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_13.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time12)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	  }
	  
	if(hours==13)
	{ 
	$("#bg_1").attr({"src":"bg/bg_13.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_14.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time13)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	  
	    
	if(hours==14)
	{ 
	$("#bg_1").attr({"src":"bg/bg_14.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_15.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time14)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	  }
	      
	if(hours==15)
	{ 
	$("#bg_1").attr({"src":"bg/bg_15.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_16.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time15)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	  
	  if(hours==16)
	{ 
	$("#bg_1").attr({"src":"bg/bg_16.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_17.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time16)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	  }
	  
	  
	if(hours==17)
	{ 
	$("#bg_1").attr({"src":"bg/bg_17.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_18.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time17)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	    
	if(hours==18)
	{ 
	$("#bg_1").attr({"src":"bg/bg_18.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_19.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time18)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	  
	      
	if(hours==19)
	{ 
	$("#bg_1").attr({"src":"bg/bg_19.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_20.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time19)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time20)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	 timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	        
	if(hours==20)
	{ 
	$("#bg_1").attr({"src":"bg/bg_20.jpg"}).fadeIn(2000);
	  setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_21.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time20)
	  setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time21)
	  setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time23)
	  }
	  
	        
	if(hours==21)
	{ 
	$("#bg_1").attr({"src":"bg/bg_21.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_22.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time21)
	  timelist=setTimeout(function(){
        $("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_2").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	  
	        
	if(hours==22)
	{ 
	$("#bg_1").attr({"src":"bg/bg_22.jpg"}).fadeIn(2000);
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_23.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time22)
	  timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
	if(hours==23)
	{ 	alert(time23);
	$("#bg_1").attr({"src":"bg/bg_23.jpg"}).fadeIn(2000);
	timelist=setTimeout(function(){
        $("#bg_2").attr({"src":"bg/bg_0.jpg"}).fadeIn(3000);
		$("#bg_1").fadeOut(3000);
        },time23)
	  }
  });
  


/**获取窗口宽度**/
function WindowSize() {
    var client = {
        x:0,
        y:0
    };
 
    if(typeof document.compatMode != 'undefined' && document.compatMode == 'CSS1Compat') {
        client.x = document.documentElement.clientWidth;
        client.y = document.documentElement.clientHeight;
    } else if(typeof document.body != 'undefined' && (document.body.scrollLeft || document.body.scrollTop)) {
        client.x = document.body.clientWidth;
        client.y = document.body.clientHeight;
    }
 
    return client;
}

$(document).ready(function(){
	var Width= document.body.clientWidth-110;
	var wit=(Width-360)/2;
	var stb=(document.body.clientWidth-100)/2;
	var ss=(document.documentElement.clientHeight-130-450)/2;
	var ls=(document.documentElement.clientWidth-1040)/2-5;
	var hs=(document.documentElement.clientHeight-620)/2;
	var dtop=(document.documentElement.clientHeight-460);
	$("#foot_center").css({"width":Width+"px"});
	$(".center_center").css({"left":wit+"px"})
	$(".new_page").css({"left":stb+"px"})
	$(".date").css({"margin-top":dtop+"px"})
	if(hs<=10){
	$(".Media").animate({"left":ls+"px","top":"10px"},50)
	} else{
	$(".Media").animate({"left":ls+"px","top":hs+"px"},50)
	}
	if(ss<=30){
		$(".top").animate({marginBottom:30+"px"},50)
	}
	else{
	$(".top").animate({marginBottom:ss+"px"},50)
		}
	setTimeout(showLeftTime,0)
})

$(window).resize(function() {
	var size = WindowSize().x-110;
	var wth= (size-360)/2;
	var stb=(WindowSize().x-100)/2;
	var ss=(WindowSize().y-130-450)/2;
	var ls=(WindowSize().x-1040)/2-5;
	var hs=(WindowSize().y-620)/2;
	var dtop=(WindowSize().y-460);
	$("#foot_center").css({"width":size+"px"});
	$(".center_center").css({"left":wth+"px"});
        $(".new_page").css({"left":stb+"px"});
	if(hs<=10){
	$(".Media").animate({"left":ls+"px","top":"10px"},50)
	} else{
	$(".Media").animate({"left":ls+"px","top":hs+"px"},50)
	}
	if(ss<=60){
		$(".top").animate({marginBottom:30+"px"},50)
	}
	else{
	$(".top").animate({marginBottom:ss+"px"},50)
		}
})
  
  
  
  
/**农历日期**/  
var CalendarData = new Array(100);
    var madd = new Array(12);
    var tgString = "甲乙丙丁戊己庚辛壬癸";
    var dzString = "子丑寅卯辰巳午未申酉戌亥";
    var numString = "一二三四五六七八九十";
    var monString = "正二三四五六七八九十冬腊";
    var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
    var cYear, cMonth, cDay, TheDate;
    CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
    madd[0] = 0;
    madd[1] = 31;
    madd[2] = 59;
    madd[3] = 90;
    madd[4] = 120;
    madd[5] = 151;
    madd[6] = 181;
    madd[7] = 212;
    madd[8] = 243;
    madd[9] = 273;
    madd[10] = 304;
    madd[11] = 334;
    function GetBit(m, n) {
        return (m >> n) & 1;
    }
    function e2c() {
        TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
        var total, m, n, k;
        var isEnd = false;
        var tmp = TheDate.getYear();
        if (tmp < 1900) {
            tmp += 1900;
        }
        total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;
        if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
            total++;
        }
        for (m = 0; ; m++) {
            k = (CalendarData[m] < 0xfff) ? 11 : 12;
            for (n = k; n >= 0; n--) {
                if (total <= 29 + GetBit(CalendarData[m], n)) {
                    isEnd = true; break;
                }
                total = total - 29 - GetBit(CalendarData[m], n);
            }
            if (isEnd) break;
        }
        cYear = 1921 + m;
        cMonth = k - n + 1;
        cDay = total;
        if (k == 12) {
            if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
                cMonth = 1 - cMonth;
            }
            if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
                cMonth--;
            }
        }
    }
    function GetcDateString() {
        var tmp = "";
		/**tmp += tgString.charAt((cYear - 4) % 10);
        tmp += dzString.charAt((cYear - 4) % 12);
        tmp += "(";
        tmp += sx.charAt((cYear - 4) % 12);
        tmp += ")年 ";**/
        if (cMonth < 1) {
            tmp += "(闰)";
            tmp += monString.charAt(-cMonth - 1);
        } else {
            tmp += monString.charAt(cMonth - 1);
        }
        tmp += "月";
        tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
        if (cDay % 10 != 0 || cDay == 10) {
            tmp += numString.charAt((cDay - 1) % 10);
        }
        return tmp;
    }
    function GetLunarDay(solarYear, solarMonth, solarDay) {
        //solarYear = solarYear<1900?(1900+solarYear):solarYear;
        if (solarYear < 1921 || solarYear > 2020) {
            return "";
        } else {
            solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
            e2c(solarYear, solarMonth, solarDay);
            return GetcDateString();
        }
    }
    //调用
    var D = new Date();
    var yy = D.getFullYear();
    var mm = D.getMonth() + 1;
    var dd = D.getDate();
    var ww = D.getDay();
    var ss = parseInt(D.getTime() / 1000);
    if (yy < 100) yy = "19" + yy;
    function GetCNDate() {
        return GetLunarDay(yy, mm, dd);
    }
	
function showLeftTime()
{
var now=new Date();
var year=now.getFullYear();
var month=now.getMonth()+1;
var day=now.getDate();
var hours=now.getHours();
var minutes=now.getMinutes();
var seconds=now.getSeconds(); 
var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var NLDay= GetCNDate();
if(seconds<10){seconds="0"+seconds;}
if(minutes<10){minutes="0"+minutes;}
if(hours<10){hours="0"+hours;}
document.getElementById("date").innerHTML=""+week[now.getDay()]+"("+year+"/"+month+"/"+day+"&nbsp;"+NLDay+")";
document.getElementById("time").innerHTML=""+hours+":"+minutes+":"+seconds+"";
//一秒刷新一次显示时间
var timeID=setTimeout(showLeftTime,1000);
}

/**隐藏底部导航**/
function heidennav(){
		var st=document.getElementById('bottom_butn').style.bottom;
		if(st==35+"px"){
			$("#bottom_butn").animate({"bottom":"0"},300).css({"background-image":"url(image/bottom_butn_1.png)"})
		    $(".page_foot").animate({"bottom":"-70px"},300)
		}
		if(st==0+"px"){
		  $("#bottom_butn").animate({"bottom":"35px"},500).css({"background-image":"url(image/bottom_butn.png)"})
		  $(".page_foot").animate({"bottom":"0px"},500)
		}
}





function change(fon){
 $(".table_list_1").addClass("on_table");
	 for(var i=1;i<4;i++){
		var sb="table_list_"+(i+1);
		$("."+sb).find("img").attr("src","image/icon/"+i+"-1.png")
		$("."+sb).removeClass("on_table")
	  }
 $(".top_title_box").animate({"height":"0px"},1000);
 $("#title_box").attr({"src":""})
     if(fon==0){
		$(".page_1,.page_2,.page_3").animate({"left":"-500px","opacity":"0"},500).animate({"left":"1530px","opacity":"0"},10);
		$(".page_0").animate({"left":"1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_3,.name_1,.name_2").fadeOut(300);
		$(".name_0").find("img").attr("src","image/icon/0-0-0.png");
		$(".name_0").fadeIn(300);
		$(".page_list3,.page_list1,.page_list2").children().removeClass("on_list");
		$(".page_list0").children().addClass("on_list");
		$("#change_3,#change_1,#change_2").removeClass("on_change");
		$("#change_0").addClass("on_change");
		$("#win8_page_0").attr("src","index_page/index.html")
		 }else if(fon==1){
	    $(".page_0,.page_2,.page_3").animate({"left":"-500px","opacity":"0"},500).animate({"left":"1530px","opacity":"0"},10);
		$(".page_1").animate({"left":"1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_0,.name_2,.name_3").fadeOut(300);
		$(".name_1").find("img").attr("src","image/icon/0-1-0.png");
		$(".name_1").fadeIn(300);
		$(".page_list0,.page_list2,.page_list3").children().removeClass("on_list");
		$(".page_list1").children().addClass("on_list");
		$("#change_0,#change_2,#change_3").removeClass("on_change");
		$("#change_1").addClass("on_change");
		$("#win8_page_1").attr("src","http://www.heben123.com/win8/buy/index.jsp")
		 }else if(fon==2){
		$(".page_1,.page_0,.page_3").animate({"left":"-500px","opacity":"0"},500).animate({"left":"1530px","opacity":"0"},10);
		$(".page_2").animate({"left":"1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_1,.name_3,.name_0").fadeOut(300);
		$(".name_2").find("img").attr("src","image/icon/0-2-0.png");
		$(".name_2").fadeIn(300);
		$(".page_list1,.page_list3,.page_list0").children().removeClass("on_list");
		$(".page_list2").children().addClass("on_list");
		$("#change_1,#change_3,#change_0").removeClass("on_change");
		$("#change_2").addClass("on_change");
		$("#win8_page_2").attr("src","http://www.heben123.com/win8/show/index.jsp")
		 }else if(fon==3){
		$(".page_1,.page_2,.page_0").animate({"left":"-500px","opacity":"0"},500).animate({"left":"1530px","opacity":"0"},10);
		$(".page_3").animate({"left":"1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_2,.name_1,.name_0").fadeOut(300);
		$(".name_3").find("img").attr("src","image/icon/0-3-0.png");
		$(".name_3").fadeIn(300);
		$(".page_list2,.page_list1,.page_list0").children().removeClass("on_list");
		$(".page_list3").children().addClass("on_list");
		$("#change_2,#change_1,#change_0").removeClass("on_change");
		$("#change_3").addClass("on_change");
		$("#win8_page_3").attr("src","http://www.heben123.com/win8/fashion/index.jsp")
		 }
	  now_data=fon;
	  return now_data;
}

function change1(fon){
     $(".table_list_1").addClass("on_table");
	 for(var i=1;i<4;i++){
		var sb="table_list_"+(i+1);
		$("."+sb).find("img").attr("src","image/icon/"+i+"-1.png")
		$("."+sb).removeClass("on_table")
	  }
	 $(".top_title_box").animate({"height":"0px"},1000);
	 $("#title_box").attr({"src":""})
     if(fon==0){
		$(".page_1,.page_2,.page_3").animate({"left":"1530px","opacity":"0"},500).animate({"left":"-1530px","opacity":"0"},10);
		$(".page_0").animate({"left":"-1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_1,.name_2,.name_3").fadeOut(300);
		$(".name_0").find("img").attr("src","image/icon/0-0-0.png");
		$(".name_0").fadeIn(300)
		$(".page_list1,.page_list2,.page_list3").children().removeClass("on_list");
		$(".page_list0").children().addClass("on_list");
		$("#change_1,#change_2,#change_3").removeClass("on_change");
		$("#change_0").addClass("on_change");
		$("#win8_page_0").attr("src","index_page/index.html")
		 }else if(fon==1){
	    $(".page_2,.page_3,.page_0").animate({"left":"1530px","opacity":"0"},500).animate({"left":"-1530px","opacity":"0"},10);
		$(".page_1").animate({"left":"-1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_0,.name_2,.name_3").fadeOut(300);
		$(".name_1").find("img").attr("src","image/icon/0-1-0.png");
		$(".name_1").fadeIn(300);
		$(".page_list2,.page_list3,.page_list0").children().removeClass("on_list");
		$(".page_list1").children().addClass("on_list");
		$("#change_2,#change_3,#change_0").removeClass("on_change");
		$("#change_1").addClass("on_change");
		$("#win8_page_1").attr("src","http://www.heben123.com/win8/buy/index.jsp")
		 }else if(fon==2){
		$(".page_3,.page_1,.page_0").animate({"left":"1530px","opacity":"0"},500).animate({"left":"-1530px","opacity":"0"},10);
		$(".page_2").animate({"left":"-1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_1,.name_0,.name_3").fadeOut(300);
		$(".name_2").find("img").attr("src","image/icon/0-2-0.png");
		$(".name_2").fadeIn(300);
		$(".page_list3,.page_list1,.page_list0").children().removeClass("on_list");
		$(".page_list2").children().addClass("on_list");
		$("#change_3,#change_1,#change_0").removeClass("on_change");
		$("#change_2").addClass("on_change");
		$("#win8_page_2").attr("src","http://www.heben123.com/win8/show/index.jsp")
		 }else if(fon==3){
		$(".page_0,.page_1,.page_2").animate({"left":"1530px","opacity":"0"},500).animate({"left":"-1530px","opacity":"0"},10);
		$(".page_3").animate({"left":"-1530px","opacity":"0"},10).animate({"left":"0px","opacity":"1"},500)
		$(".name_1,.name_2,.name_0").fadeOut(300);
		$(".name_3").find("img").attr("src","image/icon/0-3-0.png");
		$(".name_3").fadeIn(300);
		$(".page_list0,.page_list_1,.page_list_2").children().removeClass("on_list");
		$(".page_list3").children().addClass("on_list");
		$("#change_0,#change_1,#change_2").removeClass("on_change");
		$("#change_3").addClass("on_change");
		$("#win8_page_3").attr("src","http://www.heben123.com/win8/fashion/index.jsp")
		 }
	  now_data=fon;
	  return now_data;
}

var fon=0;
var now_data=0;
var scrollFunc=function(e){ 
var direct=0; 
e=e || window.event; 
if(e.wheelDelta){ 
direct=e.wheelDelta>0?1:-1; 
}else if(e.detail){ 
direct=e.detail<0?1:-1; 
 } 
  if(direct<0){
	nex();
  } else{
	pre();
  }
} 
//var doc=document.getElementById("win8_page");
//注册事件
/*if(document.addEventListener){ 
document.addEventListener('DOMMouseScroll',scrollFunc,false); 
}  //window.onmousewheel=document.onmousewheel=scrollFunc;
document.onmousewheel=scrollFunc;//IE/Opera/Chrome //IE/Opera/Chrome 
*/
function pre(){
	
	if(now_data==0){
		fon=3;
	}else{
		fon=now_data-1;
	}
	change1(fon);
}	
function nex(){
	if(now_data==3){
		fon=0;
	}else{
		fon=now_data+1;
	}
	change(fon);
}	


var sb;
function clicknum(sb){
	 var sd=$(".on_change").attr("id").substring(7,8)
	 if(sb<sd){
	   change1(sb)
	}else if(sb>sd){change(sb)}
  }
$(document).ready(function(){
  $(".change").click(function(){
	  sb=$(this).index();
	  	  clicknum(sb);
  })
})
$(document).ready(function(){
  $(".center_list li").click(function(){
	  sb=$(this).index();
	  	  clicknum(sb);
  })
})


$(document).ready(function(){
    $(".left_table li").click(function(){
	  sb=$(this).index();
	  for(var i=0;i<4;i++){
	   if(sb==i){
		 $(this).addClass("on_table");
		 if(sb==0){
			$(".top_title_box").animate({"height":"0px","opacity":"0","z-index":"-1"},5);
			$("#title_box").attr({"src":""})
			$(".win8_page").animate({"opacity":"1"},50);
			for(var j=0;j<4;j++){
			  var stt="name_"+j;
		      $("."+stt).find('img').attr("src","image/icon/0-"+j+"-0.png")
			}
		 }
		 else{
		     $(".on_table").find('img').attr("src","image/icon/"+sb+"-0.png")
			 $(".top_title_box").animate({"height":"450px","opacity":"1","z-index":"2000","padding":"5px"},1000);
			 if(sb==1){
		     $("#title_box").attr({"src":"logo/index.html"}).fadeIn(300);
			 }else if(sb==2){
				$("#title_box").attr({"src":"tools/index.html"}).fadeIn(300);
				} else{$("#title_box").attr({"src":"history/index.html"}).fadeIn(300);}
			$(".win8_page").animate({"opacity":"0"},1000);
		 }  
		}else{
			var sbt="table_list_"+(i+1);
			$("."+sbt).removeClass("on_table");
			if(i!=0){
			$("."+sbt).find('img').attr("src","image/icon/"+i+"-1.png")
			  }else{
				  for(var n=0;n<4;n++){
				   var st="name_"+n
				 $("."+st).find('img').attr("src","image/icon/0-"+n+"-1.png")
				}
			  }
			}
			  
	 }
  })
})


$(document).ready(function(){
    $(".center_left li").click(function(){
	  var sj=$(this).index();
	  if(sj==4){
		window.open("http://www.heben123.com/index2.jsp");
		}
	   for( var i=0;i<4;i++){ 
	     if(i==sj){
		   var id="Tools_"+sj;
		   var sss="tools_"+sj;
		   if($("."+id).width()==0){
			  $("."+id).fadeIn(500).animate({"width":"100%","height":"100%","z-index":"8500"},500);
			  if(sj==0){
			     $(this).css("background","url(image/foot_icon.png) no-repeat -30px 0")
				 $("#"+sss).attr("src","http://www.heben123.com/win8/home.html")
			   } 
			  if(sj==1){
			     $(this).css("background","url(image/foot_icon.png) no-repeat -30px -30px")
				 $("#"+sss).attr("src","http://www.heben123.com/win8/setbg.html")
			   } 
			   if(sj==2){
			     $(this).css("background","url(image/foot_icon.png) no-repeat -30px -60px")
				 $("#"+sss).attr("src","http://www.heben123.com/win8/share.html")
			   } 
			   if(sj==3){
			     $(this).css("background","url(image/foot_icon.png) no-repeat -30px -90px")
				 $("#"+sss).attr("src","http://www.heben123.com/win8/login.html")
			   } 
			}else{
			   $("."+id).animate({"width":"0px","height":"0px","z-index":"8000"},500).fadeOut(50);
			   $("#"+sss).attr("src","")
			   if(sj==0){
			     $(this).css("background","url(image/foot_icon.png) no-repeat")
			   } 
			  if(sj==1){
			     $(this).css("background","url(image/foot_icon.png) no-repeat 0 -30px")
			   } 
			   if(sj==2){
			     $(this).css("background","url(image/foot_icon.png) no-repeat 0 -60px")
			   } 
			   if(sj==3){
			     $(this).css("background","url(image/foot_icon.png) no-repeat 0 -90px")
			   } 
			}
		} else{
		   var id="Tools_"+i;
		   var sd="icon"+(i+1);
		   var sb="tools_"+i;
			if(i==0){
			      $("."+sd).css("background","url(image/foot_icon.png) no-repeat")
			   } 
			  if(i==1){
			      $("."+sd).css("background","url(image/foot_icon.png) no-repeat 0 -30px")
			   } 
			   if(i==2){
			      $("."+sd).css("background","url(image/foot_icon.png) no-repeat 0 -60px")
			   } 
			   if(i==3){
			      $("."+sd).css("background","url(image/foot_icon.png) no-repeat 0 -90px")
			   } 
		   $("."+id).animate({"width":"0px","height":"0px","z-index":"8000"},500).fadeOut(500);
		   $("#"+sb).attr("src","")
		}
	   }
  })
})



$(document).ready(function(){
    $(".new_page").click(function(){
			$(".new_page_box").animate({"top":"0px","opacity":"1"},1000);
			$(".box_min_box").animate({"z-index":"8000"},500).fadeIn(500);
			$(".new_page").animate({"opacity":"0"},1500);
			$("#bd_page").attr("src","sosuo_new/index.html")
  })
})

$(document).ready(function(){
    $(".new_page_bottom_butn,.box_min_box").click(function(){
			$(".new_page_box").animate({"top":"-500px","opacity":"0"},1000);
			$(".box_min_box").animate({"z-index":"-1"},500).fadeOut(500);
			$(".new_page").animate({"opacity":"1"},1500);
			$("#bd_page").attr("src","")
  })
})





$(document).ready(function(){
	var n=0
    $(".left_title li").click(function(){
		var sv=$(this).index();
		for(var i=0;i<5;i++){
		  if(i==sv){
			  var id="Med_"+sv;
			  var ids="ent_list"+sv;
			  var src=$("#"+ids).attr("src")
			  if(sv==0){ 
			     if(src==""){
					 $("#"+ids).attr("src","player/music/index.html")
				     $(this).find("img").attr("src","image/music_hover.png")
				 }
				}else if(sv==1){ 
			     if(src==""){
					 $("#"+ids).attr("src","player/tv/index.html")
					 $(this).find("img").attr("src","image/tv_hover.png")
					 }
				}else if(sv==2){ 
			     if(src==""){
					 $("#"+ids).attr("src","player/video/index.html")
					 $(this).find("img").attr("src","image/video_hover.png")
					 }
				}else if(sv==3){ 
			     if(src==""){
					 $("#"+ids).attr("src","player/radio/index.html")
					  $(this).find("img").attr("src","image/guangbo_hover.png")
					 }
				}else{ 
			     
				 for(var j=4;j>=0;j--){
				    if(j==sv){
					  if(src==""){$("#"+ids).attr("src","game/index.html")}	
					}else {
					  var svv="title_"+j;
					  $("#"+svv).find("img").attr("src",$("#"+svv).find("img").attr("src"))
					}
				  }
				}
			  if($("."+id).width()==0){
				$("."+id).animate({"z-index":"6000"},5).fadeIn(0).animate({"width":"1030px"},500)
				$("#bottom_butn").animate({"bottom":"0"},300).css({"background-image":"url(image/bottom_butn_1.png)"})
				$("#win8_page_foot").animate({"bottom":"-70px"},500)
			  }else{
			   $("."+id).animate({"width":"0px","z-index":"2"},500).fadeOut(0)
			   $("#bottom_butn").animate({"bottom":"35px"},500).css({"background-image":"url(image/bottom_butn.png)"})
			   $("#win8_page_foot").animate({"bottom":"0px"},500)
			 
			  }
			} else{
				var is="Med_"+i;
			
				$("."+is).animate({"width":"0px","z-index":"2"},500).fadeOut(0)
			}
	  }
		n=n+1;
  })
})

$(document).ready(function(){
    $(".clo").click(function(){
	  var st=$(this).attr("class").substring(10,11);
	  for(var i=0;i<5;i++)
	  { if(i==st){
		 var ids="ent_list"+st;
		 var id="Med_"+st;
		 var idd="title_"+st;
		 $("."+id).animate({"width":"0px","z-index":"2"},500).fadeOut(0)
		 if(st==0){
		   $("#"+idd).find("img").attr("src","image/music.png")
		 }else if(st==1){
		   $("#"+idd).find("img").attr("src","image/tv.png")
		 }else if(st==2){
		   $("#"+idd).find("img").attr("src","image/video.png")
		 }else if(st==3){
		   $("#"+idd).find("img").attr("src","image/guangbo.png")
		 }
		 $("#"+ids).attr("src","")
		 $("#bottom_butn").animate({"bottom":"35px"},500).css({"background-image":"url(image/bottom_butn.png)"})
		 $("#win8_page_foot").animate({"bottom":"0px"},500)
		 }
	}
  })
})

$(document).ready(function(){
    $(".min").click(function(){
		$(".Media").animate({"width":"0px","z-index":"2"},500).fadeOut(0);
		$("#bottom_butn").animate({"bottom":"35px"},500).css({"background-image":"url(image/bottom_butn.png)"})
		 $("#win8_page_foot").animate({"bottom":"0px"},500)
 })
})

