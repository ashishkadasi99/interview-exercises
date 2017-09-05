
function makeGraph(container, labels)
{
	//var data =  [49, 8];
	var data =  [49, 8, 23, 57, 94, 78, 94, 54, 75, 63];
   
    for(var i = 0; i < data.length; i++)
    {
        
    	var bVal = data[i];
    	var str = "<li style='height:"+data[i]+"px;top:"+(199 -data[i])+"px;left:"+(i * 50 + 20)+"px;' data-toggle='tooltip' title="+data[i]+"></li>";
    	$("#ullist").append(str);	
    	
    }	
}
$(document).ready(function() {


var json = $.getJSON("./data123.json");
makeGraph("graph", "labels");
});
