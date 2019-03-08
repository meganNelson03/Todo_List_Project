var input = true;

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todo + "</li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input").fadeToggle(500);
});