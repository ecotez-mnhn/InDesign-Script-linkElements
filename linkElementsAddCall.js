function add_ref(userSelect) {
	
if (userSelect.contents.substring(0,1).match(/\d/g)) {
	var onlyone=true;
}

	// Rechercher dans l'article toutes les occurences de la sélection
	requete = userSelect.contents ;
	requete = requete.replace(/(\(|\))/g,"");
	requete = requete.replace(/\s/g,"\\s");
	requete = requete.replace(/\./g,"\\.");
	requete = requete.replace(/(\d\d\d\d\l?)/g,"\\(?\$1");
	
	// alert (requete);
	
	if (onlyone==true) {
		userSelect.strokeColor="SCRIPT-COLOR-LinkReferences";
	} else {
		if (userSelect.contents.match(/\d\d\d\d/g)) {				
				app.findGrepPreferences=app.changeGrepPreferences=null;
				app.findGrepPreferences.appliedCharacterStyle=null ;
				app.findGrepPreferences.findWhat = requete ;
				myRes = app.activeDocument.findGrep();
			
				for (i=0;i<myRes.length;i++) {	
					myRes[i].strokeColor="SCRIPT-COLOR-LinkReferences";
				} 
			
		} else {
			alert("You have to select a call to a reference (with a year)!");			
			}
	}
}

// récupération de la sélection
mySel = app.selection;
if ( mySel.length!=1 || (!mySel[0].properties.baseline)) {
	alert("You have to select a call first!");
	} else {
		if ( mySel[0].length<50 ) {
				userSelect = mySel[0];
				add_ref(userSelect) ;
			} else {
				if (confirm("Are you sure that you want to highlight a so long character string?")) {
					userSelect = mySel[0];
					add_ref(userSelect) ;
					}
				}
		}
		
		