function domIterate(current, depth){
	if(!depth){
		depth=0;
	}
	if(current.nodeType==1){
		var txt='';
		for(var i=0; i<depth; i++){
			txt+='-';
		}
		txt+=current.tagName+'\n';
		for(var n=0; n<current.childNodes.length; n++){
			childTxt=domIterate(current.childNodes[n], depth+1)
			if(childTxt != null && childTxt !=''){
				txt+=childTxt;
			}
		}
		var currentNodeName=current.tagName;
		//Part2
		current.setAttribute("onclick", "alert('"+currentNodeName+"')");
		
		//current.addEventListener("click", function(e){ alert(e.currentTarget.nodeName); e.stopPropagation()}, false);
		//Part3
		if(current.hasAttribute("class") && current.className=="quote")
	    {
			current.addEventListener("mouseover", function(e){current.setAttribute('style', "background-color: black; color: white; position:relative; left:10px;")}, false);
			current.addEventListener("mouseout", function(e){current.setAttribute('style', "background-color: white")}, false);
			if (current.children[0].innerHTML=="Part 3: CSS Manipulation")
			{
				var new_node=current.cloneNode();
				new_node.innerHTML=current.innerHTML;
				alert(current.innerHTML);
				new_node.setAttribute("class", "new quote");
				document.getElementsByTagName("BODY")[0].appendChild(new_node);
				document.getElementsByTagName("BODY")[0].lastChild.addEventListener('mouseover',function(e){
					e.currentTarget.setAttribute('style', "background-color: black; color: white; position:relative; left:10px;")
				}, false);
				document.getElementsByTagName("BODY")[0].lastChild.addEventListener('mouseout',function(e){
					e.currentTarget.setAttribute('style', "background-color: white");
				}, false);
				
				
			}
	    }
		return txt;
	}
	else{
		return null;
	}
}

var doc_tree="HTML\n";

var html=document.getElementsByTagName("HTML")[0];
doc_tree+=domIterate(html);
	
	//if(html.childNodes[i].nodeType==1)
	//{
		//doc_tree+=html.childNodes[i].nodeName;
	//}

document.getElementById("info").innerHTML=doc_tree;