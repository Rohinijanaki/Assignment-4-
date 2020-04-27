(function() {
var names=["yaakov","john","jen","Jason","paul","frank","larry","paula","laura","jim"];

for (var i=0;i<names.length;i++){
	var firstletter=names[i].charAt(0).toLowerCase();
		if (firstletter==="j") {
			byeSpeaker.speak(names[i]);
	 	} 
	    else {
	   		helloSpeaker.speak(names[i]);
	  	}
	}
})();



