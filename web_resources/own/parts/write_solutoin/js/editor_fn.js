var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/java");
editor.resize();

function save(){
	var editor = ace.edit("editor");
	//editor.setValue(editor.getValue());

	// var jsonValue = {}
	// jsonValue["user"] = "user_1";
	// jsonValue["task_id"] = "123e4567-e89b-12d3-a456-426655440000";
	// jsonValue["program_lang"] = "Java";
	// jsonValue["code"] = editor.getValue();
	
	// var data = new FormData();
	// data.append("data" , jsonValue.stringify(jsonValue));
	// var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	// xhr.open( 'put', 'http://localhost:8080/compilator', true);
	// xhr.send(data);
	
	console.log("save");
}

function compile(){
	var editor = ace.edit("editor");
	var jsonValue = {}
	jsonValue["user"] = "user_1";
	jsonValue["task_id"] = "123e4567-e89b-12d3-a456-426655440000";
	jsonValue["program_lang"] = "cpp";
	jsonValue["code"] = editor.getValue();
	
	// var data = new FormData();
	// data.append("data" , jsonValue.stringify(jsonValue));

	// var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
	// xhr.open( 'put', 'http://localhost:8080/compilator', true);
	// xhr.setRequestHeader("Content-type", "application/jsonValue");

	// xhr.onreadystatechange = function () {
	//     if (xhr.readyState === 4 && xhr.status === 200) {
	//         var json = JSON.parse(xhr.responseText);
	//         console.log(json.email + ", " + json.password);
	//     }
	// };

	var data = JSON.stringify(jsonValue);
	// xhr.send(data);

	$.ajax({
	    url: 'http://localhost:8080/compilator',
	    type: 'PUT',
	    contentType: 'application/json',
	    // dataType: 'json',
   		data: JSON.stringify(data),
	    success: function(result) {
	        console.log("miviget t t t");
	    }

	});

	console.log("compile");
}

function run(){
	console.log("run");
}

function compileSec(){
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:8080/compilator",
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "55b18e2f-b505-0c84-50d8-4d8b8090fa11"
  },
  "processData": false,
  "data": "{\n\t\"user\": \"user_1\",\n\t\"task_id\": \"task_UUID\",\n\t\"program_lang\": \"cpp\",\n\t\"code\": \"using namespace std;\"\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

	console.log("new compile");
}


// <script>
// 			var editor = ace.edit("editor");
// 			editor.setTheme("ace/theme/twilight");
// 			editor.getSession().setMode("ace/mode/java");
// 			editor.resize();
// 		</script>
// 		</script>
// 			function save(){
// 				var editor = ace.edit("editor");
// 				editor.setValue(editor.getValue());
// 			}
// 		</script>