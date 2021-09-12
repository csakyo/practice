'use strict';
var tab_details = document.querySelectorAll('button');
document.tab_details.addEventListener('click', () => {
console.log('click');
});


// $(document).ready(function(){S
// $(function(){
// 	$('.tab_details button').on('click', function(){
// 		var idx = $('.tab_details button').index(this);
// 		$('.tab_section').hide().eq(idx).fadeIn(300);
// 	});
// 	$('body').click(function (event) {
// 		if(
//         !$(event.target).closest('.tab_section').length &&
//         !$(event.target).is('.tab_section') &&
//         !$(event.target).closest('.tab_details').length &&
//         !$(event.target).is('.tab_details') ) {
//             console.log('aaa');
// 		  $(".tab_section:visible").hide();
// 		}
// 	 });
//   })
// })