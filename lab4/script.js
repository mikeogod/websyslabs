$(document).ready(function(){
	$("#site").click(function(e){
		var url="http://websys/lab4/data/lab4.json";
		//var url="http://lab4.websys/data/lab4.json";
		$.ajax(url,
		{
			accepts:"json",
			async:true,
			type:"GET",
			contentType:"application/json",
			complete:function(jqXHR, statusStr){
			},
			success:function(data, stateStr, jqXHR){
				alert("success");
				var songs=data.songs;
				for(var i=0; i!=songs.length; i++)
				{
					var classname=".song"+(i+1).toString();
					$("#title "+classname).html(songs[i]["track name"]);
					$("#artist "+classname).html(songs[i]["artist"]);
					$("#artist "+classname).append("<a href='#'></a>");
					$("#artist "+classname+" a").html(songs[i]["artist site url"]).attr("href",songs[i]["artist site url"]);
					$("#album "+classname).html(songs[i]["album"]);
					$("#album "+classname).append("<img width='100' height='100'>");
					$("#album "+classname+" img").attr("src", songs[i]["album cover url"]).attr("alt", "Image not found");
					$("#date "+classname).html(songs[i]["date"]);
					var genres="";
					for(var j=0; j!=songs[i]["genres"].length; j++)
					{
						genres+=(songs[i]["genres"][j]["name"]+", ");						
					}
					//Strip the comma at the end of the string
					genres=genres.slice(0, genres.length-2);
					$("#genres "+classname).html(genres);
				}
			},
			error:function(jqXHR, statusStr, errorStr){
				var error_msg=statusStr+": "+errorStr;
				$("body").append("<p id='errormsg'></p>");
				$("#errormsg").html("Failed to complete operation. Error message: "+error_msg);
			},
			statusCode:{
				404:function(){
					alert("Resource Not Found");
				}
			},
			beforeSend:function(){
				
			},
			cache:true,
			contents:{
				
			},
			crossDomain:false,
			data:{
				
			},
			global:true,
			headers:{
				
			},
			ifModified:false,
			username: "",
			password: "",
			traditional:true
		});
	});
});