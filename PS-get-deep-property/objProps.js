function readProp(){
	var path = document.getElementById("pathTxt").value;
	var person =  {"person": {
			"name": {
				"first": 'FirstName', "middleInitial": 'I', "lastName": 'LastName'
					}
	}
	}; 
	var props = path.split('.');
	
	//alert(Reflect.get(person.person.name, 'first')); // 1)
	for (var int = 0; int < props.length; int++) {
		person = Reflect.get(person, props[int]); // 1)
	}
	if(person === undefined){
		document.getElementById("result").innerHTML = "the path is not found in object";
	}else{
		document.getElementById("result").innerHTML = "the value of path is <b>"+person+"</b>";
	}
	
	return person;
	
}

