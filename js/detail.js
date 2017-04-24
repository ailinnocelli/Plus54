$(document).ready(function(){
	$('.carousel').carousel();


$(document).ready(function(){
    $(".img-modal").click(function(e){
    	var imgPath= $(e.toElement).attr("data-src-full");
    	$("#imgModal").attr("src",imgPath);
        $("#myModal").modal('show');
    });
});


	/*$.ajax({
		url: "json/info.json",
		error: function(e) {
			$('#info').html('<p>An error has occurred</p>');
			alert('hola error');
		},
		success: function(data) {
			var $title = $('<h1>').text(data.talks[0].talk_title);
			var $description = $('<p>').text(data.talks[0].talk_description);
			$('#info')
			.append($title)
			.append($description);
		},
		type: 'GET'
	});*/
})
