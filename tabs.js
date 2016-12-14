$(document).ready(function(){
	$('.tabs .tabs-b').eq(0).css('display','block');
	$('.tabs .tabs-h').eq(0).css('background','green');
	
	$('.tabs .tabs-h').on('click', function(){
		var a =$('.tabs .tabs-h').index(this);
		// console.log(a);
		//.eq- оставляет только элемент с порядковым номером а
		$('.tabs .tabs-b').css('display','none')
		$('.tabs .tabs-b').eq(a).css('display','block');
		$('.tabs .tabs-h').css('background','gold');
		$(this).css('background','green');
	});
});