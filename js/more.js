$(document).ready(function(){
	loadPlaylist();
})
 function loadPlaylist(){
 	$.ajax({
 		url:'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=AIzaSyCdCswuvxVV4Qyif3OmX614mmy7MY07b9Y&playlistId=PL1CME6_KVTbRVnak-i_Zy8jcyr0jbXAD-',
 		type:'GET',
 		dataType:'json',
 		success: function(data){
 			showPlaylist(data)
 		}
 	});
 }
 function showPlaylist(json){
 	var html= '';
 	html+= '<ul>'
 	$.each(json.items,function(i, item){
 		html+= '<li><img src="'+item.snippet.thumbnails.medium.url+'"</img><span>'+ item.snippet.title +'</span></li>';
 	});
 	$('.container #success').html(html);	
 }
