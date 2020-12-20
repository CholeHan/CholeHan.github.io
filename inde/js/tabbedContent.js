//tab effects
var TabbedContent = {
    init: function() {
        $(".tab_item").toggle(function() {
            $('.pointer').show();
            //$(this).stop().fadeTo(500, 1).siblings().stop().fadeTo(500, 0.15);
			$(this).removeClass('host').siblings().addClass('host');
            TabbedContent.slideContent($(this));			
        },
        function(){ 		
            $('.pointer').hide();
            $('.slide_box').animate({'bottom': '-237px'});
            $(".default-style.dis_none").slideDown('fast') 
			//$(this).stop().fadeTo(500, 1).siblings().stop().fadeTo(500, 1);
			$(this).removeClass('host').siblings().removeClass('host');
        });
    },
    slideContent: function(obj) {
        var margin = $(obj).parent().parent().parent().find(".slide_content").width(); //alert(margin) //648px
        var li_margin = $(obj).parent().parent().parent().find(".change-list li").width(); //33px
        var pointer = $(obj).parent().parent().parent().find(".pointer");        //pointer.show();
        $(obj).parent().parent().parent().find(".default-style.dis_none").slideUp('slow');
        $(obj).parent().parent().parent().find(".slide_box").animate({
            bottom: '0px'
        });
        margin = margin * ($(obj).prevAll().size()); //alert(margin)  33 66 99 
        margin = margin * -1;
        if ($(obj).prevAll().size() < 11) {
            pointerpos = (li_margin) * ($(obj).prevAll().size()) + (18 * $(obj).prevAll().size())+12; 
            $(obj).parent().parent().parent().find(".pointer").stop().animate({
                left: pointerpos + "px"
            },300);
        } else if (($(obj).prevAll().size() < 22) && ($(obj).prevAll().size() > 10)) {		
            pointerpos = (li_margin) * ($(obj).prevAll().size() - 11) + (18 * ($(obj).prevAll().size() - 11)) + 12;
            $(obj).parent().parent().parent().find(".pointer").stop().animate({
                left: pointerpos + "px"
            },300);
        }
        $(obj).parent().parent().parent().find(".tabslider").stop().animate({
            marginLeft: margin + "px"
        },300);
    }
}
$(document).ready(function() {
    TabbedContent.init();
});