
// open box
$(function(){	
    $('.open_bt')
	.click(function(){
	    $(this).next('.opencontent').slideToggle(90);
	})
});

// view grid li same height 

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function(){
//	equalheight('article li');
 });
$(window).resize(function(){
//	equalheight('article li');
 });

// go to article
$(function(){
	$('.p0').click(function(){ 
		$('html,body').animate({scrollTop:0}, 500); 
		}); 
	$('.p1').click(function(){ 
		$('html,body').animate({scrollTop:$('#website_ui').offset().top - $('header').outerHeight()}, 700); 
		}); 
	$('.p2').click(function(){ 
		$('html,body').animate({scrollTop:$('#edm_page').offset().top - $('header').outerHeight()}, 700); 
		}); 
	$('.p3').click(function(){ 
		$('html,body').animate({scrollTop:$('#template_welcome').offset().top - $('header').outerHeight()}, 700); 
		}); 
	$('.p4').click(function(){ 
		$('html,body').animate({scrollTop:$('#graphic').offset().top - $('header').outerHeight()}, 700); 
		}); 
	$('.p5').click(function(){ 
		$('html,body').animate({scrollTop:$('#work').offset().top - $('header').outerHeight() }, 700); 
		});
	$('.p6').click(function(){ 
		$('html,body').animate({scrollTop:$('#professional').offset().top - $('header').outerHeight() }, 700); 
		});
	$('.p7').click(function(){ 
		$('html,body').animate({scrollTop:$('#experience').offset().top - $('header').outerHeight() }, 700); 
		});
	$('.p8').click(function(){ 
		$('html,body').animate({scrollTop:$('#contact').offset().top - $('header').outerHeight() }, 700); 
		});
 });

// tab
$(function(){
	var _showTab = 0;
	$('.tab_box').each(function(){
		var $tab = $(this);
 
		var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
			if(location.hash!=''){
			$defaultLi =$('ul.tabs li a[href=' + location.hash + ']').parent().addClass('active').siblings('.active').removeClass('active').end();
		}
		$($defaultLi.find('a').attr('href')).siblings().hide();
 
		$('ul.tabs li', $tab).click(function() {
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			$this.addClass('active').siblings('.active').removeClass('active');
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
});

// copy email
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

// colorbox
$(".colorbox").colorbox({iframe:true, width:"90%", maxWidth:"800px", height:"90%", fixed:"false"});

