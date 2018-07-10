//加载当前日期
function loadDate(){
	var time = new Date();
	var myYear = time.getFullYear();
	var myMonth = time.getMonth() + 1;
	var myDay = time.getDate();
	if (myMonth < 10) {
		myMonth = "0" + myMonth;
	}
	document.getElementById("day_day").innerHTML = myYear + "." + myMonth + "."	+ myDay;
}

/**
 * 隐藏或者显示侧边栏
 * 
 **/
function switchSysBar(flag){
	var side = $('#side');
    var left_menu_cnt = $('#left_menu_cnt');
	if( flag==true ){	// flag==true
		left_menu_cnt.show(500, 'linear');
		side.css({width:'280px'});
		$('#top_nav').css({width:'77%', left:'304px'});
    	$('#main').css({left:'280px'});
	}else{
        if ( left_menu_cnt.is(":visible") ) {
			left_menu_cnt.hide(10, 'linear');
			side.css({width:'60px'});
        	$('#top_nav').css({width:'100%', left:'60px', 'padding-left':'28px'});
        	$('#main').css({left:'60px'});
        	$("#show_hide_btn").find('img').attr('src', 'images/common/nav_show.png');
        } else {
			left_menu_cnt.show(500, 'linear');
			side.css({width:'280px'});
			$('#top_nav').css({width:'77%', left:'304px', 'padding-left':'0px'});
        	$('#main').css({left:'280px'});
        	$("#show_hide_btn").find('img').attr('src', 'images/common/nav_hide.png');
        }
	}
}

$(function(){
	loadDate();
	
	// 显示隐藏侧边栏
	$("#show_hide_btn").click(function() {
        switchSysBar();
    });
});

//  点了有selected  图片是images/common/1_hover.jpg
//  没点无selected  图片是images/common/1.jpg
$(function(){
	$("#TabPage2 li").click(function () {
		var index = $(this).index();
        $("#TabPage2 img").each(function (index,img) {
			$(img).prop("src","images/common/"+(index+1)+".jpg");
        })
        $("#TabPage2").find(".selected").prop("src","images/common/"+(index+1)+"_hover.jpg");
        $("#TabPage2").find(".selected").removeClass();
        $(this).find("img").prop("src","images/common/"+(index+1)+"_hover.jpg");
        $(this).addClass("selected");
        $("#nav_module img").prop("src","images/common/module_"+(index+1)+".png");
		$("#here_area").html("当前位置：系统&nbsp;>&nbsp;"+$(this).find("img").prop("title"))
		var controller = $(this).data("rootmenu");
        $.fn.zTree.init($("#dleft_tab1"), setting, zNodes[controller]);
    })
})















