function search_topic(field){
	console.log("The name of tipic: " + field.value);
}

$(document).ready(function(){
    $("#search").change(function(){
    	var value = $("#search").val();
        alert("The value is: " + value);
    });
});